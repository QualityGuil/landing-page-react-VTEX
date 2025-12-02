import React from "react";
import { useProduct } from "vtex.product-context";

const ProductContext = () => {
    const productContext = useProduct();

    console.log('productContext🚀: ', productContext);

    return <>{productContext?.product?.productName}</>
}

export default ProductContext;