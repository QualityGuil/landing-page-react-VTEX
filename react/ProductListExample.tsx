import React from "react";

import ProductListExample from "./components/ProductListExample";
import { ListProductsProvider } from "./contexts";
// import { ListProductsContext } from "./contexts";

function ProductList() {
    return (
        <ListProductsProvider>
            <ProductListExample />
        </ListProductsProvider>
    )
}

export default ProductList;