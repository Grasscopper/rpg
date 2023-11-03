import React from 'react'
import { useState, useEffect } from 'react'
import EnemyCard from './EnemyCard'

const EnemiesContainer = (props) => {
    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/enemies")
        .then((response) => {
            if (response.ok) {
                return response
            }
            else {
                let errorMessage = `${response.status}: ${response.statusTest}`
                let error = new Error(errorMessage)
                throw(error)
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((body) => {
            setEnemies(body)
        })
        .catch((error) => {
            console.error(`Cannot fetch enemies (life obstacles): ${error.message}`)
        })
    }, [])

    let enemyCards = enemies.map((enemy) => {
        return (
            <EnemyCard
            name={enemy.name}
            type={enemy.type}
            title={enemy.title}
            difficulty={enemy.difficulty}
            description={enemy.description}
            />
        )
    })

    return (
        <>{enemyCards}</>
    )
}

export default EnemiesContainer