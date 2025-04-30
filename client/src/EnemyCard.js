import React, {useState} from 'react'
import AddAbilityForm from './AddAbilityForm'
import EnemyEditForm from './EnemyEditForm'
import EnemyBattle from './EnemyBattle'

const EnemyCard = (props) => {
    const [open, setOpen] = useState(false)
    const [add, setAddForm] = useState("not-active")
    const [edit, setEditForm] = useState("not-active")
    const [abilities, setAbilities] = useState([])
    const [battleModal, setBattleModal] = useState("not-active")
    const [enemy, setEnemy] = useState({})

    let difficulty = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.difficulty > 1) difficulty[1] = "fas fa-star"
    if (props.difficulty > 2) difficulty[2] = "fas fa-star"
    if (props.difficulty > 3) difficulty[3] = "fas fa-star"
    if (props.difficulty > 4) difficulty[4] = "fas fa-star"

    const expand = (event) => {
        event.preventDefault()
        setOpen(!open)
    }

    const editEnemy = (event) => {
        event.preventDefault()
        if (edit === "not-active") {
            setEditForm("is-active")
        }
        else if (edit === "is-active") {
            setEditForm("not-active")
        }
    }

    const showAbilities = (event) => {
        event.preventDefault()
        if (battleModal === "not-active") {
            setBattleModal("is-active")
        }
        else if (battleModal === "is-active") {
            setBattleModal("not-active")
        }
        fetch(`http://localhost:8080/api/enemies/${props.id}`)
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
        .then((foundEnemy) => {
            setEnemy(foundEnemy)
        })
        .catch((error) => {
            console.error(`Cannot fetch enemy (life problems): ${error.message}`)
        })
    }

    const addAbility = (event) => {
        event.preventDefault()
        if (add === "not-active") {
            setAddForm("is-active")
        }
        else if (add === "is-active") {
            setAddForm("not-active")
        }
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
    }

    // big card
    let card = <>
    <AddAbilityForm
        add={add}
        setAddForm={setAddForm}
        id={props.id}
        name={props.name}
        description={props.description}
        difficulty={props.difficulty}
        title={props.title}
        url={props.url}
        abilities={abilities}
        enemies={props.enemies}
        setEnemies={props.setEnemies}
    />
    <EnemyEditForm
        edit={edit}
        setEditForm={setEditForm}
        id={props.id}
        name={props.name}
        description={props.description}
        difficulty={props.difficulty}
        title={props.title}
        url={props.url}
        enemies={props.enemies}
        setEnemies={props.setEnemies}
    />
    <EnemyBattle
    battleModal={battleModal}
    setBattleModal={setBattleModal}
    enemy={enemy}
    abilities={abilities}
    strength={props.difficulty}
    />
    <div className="column is-3">
        <div className="card" >
            <header className="card-header has-background-primary has-text-white">
                <p className="card-header-title has-text-white">
                {props.name}
                </p>
                <span className="card-header-icon" onClick={editEnemy}>
                    <span className="icon">
                        <i className="fas fa-pen"></i>
                    </span>
                </span>
            </header>
            <div className="card-expansion" onClick={expand}>
                <div className="card-image">
                    <figure className="image">
                    <img src={props.url}
                    alt={`Image: ${props.url}`} />
                    </figure>
                </div>

                <div className="card-content card-hover" style={{ borderRadius: 0}}>
                    <p className="title">{props.title}</p>
                    <p className="subtitle"><strong>Difficulty: </strong>
                        <i className={difficulty[0]}></i>
                        <i className={difficulty[1]}></i>
                        <i className={difficulty[2]}></i>
                        <i className={difficulty[3]}></i>
                        <i className={difficulty[4]}></i>
                    </p>
                    <div className="content">{props.description}</div>
                </div>
            </div>
            <div className="card-content">
                <div className="columns">
                    <div className="column is-full">
                        <button className="button is-fullwidth fight-button"
                        onClick={showAbilities}>
                            <strong>BATTLE</strong>
                        </button>
                        <button className="button is-fullwidth fight-button"
                        style={{marginTop: 10}}
                        onClick={addAbility}>
                            <strong>SKILLS</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

    if (open == false) { // small card; not opened
    card = <>
    <AddAbilityForm
        add={add}
        setAddForm={setAddForm}
        id={props.id}
        name={props.name}
        description={props.description}
        difficulty={props.difficulty}
        title={props.title}
        url={props.url}
        abilities={props.abilities}
        enemies={props.enemies}
        setEnemies={props.setEnemies}
    />
    <EnemyEditForm
        edit={edit}
        setEditForm={setEditForm}
        id={props.id}
        name={props.name}
        description={props.description}
        difficulty={props.difficulty}
        title={props.title}
        url={props.url}
        enemies={props.enemies}
        setEnemies={props.setEnemies}
    />
    <EnemyBattle
    battleModal={battleModal}
    setBattleModal={setBattleModal}
    enemy={enemy}
    abilities={abilities}
    difficulty={props.difficulty}
    />
    <div className="column is-3">
        <div className="card" >
            <header className="card-header has-background-primary has-text-white">
                <p className="card-header-title has-text-white">
                {props.name}
                </p>
                <span className="card-header-icon" onClick={editEnemy}>
                    <span className="icon">
                        <i className="fas fa-pen"></i>
                    </span>
                </span>
            </header>
            <div className="card-expansion" onClick={expand}>
                <div className="card-content card-hover" style={{ borderRadius: 0}}>
                    <p className="title">{props.title}</p>
                    <p className="subtitle"><strong>Difficulty: </strong>
                        <i className={difficulty[0]}></i>
                        <i className={difficulty[1]}></i>
                        <i className={difficulty[2]}></i>
                        <i className={difficulty[3]}></i>
                        <i className={difficulty[4]}></i>
                    </p>
                </div>
            </div>
            <div className="card-content">
                <div className="columns">
                    <div className="column is-full">
                        <button className="button is-fullwidth fight-button"
                        onClick={showAbilities}>
                            <strong>BATTLE</strong>
                        </button>
                        <button className="button is-fullwidth fight-button"
                        style={{marginTop: 10}}
                        onClick={addAbility}>
                            <strong>SKILLS</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    }

    return(<>{card}</>)
}

export default EnemyCard