import React, {useState} from 'react'
import AbilityEditForm from './AbilityEditForm'

const AbilityCard = (props) => {
    const [edit, setEditForm] = useState("not-active")
    const [open, setOpen] = useState(false)

    let strength = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.strength > 1) strength[1] = "fas fa-star"
    if (props.strength > 2) strength[2] = "fas fa-star"
    if (props.strength > 3) strength[3] = "fas fa-star"
    if (props.strength > 4) strength[4] = "fas fa-star"

    const editAbility = (event) => {
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

    let card = <>
    <AbilityEditForm
        edit={edit}
        setEditForm={setEditForm}
        id={props.id}
        realName={props.realName}
        abilityName={props.abilityName}
        url={props.url}
        strength={props.strength}
        description={props.description}
        abilities={props.abilities}
        setAbilities={props.setAbilities}
    />
    <div className="column is-3">
        <div className="card">
            <header className="card-header has-background-primary has-text-white">
                <p className="card-header-title has-text-white">
                {props.realName}
                </p>
                <span className="card-header-icon" onClick={editAbility}>
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
                    <p className="title">{props.abilityName}</p>
                    <p className="subtitle"><strong>Strength: </strong>
                        <i className={strength[0]}></i>
                        <i className={strength[1]}></i>
                        <i className={strength[2]}></i>
                        <i className={strength[3]}></i>
                        <i className={strength[4]}></i>
                    </p>
                    <div className="content">{props.description}</div>
                </div>
            </div>
        </div>
    </div>
    </>
    if (open == false) {
        card =     <>
        <AbilityEditForm
            edit={edit}
            setEditForm={setEditForm}
            id={props.id}
            realName={props.realName}
            abilityName={props.abilityName}
            url={props.url}
            strength={props.strength}
            description={props.description}
            abilities={props.abilities}
            setAbilities={props.setAbilities}
        />
        <div className="column is-3">
            <div className="card">
                <header className="card-header has-background-primary has-text-white">
                    <p className="card-header-title has-text-white">
                    {props.realName}
                    </p>
                    <span className="card-header-icon" onClick={editAbility}>
                        <span className="icon">
                            <i className="fas fa-pen"></i>
                        </span>
                    </span>
                </header>
                <div className="card-expansion" onClick={expand}>
                    <div className="card-content">
                        <p className="title">{props.abilityName}</p>
                        <p className="subtitle"><strong>Strength: </strong>
                            <i className={strength[0]}></i>
                            <i className={strength[1]}></i>
                            <i className={strength[2]}></i>
                            <i className={strength[3]}></i>
                            <i className={strength[4]}></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    }

    return (<>{card}</>)
}

export default AbilityCard

{/* <div className="columns">
<div className="column is-full">
    <button className="button is-fullwidth fight-button">
        <strong>ACTIVATE</strong>
    </button>
</div>
</div> */}