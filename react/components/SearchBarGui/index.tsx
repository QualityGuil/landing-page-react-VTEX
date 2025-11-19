import React, { useContext } from "react";
import { ListProductsContext } from "../../contexts";

function SearchBarGui() {

    const { search, setSearch } = useContext(ListProductsContext);

    return (

        <input
            type="text"
            value={search}
            placeholder="Busque seu produto"
            onChange={(event) => setSearch(event.target.value)}
        />

    )

}

export default SearchBarGui;