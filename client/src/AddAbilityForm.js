import React, { useState, useEffect } from 'react'

// Developer Note: On click, add this ability to the Enemy's.abilities
// On the main page, outside the modal, each EnemyCard will have the abilities that
// can fight the enemy on its expanded form
const AddAbilityForm = (props) => {
    const closeAddForm = (event) => {
        event.preventDefault()
        props.setAddForm("not-active")
    }

    const addAbility = (event) => {
        event.preventDefault()
        console.log('abilityAdded')
    }

    const abilityTiles = props.abilities.map((ability) => {
        return (
            <div className="column is-full" key={ability.id}>
                <div id="selected-ability-to-add" className="card" onClick={addAbility}>
                    <header className="card-header has-background-primary has-text-white">
                        <p className="card-header-title has-text-white">
                        {ability.realName}
                        </p>
                    </header>
                    <div className="card-content">
                        <p className="tile">{ability.description}</p>
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