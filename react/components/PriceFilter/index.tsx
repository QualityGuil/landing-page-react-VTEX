import React, { useContext } from "react";
import { ListProductsContext } from "../../contexts";

function PriceFilter() {

    const { filterPrice, setFilterPrice } = useContext(ListProductsContext);

    return (

        <input
            type="number"
            value={filterPrice === 0 ? "" : filterPrice}
            placeholder="Filtre pelo preço"
            step="any"

            onChange={(event) => {
                const valueAsString = event.target.value

                const valueAsNumber = parseFloat(valueAsString || '0')

                setFilterPrice(valueAsNumber)
            }}
        />

    )

}

export default PriceFilter;