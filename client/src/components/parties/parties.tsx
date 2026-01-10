import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import styles from'./parties.module.css'
import { useContext, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../auth-context/auth-context';

const BASE_DRF_URL = import.meta.env.VITE_API_URL


interface PartyPriceList {
    id:number;
    price_name?: string;
    fixed_amount?: string;
    party?: number;
}

interface Party {
    id: number;
    title: string;
    max_invited: number,
    country: string,
    region: string,
    city: string,
    address: string,
    zip_code: string,
    getting_places_1: string,
    getting_places_2?: string,
    getting_places_3?: string,
    getting_places_4?: string,
    getting_places_5?: string,
    description: string,
    start_dt: string,
    finish_dt: string,
    created_by: number,
    ghosts: number[],
    reg_counted:number,
    prices: PartyPriceList[],
}


const fetchParties = async (token: string | null): Promise<Party[]> => {
    const response = await axios.get(`${BASE_DRF_URL}/parties/api/v1/party-list/`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return response.data;
};

function Parties() {
    const [isJoining, setIsJoining] = useState(false);

    const {i18n} = useTranslation();
    const { accessToken } = useContext(AuthContext);
    const queryClient = useQueryClient();
    
    const [selectedPrices, setSelectedPrices] = useState<Record<number, string>>({});

    const { data: parties = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['parties', accessToken],
        queryFn: () => fetchParties(accessToken),

    });

    const allPricesList = useMemo(() => {
        // Проходим по всем вечеринкам и собираем их цены в один массив
        return parties.flatMap(party => party.prices || []);
    }, [parties]); 

    if (parties.length > 0) {
        console.log("Avaliable Price List", allPricesList);
    }
    
    

    
    const handlePriceChange = (partyId: number, priceId: string) => {
        setSelectedPrices((prev) => ({
            ...prev,
            [partyId]: priceId,
        }));
    };

    if (isLoading) return <div>Загрузка вечеринок...</div>;
    if (isError) return <div>Ошибка: {(error as any).message}</div>;


    const handleJoin= async (partyId: number, priceId: number | undefined)  => {
        if (!accessToken) {
            alert("TOken doesnt exist pleasy try login again");
            return;
        }
        if (isJoining) return; 
        setIsJoining(true);

        try {
            const response = await axios.post(
                `${BASE_DRF_URL}/parties/api/v1/party-list/${partyId}/join/`,
                {price_id: priceId}, 

                {
                    method:'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            alert(response.data.detail);

            const { clientSecret } = response.data;

            if (clientSecret) {
                // ЗДЕСЬ БУДЕТ ВЫЗОВ STRIPE ЭЛЕМЕНТОВ
                console.log("Payment Intent Created. Secret:", clientSecret);
                // Например: window.location.href = `/checkout?session=${clientSecret}`;
            } else {
                alert(response.data.detail);
            }

            queryClient.invalidateQueries({ queryKey: ['parties'] });

        } catch (error: any) {
            if (error.response) {
                // Ошибка от сервера (400, 401, 403, 500)
                console.error("Server Error Data:", error.response.data);
                alert(`Error: ${error.response.data.detail || "Something went wrong"}`);
            } else if (error.request) {
                // Запрос ушел, но ответа нет (сервер лежит)
                alert("No response from server. Check your connection.");
            } else {
                // Ошибка при настройке запроса
                alert("Request Error: " + error.message);
            }
        }  finally {
        setIsJoining(false); 
    }
    }


    return (
    <>
        <div>
            <h1>Partie List</h1>
            <div className={styles.party_list}>
                {parties.map((party) => {
                    const currentSelectedPrice = selectedPrices[party.id] || "";
                    return (
                        <div className={styles.single_party} key={party.id}>
                            <div className={styles.image_section}></div>
                            <div className={styles.text_section}>
                                <h2>{party.title}</h2>
                                <p>{party.description}</p>
                                <small>
                                    City: {party.city} | Max ghosts: {party.max_invited} 
                                    <p>
                                        Date: {new Date(party.start_dt).toLocaleString(i18n.language, {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                    <p>
                                        Available ghosts: {party.max_invited - party.reg_counted}
                                    </p>
                                </small>
                            </div>
                            <div className={styles.btn_section}>
                                <select 
                                    value={currentSelectedPrice} 
                                    onChange={(e) => handlePriceChange(party.id, e.target.value)}
                                >
                                    <option value="">Select Tarif</option>
                                    {party.prices?.map((price: PartyPriceList, index: number) => {
                                        // Если ID вдруг нет, используем комбинацию, чтобы React не ругался
                                        const uniqueKey = price.id ? `price-${price.id}` : `idx-${party.id}-${index}`;
                                        
                                        if (!price.id) {
                                            console.warn("Внимание: у объекта цены отсутствует ID!", price);
                                        }

                                        return (
                                            <option key={uniqueKey} value={price.id}>
                                                {price.price_name} — {price.fixed_amount}€
                                            </option>
                                        );
                                    })}
                                </select>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleJoin(party.id, currentSelectedPrice);
                                    }}
                                    className={styles.join_to_party}
                                    disabled={!currentSelectedPrice || isJoining}
                                >
                                    {isJoining ? "Processing..." : "Join"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
);

};

export default Parties