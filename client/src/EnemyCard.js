import React from 'react'

const EnemyCard = (props) => {
    let difficulty = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (props.difficulty > 1) difficulty[1] = "fas fa-star"
    if (props.difficulty > 2) difficulty[2] = "fas fa-star"
    if (props.difficulty > 3) difficulty[3] = "fas fa-star"
    if (props.difficulty > 4) difficulty[4] = "fas fa-star"

    return (
    <div className="column is-3">
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by4">
                <img src="https://bulma.io/images/placeholders/640x480.png"
                alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title">{props.name}</p>
                        <p className="subtitle">Enemy Type: {props.type}</p>
                        <p><strong>Difficulty: </strong>
                            <i className={difficulty[0]}></i>
                            <i className={difficulty[1]}></i>
                            <i className={difficulty[2]}></i>
                            <i className={difficulty[3]}></i>
                            <i className={difficulty[4]}></i>
                        </p>
                        <button className="button is-medium is-danger">
                        FIGHT</button>
                    </div>
                </div>

                <div className="content">
                    
                {props.content}
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnemyCard