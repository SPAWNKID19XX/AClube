import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import api from '../../api/exios'
import { useQuery } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_URL

const SuccessPaymentPage = () => {

    const [searchParametr] = useSearchParams()
    const sessionId = searchParametr.get('session_id')

    console.log("SESSIONID", sessionId);
    
    const { data, isLoading, isError} = useQuery({
        queryKey : ["confirmationPayment", sessionId],
        queryFn : async () => {
            const response = await api.post('payments/api/v1/confirmation-payment/', 
                {session_id:sessionId}
            )
            return response.data
        },
        enabled:!!sessionId,
        retry: false,
        refetchOnWindowFocus: false
    })
    

    return(
        <>
            <div className="payment-information">
                <h1>Success payment</h1>
                <small>
                    <p>payment session_id {sessionId}</p>
                </small>
                
            </div>
        </>
    )
}

export default SuccessPaymentPage;