import React, { createContext, useState, useEffect, useMemo } from "react";

import { Product } from "../typings/product";

export const ListProductsContext = createContext<any>('');

export function ListProductsProvider({ children }: any) {

    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>("");
    const [isOrdered, setIsOrdered] = useState<boolean>(false);
    const [filterPrice, setFilterPrice] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/catalog_system/pub/products/search/acct");
                if (!response.ok) throw new Error("Erro de requisição API");

                const data = await response.json();

                console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-');
                console.log(data);

                setProducts(data);
            } catch (err) {
                console.log("Erro no Fetch:", err);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((product: Product) =>
            product.productName.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    const orderProducts = useMemo(() => {
        let list = [...filteredProducts];
        if (isOrdered) {
            list.sort((a, b) => a.productName.localeCompare(b.productName));
        }
        return list;
    }, [filteredProducts, isOrdered]);

    const displayedProducts = useMemo(() => {
        let list = [...orderProducts];
        if (filterPrice === 0) {
            return list;
        } else {
            return list.filter((product) => {
                const price = product.items?.[0]?.sellers?.[0]?.commertialOffer?.Price;

                return price !== undefined && price <= filterPrice;
            });
        }
    }, [orderProducts, filterPrice]);

    const handleOrderClick = () => {
        setIsOrdered((prev: boolean) => !prev);
    };

    return (
        // Terá erro caso não tenha um props sendo passado
        <ListProductsContext.Provider value={{ products, setProducts, search, setSearch, isOrdered, setIsOrdered, filterPrice, setFilterPrice, filteredProducts, orderProducts, displayedProducts, handleOrderClick }}>
            {children}
        </ListProductsContext.Provider>

    )

}

{/* <ListProductsProvider>
    <ComponentOne></ComponentOne>
    <ComponentOne></ComponentOne>
    <ComponentOne></ComponentOne>
</ListProductsProvider> */}
