import React, { useEffect, useState } from "react"
import { api } from '../../services/apis'

const Home = () => {

    const [message, setMessage] = useState(null)
    const [payment_methods, setPaymentMethods] = useState(null)

    useEffect(() => {
        
        const getMessage = async () => {
            try{
                setMessage((await api.get('/')).data.data)
            }
            catch{
                setMessage(null)
            }
        }
        const getPaymentMethods = async () => {
            try{
                setPaymentMethods((await api.get('/formas_pagamento')).data.data)
            }
            catch{
                setPaymentMethods(null)
            }
        }
        getMessage()
        getPaymentMethods()

    }, [])

    return (
        <>
            <div>
                <label data-testid='message'>{message}</label>
                {payment_methods && payment_methods.map((payment) => {
                    return <div key={payment.id} data-testid='payment'>{payment.forma_pagamento}</div>
                })}
            </div>
        </>
    )
}

export default Home