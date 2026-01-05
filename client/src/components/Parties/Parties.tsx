import './Parties.css'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../AuthContext/AuthContext';

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


function Parties() {
    const [parties, setParties] = useState<Party[]>([])
    const {i18n} = useTranslation();

    const { accessToken } = useContext(AuthContext);
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/parties/api/v1/party-list/`,
                {
                    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
                }
            );
            setParties(response.data)
            } catch (error) {
                console.error(error)
            }
            
        }
        fetchData()
        
    }, [accessToken]);

    const handleJoin= async (partyId: number) => {

        console.log('Твой токен из куки:', accessToken);

        if (!accessToken) {
            alert("Токен не найден. Пожалуйста, войдите в систему.");
            return;
        }
        try {

            const response = await axios.post(
                `http://127.0.0.1:8000/parties/api/v1/party-list/${partyId}/join/`,
                {}, 
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}` 
                    }
                }
            );
            alert(response.data.detail);
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
                <div className="party-list">
                    {parties.map((party) => (
                        <div key={party.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
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
                            <button onClick={()=>handleJoin(party.id)} className='join_to_party'>Join</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Parties