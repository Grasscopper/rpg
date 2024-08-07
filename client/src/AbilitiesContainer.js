import React from 'react'
import { useState, useEffect } from 'react'
import AbilityForm from './AbilityForm'
import AbilityCard from './AbilityCard'
import AbilityCardMinimal from './AbilityCardMinimal'

const AbilitiesContainer = (props) => {
    const [abilities, setAbilities] = useState([])
    const [abilityForm, setAbilityForm] = useState("not-active")

    useEffect(() => {
        fetch("http://localhost:8080/api/abilities")
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
            setAbilities(body)
        })
        .catch((error) => {
            console.error(`Cannot fetch abilities (coping skills): ${error.message}`)
        })
    }, [])

    const openAbilityForm = (event) => {
      if (abilityForm === "not-active") {
        setAbilityForm("is-active")
      }
      else if (abilityForm === "is-active") {
        setAbilityForm("not-active")
      }
    }

    let abilityCards = abilities.map((ability) => {
        return (
            <AbilityCard
            key={ability.id}
            id={ability.id}
            realName={ability.realName}
            abilityName={ability.abilityName}
            url={ability.url}
            strength={ability.strength}
            description={ability.description}
            abilities={abilities}
            setAbilities={setAbilities}
            />
        )
    })

    let abilityCardsMinimal = abilities.map((ability) => {
      return (
        <AbilityCardMinimal
        key={ability.id}
        id={ability.id}
        realName={ability.realName}
        abilityName={ability.abilityName}
        url={ability.url}
        strength={ability.strength}
        description={ability.description}
        abilities={abilities}
        setAbilities={setAbilities}
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
                  Abilities
                </p>
  
                </div>
            </div>
            <div className="column is-4" />

            <div className="column is-5" />
            <div className="column is-2">
              <div className="container has-text-centered">
                <button className="create button is-medium is-fullwidth has-text-weight-bold"
                onClick={openAbilityForm}>
                  Create Ability
                </button>
              </div>
            </div>

            <div className="column is-5" />

            <AbilityForm
                abilityForm={abilityForm}
                setAbilityForm={setAbilityForm}
                abilities={abilities}
                setAbilities={setAbilities}
            />
            {abilityCards}
        </>
    )
}

export default AbilitiesContainer