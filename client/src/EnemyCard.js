import React from 'react'

const EnemyCard = (props) => {
    let difficulty = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.difficulty > 1) difficulty[1] = "fas fa-star"
    if (props.difficulty > 2) difficulty[2] = "fas fa-star"
    if (props.difficulty > 3) difficulty[3] = "fas fa-star"
    if (props.difficulty > 4) difficulty[4] = "fas fa-star"
    let enemy = "yard"

    const defend = (event) => {
        event.preventDefault()
        console.log(props.name)
    }

    return (
    <div className="column is-3">
        <div className="card" >
            <header className="card-header">
                <p className="card-header-title">
                {props.name}
                </p>
                <span className="card-header-icon" onClick={defend}>
                    <span className="icon">
                        <i className="fas fa-pen"></i>
                    </span>
                </span>
            </header>

            <div className="card-image">
                <figure className="image is-5by4">
                <img src={props.url}
                alt={`Image is from: ${props.url}`} />
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
                <div className="columns">
                    <div className="column is-full">
                        <button className="button is-fullwidth fight-button">
                            <strong>FIGHT</strong>
                        </button>
                    </div>
                </div>
                <div className="content">{props.description}</div>
            </div>
        </div>
    </div>
    )
}

export default EnemyCard