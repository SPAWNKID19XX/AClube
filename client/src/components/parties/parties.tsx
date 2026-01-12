import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import styles from'./parties.module.css'
import { useContext, useState} from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { AuthContext } from '../auth-context/auth-context';
import { useAuth } from '../../hooks/useAuth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

interface PartyPriceList {
    id:number;
    name?: string;
    price?: string;
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

const base_url = import.meta.env.VITE_API_URL

const all_parties_list = axios.create({
    baseURL: base_url+ '/parties/api/v1/'
})

const fetchParties = async (): Promise<Party[]> => {
    const {data} = await all_parties_list.get<Party[]>(
        'party-list',
    )
    return data
}




function Parties(){
    const {i18n} = useTranslation()
    const [selectedPriceId, setSelectedPriceId] = useState<number | null>(null)
    const queryClient = useQueryClient()

    const { accessToken } = useAuth();

    console.log('*******************',accessToken);
    

    const {mutate, isPanding} = useMutation({
        mutationFn: async ({partyId, priceId}: {partyId: number, priceId: number }) => {
        
            const response = await all_parties_list.post(`/party-list/${partyId}/join/`, { 
                party_id: partyId, 
                price_id: priceId 
            },
            {
                headers: { 
                    Authorization: `Bearer ${accessToken}` 
                },                
            }
        
        );            
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['parties'] });
            alert("Success join!");
        },
        onError: (error: any) => {
            alert(error.response?.data?.detail || "Error joining party");
        }
    })
    
    const handleJoin = (partyId: number, priceId:number) => {
        if (!priceId) {
            alert("Price does not exist")
        }
        console.log(partyId);
        console.log('===',priceId);
        
        mutate({ partyId, priceId})
    }


    const { 
        data: parties, 
        isLoading, 
        error, 
        isError 
    } = useQuery<Party[]>({
        queryKey: ['parties'], 
        queryFn: fetchParties, 
    });

    if (parties) console.log('Parties list',parties)

    if (isLoading) return <div>Loading party list...</div>
    if (isError) return <div><h1>{error.message}</h1></div>




        
    return (
        <>
            <div>
                <h1>Partie List</h1>
                <div className={styles.party_list}>
                    {
                        parties?.map((party) =>{
                            const currentPrice =  party.prices?.find(price => price.id === selectedPriceId)
                            
                            
                            return(
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
                                            value={selectedPriceId || ""} 
                                            onChange={(e) => setSelectedPriceId(e.target.value)}
                                        >
                                            <option value="">Select Tarif</option>
                                            {party.prices?.map((price: PartyPriceList, index: number) => {
                                                const uniqueKey = price.id ? `price-${price.id}` : `idx-${party.id}-${index}`;
                                                if (!price.id) {
                                                    console.warn("Внимание: у объекта цены отсутствует ID!", price);
                                                }


                                                return (
                                                    <option key={uniqueKey} value={price.id}>
                                                        {price.name} — {price.price}€
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <button 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleJoin(party.id, selectedPriceId);
                                            }}
                                            className={styles.join_to_party}
                                            disabled={!selectedPriceId || isPanding}
                                        >
                                            {isPanding ? "Processing..." : "Join"}
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );

}


export default Parties