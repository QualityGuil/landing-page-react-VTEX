import React from "react";

function TestComponent() {

    const requisicao = async () => {
        const response = await fetch("/api/catalog_system/pub/products/search/acct");
        const data = await response.json();

        return data
    }

    console.log(requisicao);

    return(
        <h1>Teste</h1>
    )

}

export default TestComponent;