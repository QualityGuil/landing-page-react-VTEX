import React, { useState, useEffect, useMemo } from 'react'
import styles from './index.module.css'

type Pokemon = {
    name: string
    url: string
}

function MyList() {
    const [search, setSearch] = useState<string>('')
    const [pokemons, setPokemons] = useState<Pokemon[]>([]) 

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
                const { results } = await response.json()
                setPokemons(results)
            } catch (err) {
                console.error(err)
            }
        }

        fetchPokemon()
    }, [])

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])

    return (
        <div style={{ padding: '1rem' }}>
        <h2>Lista de Pokémons</h2>
        
        <input 
            type='text'
            value={search}
            placeholder='Busca de pokemons'
            onChange={(event) => setSearch(event.target.value)}
        />

        <ul className={styles.list}>
            {filteredPokemons.map((pokemon) => (
            <li key={pokemon.name}>
                <a href={pokemon.url} target="_blank" rel="noreferrer">
                {pokemon.name}
                </a>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default MyList
