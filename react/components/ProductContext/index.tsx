import React, { useEffect } from "react";
import { useProduct, useProductDispatch } from "vtex.product-context";

const ProductContext = () => {
    const productContext = useProduct();
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

    console.log('productContext🚀: ', productContext);
    // console.log('product🚀: ', product);

    return <h1>{productContext?.product?.productName}</h1>

    // Não funciona importando diretamente o objeto product
    // const { product } = useProduct();
    // return <>{product?.productName}</>
}

export default ProductContext;