import React, { useContext } from "react";
import { ListProductsContext } from "../../contexts";

function OrderFilter() {

    const { isOrdered, handleOrderClick } = useContext(ListProductsContext);

    return (

        <button onClick={handleOrderClick}>
            {isOrdered ? "Remover ordenação" : "Ordenar de A-Z"}
        </button>

    )

}

export default OrderFilter;