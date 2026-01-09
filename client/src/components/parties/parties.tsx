import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import styles from'./parties.module.css'
import { useContext, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../auth-context/auth-context';

const BASE_DRF_URL = import.meta.env.VITE_API_URL


interface PartyPriceList {
    id:number;
    price_name: string;
    fixed_amount: string;
    party: number;
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
    prices: PartyPriceList,
}


const fetchParties = async (token: string | null): Promise<Party[]> => {
    const response = await axios.get(`${BASE_DRF_URL}/parties/api/v1/party-list/`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return response.data;
};

function Parties() {
    const {i18n} = useTranslation();
    const { accessToken } = useContext(AuthContext);
    const queryClient = useQueryClient();
    
    const { data: parties = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['parties', accessToken],
        queryFn: () => fetchParties(accessToken),
    });

    console.log('++**++',parties)
    const [selectedPrices, setSelectedPrices] = useState<Record<number, string>>({});

    const handlePriceChange = (partyId: number, priceId: string) => {
        setSelectedPrices((prev) => ({
            ...prev,
            [partyId]: priceId,
        }));
    };

    if (isLoading) return <div>Загрузка вечеринок...</div>;
    if (isError) return <div>Ошибка: {(error as any).message}</div>;


    const handleJoin= async (partyId: number, priceId:string | undefined)  => {
        if (!accessToken) {
            alert("TOken doesnt exist pleasy try login again");
            return;
        }
        if (!priceId) {
            alert("Please select a ticket type!");
            return;
        }
        try {
            const response = await axios.post(
                `${BASE_DRF_URL}/parties/api/v1/party-list/${partyId}/join/`,
                {price_id: priceId}, 
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}` 
                    }
                }
            );
            alert(response.data.detail);

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
                                    value={currentSelectedPrice} // Добавь это для синхронизации
                                    onChange={(e) => handlePriceChange(party.id, e.target.value)}
                                >
                                    <option value="">Select Tarif</option>
                                    {party.prices?.map((price: PartyPriceList, index: number) => (
                                        <option key={price.id || index} value={price.id}>
                                            {price.price_name} — {price.fixed_amount}€
                                        </option>
                                    ))}
                                </select>
                                <button 
                                    onClick={() => handleJoin(party.id, currentSelectedPrice)} 
                                    className={styles.join_to_party}
                                    disabled={!currentSelectedPrice} // Не даем нажать без выбора тарифа
                                >
                                    Join
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