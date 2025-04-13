import React, {useState} from 'react'
import AddAbilityForm from './AddAbilityForm'
import EnemyEditForm from './EnemyEditForm'

const EnemyCard = (props) => {
    const [open, setOpen] = useState(false)
    const [add, setAddForm] = useState("not-active")
    const [edit, setEditForm] = useState("not-active")

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

    const addAbility = (event) => {
        event.preventDefault()
        if (add === "not-active") {
            setAddForm("is-active")
        }
        else if (add === "is-active") {
            setAddForm("not-active")
        }
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
                        <button className="button is-fullwidth fight-button" onClick={addAbility}>
                            <strong>FIGHT</strong>
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
                        <button className="button is-fullwidth fight-button" onClick={addAbility}>
                            <strong>FIGHT</strong>
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