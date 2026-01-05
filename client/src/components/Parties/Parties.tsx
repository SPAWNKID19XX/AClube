import './Parties.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

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

    useEffect(() => {
        const fetchData = async () => {
            const parties_list = await axios.get<Party[]>('http://127.0.0.1:8000/parties/api/v1/party-list/')
            setParties(parties_list.data)           
        }

        fetchData();

        return () => {
            
        };
    }, []);


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
                            <button className='join_to_party'>Join</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Parties