import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider options={{ 'clientId': 'AUvGTmdYLXcE6tVzxj9nY_hVKlKOGKhuErMPST8UZFLb3ZNjp8_drLN2yAdtcDvd561RR_0C7WlEnRwd' }}>
            {/* <PayPalScriptProvider options={{ 'clientId': import.meta.env.VITE_PAYPAL_CLIENT_ID }}> */}
            <PayPalButtons style={{ layout: 'vertical' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { value: parseFloat(amount).toFixed(2) } }]
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess)
                }}
                onError={onError}
            ></PayPalButtons>
        </PayPalScriptProvider>
    )
}

export default PayPalButton