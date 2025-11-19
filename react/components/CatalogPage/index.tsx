import React from "react";
import SearchBarGui from "../SearchBarGui";
import ProductListExample from "../ProductListExample";
import OrderFilter from "../OrderFilter";
import { ListProductsProvider } from "../../contexts";
import PriceFilter from "../PriceFilter";

function CatalogPage() {
    return (
        <ListProductsProvider>

            <SearchBarGui />
            <OrderFilter />
            <PriceFilter />

            <ProductListExample />

        </ListProductsProvider>
    )
}

export default CatalogPage;