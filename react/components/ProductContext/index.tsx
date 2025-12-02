import React, { useEffect } from "react";
import { useProduct, useProductDispatch } from "vtex.product-context";
import type { ProductContextState } from 'vtex.product-context/react/ProductContextProvider'

const ProductContext = () => {
    // const productContext = useProduct();
    const { product } =useProduct() as ProductContextState 
    const dispatch = useProductDispatch();

    useEffect(() => {
        // Está retornando um erro pela possibilidade do dispatch ser null
        if (!dispatch) {
            console.log('dispatch está null');
        } else {
            dispatch({
                type: "SET_QUANTITY",
                args: { quantity: 50 }
            })
        }
    }, []);

    console.log('productContext🚀: ', product);
    // console.log('product🚀: ', product);

    return <h1>{product?.productName}</h1>

    // Não funciona importando diretamente o objeto product
    // const { product } = useProduct();
    // return <>{product?.productName}</>
}

export default ProductContext;