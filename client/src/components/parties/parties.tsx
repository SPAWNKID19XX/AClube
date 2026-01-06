import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import styles from'./parties.module.css'
import { useContext } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../auth-context/auth-context';

const BASE_DRF_URL = import.meta.env.VITE_API_URL

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
    ghosts: number[]
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

    if (isLoading) return <div>Загрузка вечеринок...</div>;
    if (isError) return <div>Ошибка: {(error as any).message}</div>;


    const handleJoin= async (partyId: number) => {

        console.log('Твой токен из куки:', accessToken);

        if (!accessToken) {
            alert("Токен не найден. Пожалуйста, войдите в систему.");
            return;
        }
        try {
            const response = await axios.post(
                `${BASE_DRF_URL}/parties/api/v1/party-list/${partyId}/join/`,
                {}, 
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
                    {parties.map((party) => (
                        <div className={styles.single_party} key={party.id}>
                            <div className={styles.image_section}>

                            </div>
                            <div className={styles.text_section}>
                                <h2>{party.title}</h2>
                                <p>{party.description}</p>
                                <small>City: {party.city} | Max ghosts: {party.max_invited} 
                                    <p>
                                        Date:  {new Date(party.start_dt).toLocaleString(i18n.language, {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </small>
                            </div>
                            <div className={styles.btn_section}>
                                <button onClick={()=>handleJoin(party.id)} className={styles.join_to_party}>Join</button>
                            </div>
                                                        
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Parties