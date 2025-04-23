import React, { useState, useEffect } from 'react'

const AddAbilityForm = (props) => {
    const [abilities, setAbilities] = useState([])
    // const [formPayload, setFormPayload] = useState({})

    const closeAddForm = (event) => {
        event.preventDefault()
        props.setAddForm("not-active")
    }

    const addAbility = (event) => {
        event.preventDefault()
        const ids = event.currentTarget.id.split(" ")
        const enemyId = Number(ids[0])
        const abilityId = Number(ids[1])
        let foundEnemy = props.enemies.find(element => element.id === enemyId)
        let foundAbility = props.abilities.find(element => element.id === abilityId)

        // const formPayload = {
        //     enemy: foundEnemy,
        //     ability: foundAbility
        // }
        fetch(`http://localhost:8080/api/enemies/${enemyId}/${abilityId}`, {
            method: "PUT",
            body: JSON.stringify(foundEnemy),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
            })
            .then((response) => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status}: ${response.statusText}`
                let error = new Error(errorMessage)
                throw(error)
            }
            })
            .then((response) => {
                return response.json()
            })
            .then((enemy) => {
                debugger
            })
            .catch((error) => {
            console.error(`Error adding ability: ${error.message}`)
            })
    }

    let strength = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.strength > 1) strength[1] = "fas fa-star"
    if (props.strength > 2) strength[2] = "fas fa-star"
    if (props.strength > 3) strength[3] = "fas fa-star"
    if (props.strength > 4) strength[4] = "fas fa-star"

    const abilityTiles = props.abilities.map((ability) => {
        return (
            <div className="column is-full" key={ability.id}>
                <div id={`${props.id} ${ability.id}`} className="card" onClick={addAbility}>
                    <header className="card-header has-background-primary has-text-white">
                        <p className="card-header-title has-text-white">
                        {ability.realName}
                        </p>
                    </header>
                    <div className="card-content">
                        <p className="title">{ability.abilityName}</p>
                        <p className="subtitle"><strong>Strength: </strong>
                        <i className={strength[0]}></i>
                        <i className={strength[1]}></i>
                        <i className={strength[2]}></i>
                        <i className={strength[3]}></i>
                        <i className={strength[4]}></i>
                        </p>
                        <p>{ability.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={`modal ${props.add}`}>
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head" style={{ backgroundColor: "#00D1B2"}}>
                    <p className="modal-card-title">
                        <strong className="has-text-white">Fight {props.title}</strong>
                    </p>
                </header>
                <section className="modal-card-body">
                    <div className="field has-text-centered">
                        <p className="subtitle is-5">
                            How to Help
                        </p>
                        <p className="title is-3">
                            {props.name}
                        </p>
                    </div>
                    <div className="columns is-multiline">
                        {abilityTiles}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button"
                    onClick={closeAddForm}>
                    Done
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default AddAbilityForm