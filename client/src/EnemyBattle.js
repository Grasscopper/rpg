import React, { useState, useEffect } from 'react'

const EnemyBattle = (props) => {
    const closeBattleModal = (event) => {
        event.preventDefault()
        props.setBattleModal("not-active")
    }

    let abilityTiles = <></>
    if (Object.keys(props.enemy).length != 0) {
    abilityTiles = props.enemy.abilities.map((ability) => {
        let strength = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
        if (ability.strength > 1) strength[1] = "fas fa-star"
        if (ability.strength > 2) strength[2] = "fas fa-star"
        if (ability.strength > 3) strength[3] = "fas fa-star"
        if (ability.strength > 4) strength[4] = "fas fa-star"
        return (
            <div className="column is-full" key={ability.id}>
                <div id={`${ability.id}`} className="card">
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
    }

    let enemyName = ""
    if (Object.keys(props.enemy).length != 0) {
        enemyName = props.enemy.title
    }

    return (
        <div className={`modal ${props.battleModal}`}>
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head" style={{ backgroundColor: "#00D1B2"}}>
                    <p className="modal-card-title">
                    <strong className="has-text-white">Fight {enemyName}</strong>
                    </p>
                </header>
                <section className="modal-card-body">
                    <div className="field has-text-centered">
                        <p className="title is-3">
                            Available Skills
                        </p>
                    </div>
                    <div className="columns is-multiline">
                        {abilityTiles}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button"
                    onClick={closeBattleModal}>
                    Done
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default EnemyBattle