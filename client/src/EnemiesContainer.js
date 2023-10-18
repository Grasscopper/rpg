import React from 'react'

const EnemiesContainer = (props) => {
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
                        <p className="title">Grasping Ogre</p>
                        <p className="subtitle">Enemy Type: Anxiety</p>
                        <p className="subtitle"><strong>Difficulty: </strong>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                    </div>
                </div>

                <div className="content">
                Random and powerful anxiety before work. I feel the need to complete a lot of chores
                and play as much video games as possible. If I don't complete all this pre-work,
                then I seemingly stay scared. This feeling is like an orge that grabs my entire body
                and slams it downwards.
                </div>
            </div>
        </div>
    </div>
    )
}

export default EnemiesContainer