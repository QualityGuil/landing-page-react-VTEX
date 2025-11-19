import React, { useState } from "react";
import TextField from "../TextField";
import styles from './index.module.css'

function FormContainer() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const checkResponse = await fetch(
                `/api/dataentities/FG/search?_fields=email,document&_where=email=${email} OR document=${document}`,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/vnd.vtex.ds.v10+json"
                    },
                }
            );

            if (!checkResponse.ok) {
                throw new Error("Erro ao verificar duplicidade.");
            }

            const existingData = await checkResponse.json();

            if (existingData.length > 0) {
                alert("Já existe um cadastro com esse e-mail ou documento.");
            } else {
                const response = await fetch("/api/dataentities/FG/documents", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/vnd.vtex.ds.v10+json"
                    },
                    body: JSON.stringify({
                        name,
                        lastName,
                        age: Number(age),
                        email,
                        document,
                        city,
                        state
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                alert("Cadastro enviado com sucesso!");

                setName('');
                setLastName('');
                setAge('');
                setEmail('');
                setDocument('');
                setCity('');
                setState('');
            }

        } catch (error) {
            console.error(error);
        }

    };

    const API_PATH = '/_v/addUser';

    const userData = {
        name: "Teste Junior Pereira",
        lastName: "Da Silva Junior Junior",
        age: 30,
        email: "testeJuniorDaSilvaJuniorJuniorPereira@exemplo.com",
        // document: "50233523073",
        document: "123",
        city: "Rio de Janeiro",
        state: "RJ"
    };

    async function registerUser() {
        try {
            const response = await fetch(`${API_PATH}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", // ESSENCIAL: Diz que o body é JSON
                    "Accept": "application/json" // RECOMENDADO: Diz que você espera JSON de volta
                },
                body: JSON.stringify(userData) // Converte o objeto JS para JSON string
            });

            // Verifica se a resposta foi bem-sucedida (Status 200, 201, etc.)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro na API: ${response.status} - ${errorData.message || 'Falha ao adicionar usuário'}`);
            }

            const result = await response.json();
            console.log(`✅ ${result.message}`, result);
            alert(result.message);

            return result;

        } catch (error) {
            console.error('❌ Erro na requisição:', error);
            alert(`Falha: ${error.message}`);
        }

        console.log(userData);

    }
    // Chame a função quando quiser registrar o usuário (ex: ao clicar em um botão)
    // registerUser();

    return (
        <section className={styles.form_section}>
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <h2 className={styles.form_title}>Preencha os dados de cadastro</h2>

                <TextField
                    obrigatorio
                    label="Primeiro Nome"
                    placeholder="Digite seu primeiro nome"
                    inputValue={name}
                    onChanged={(value: string) => setName(value)}
                />

                <TextField
                    obrigatorio
                    label="Sobrenome"
                    placeholder="Digite seu sobrenome"
                    inputValue={lastName}
                    onChanged={(value: string) => setLastName(value)}
                />

                <TextField
                    obrigatorio
                    label="Idade"
                    placeholder="Digite sua idade"
                    inputValue={age}
                    onChanged={(value: string) => setAge(value)}
                />

                <TextField
                    obrigatorio
                    label="E-mail"
                    placeholder="Digite seu email"
                    inputValue={email}
                    onChanged={(value: string) => setEmail(value)}
                />

                <TextField
                    obrigatorio
                    label="Documento"
                    placeholder="Digite seu CPF ou CNPJ"
                    inputValue={document}
                    onChanged={(value: string) => setDocument(value)}
                />

                <TextField
                    obrigatorio
                    label="Cidade"
                    placeholder="Digite a cidade em que reside"
                    inputValue={city}
                    onChanged={(value: string) => setCity(value)}
                />

                <TextField
                    obrigatorio
                    label="Estado"
                    placeholder="Digite o estado em que você reside"
                    inputValue={state}
                    onChanged={(value: string) => setState(value)}
                />

                <button type="submit" className={styles.btn__submit}>Enviar</button>
            </form>

            <button onClick={registerUser}>Teste de registro pela API</button>

        </section>
    );
}

export default FormContainer;
