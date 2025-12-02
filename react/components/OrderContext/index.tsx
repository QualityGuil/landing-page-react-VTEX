import React, { useEffect } from "react";
import { OrderForm } from "vtex.order-manager"

const OrderContext = () => {
    const { useOrderForm } = OrderForm;
    const { orderForm, setOrderForm } = useOrderForm();
    // const orderFormContext = useOrderForm();

    // console.log('orderFormContext🚀: ', orderFormContext);

    useEffect(() => {
        const myItem = orderForm && {
            ...orderForm.items[0],
            name: "Guilherme França Fernandes Example"
        }

        // Setta em alguns console.log da aplicação e substitui o item todo, somente deixando o nome
        setOrderForm({
            items: myItem
        })
    }, []);

    console.log('orderForm🚀: ', orderForm);

    return <></>
}

export default OrderContext;