import React from 'react'
import { useState, useEffect } from 'react'
import EnemyForm from './EnemyForm'
import EnemyCard from './EnemyCard'

const EnemiesContainer = (props) => {
    const [enemies, setEnemies] = useState([])
    const [enemyForm, setEnemyForm] = useState("not-active")

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

    const openEnemyForm = (event) => {
      if (enemyForm === "not-active") {
        setEnemyForm("is-active")
      }
      else if (enemyForm === "is-active") {
        setEnemyForm("not-active")
      }
    }

    let enemyCards = enemies.map((enemy) => {
        return (
            <EnemyCard
            key={enemy.id}
            id={enemy.id}
            name={enemy.name}
            type={enemy.type}
            url={enemy.url}
            title={enemy.title}
            difficulty={enemy.difficulty}
            description={enemy.description}
            enemies={enemies}
            setEnemies={setEnemies}
            />
        )
    })

    return (
        <>
            <div className="column is-full" />
            <div className="column is-4" />
            <div className="column is-4 has-text-centered">
              <div>
                <p className="title is-1">
                  Enemies
                </p>
                </div>
            </div>
            <div className="column is-4" />

            <div className="column is-5" />
            <div className="column is-2">
              <div className="container has-text-centered">
                <button className="create button is-medium is-fullwidth has-text-weight-bold"
                onClick={openEnemyForm}>
                  Create Enemy
                </button>
              </div>
            </div>

            <div className="column is-5" />

            <EnemyForm
                enemyForm={enemyForm}
                setEnemyForm={setEnemyForm}
                enemies={enemies}
                setEnemies={setEnemies}
            />
            {enemyCards}
        </>
    )
}

export default EnemiesContainer