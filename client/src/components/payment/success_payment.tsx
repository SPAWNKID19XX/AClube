import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

const SuccessPaymentPage = () => {
    return(
        <>
            <div className="payment-information">
                <h1>Success payment</h1>
            </div>
        </>
    )
}

export default SuccessPaymentPage;