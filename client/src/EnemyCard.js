import React, {useState} from 'react'
import EnemyEditForm from './EnemyEditForm'

const EnemyCard = (props) => {
    const [edit, setEditForm] = useState("not-active")
    const [open, setOpen] = useState(false)

    let difficulty = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.difficulty > 1) difficulty[1] = "fas fa-star"
    if (props.difficulty > 2) difficulty[2] = "fas fa-star"
    if (props.difficulty > 3) difficulty[3] = "fas fa-star"
    if (props.difficulty > 4) difficulty[4] = "fas fa-star"

    const editEnemy = (event) => {
        event.preventDefault()
        if (edit === "not-active") {
            setEditForm("is-active")
        }
        else if (edit === "is-active") {
            setEditForm("not-active")
        }
    }

    const expand = (event) => {
        event.preventDefault()
        // if (edit === "not-active") {
        setOpen(!open)
        // }
    }

    const addAbility = (event) => {
        event.preventDefault()
    }

    let card = <>
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

                <div className="card-content">
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
            <div className="card-content has-text-centered fight-button" style={{ border: "solid" }}>
                <p className="title"><strong>FIGHT</strong></p>
            </div>
        </div>
    </div>
    </>

    if (open == false) {
    card = <>
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
                <div className="card-content">
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