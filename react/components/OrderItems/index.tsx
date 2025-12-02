// Tive que importar com o seguinte comando "yarn add @vtex/order-items"
import React, { useEffect } from 'react';
import { useOrderItems } from 'vtex.order-items/OrderItems';

const OrderItems = () => {

    const { addItems } = useOrderItems();

    // function handdleClick() {
    //     addItems([{
    //         id: "2",
    //         quantity: 1,
    //         seller: "1"
    //     }])
    // }

    useEffect(() => {
        addItems([{
            id: "2",
            quantity: 1,
            seller: "1"
        }])

        console.log("Teste carrinho⚠️");
    }, []);

    // return <button onClick={handdleClick}>addToCBart</button>
    return <></>

}

export default OrderItems