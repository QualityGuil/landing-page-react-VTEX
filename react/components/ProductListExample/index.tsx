import React, { useContext } from "react";
import { ListProductsContext } from "../../contexts";
import { Product } from "../../typings/product";
import ProductCard from "../ProductCard/ProductCard";


function ProductListExample() {

    const { displayedProducts } = useContext(ListProductsContext);

    return (
        <div>

            <div className="product__container">
                {displayedProducts.map((product: Product) => {
                    return (
                        <ProductCard
                            key={product.productId}
                            product={product}
                        />
                    )

                })}
            </div>
        </div>
    );
}

export default ProductListExample;
