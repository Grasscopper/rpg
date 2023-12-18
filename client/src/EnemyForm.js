import React, { useState } from 'react'

const EnemyForm = (props) => {
    let [formPayload, setFormPayload] = useState({
        name: "",
        type: "Anxiety", // unused variable
        description: "",
        difficulty: 1,
        title: "",
        url: ""
      })
    let [previous, setPrevious] = useState(1)

      let stars = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
      if (formPayload.difficulty > 1) stars[1] = "fas fa-star"
      if (formPayload.difficulty > 2) stars[2] = "fas fa-star"
      if (formPayload.difficulty > 3) stars[3] = "fas fa-star"
      if (formPayload.difficulty > 4) stars[4] = "fas fa-star"

      const colorStars = (event) => {
        event.preventDefault()
        setFormPayload({
          ...formPayload,
          difficulty: event.currentTarget.id
        })
      }
      
      const resetStars = (event) => {
        event.preventDefault()
        setFormPayload({
          ...formPayload,
          difficulty: previous
        })
      }

      const setDifficulty = (event) => {
        event.preventDefault()
        setFormPayload({
          ...formPayload,
          difficulty: event.currentTarget.id
        })
        setPrevious(event.currentTarget.id)
      }
    
      const update = (event) => {
        event.preventDefault()
        setFormPayload({
          ...formPayload,
          [event.currentTarget.id]: event.currentTarget.value
        })
      }

      const closeEnemyForm = (event) => {
        event.preventDefault()
        props.setEnemyForm("not-active")
      }

      const sendEnemyForm = (event) => {
        event.preventDefault()
        fetch("http://localhost:8080/api/enemies", {
            method: "POST",
            body: JSON.stringify(formPayload),
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
          .then((createdEnemy) => {
            props.setEnemies([
                ...props.enemies,
                createdEnemy
            ])
          })
          .catch((error) => {
            console.error(`Error creating an enemy: ${error.message}`)
          })
          props.setEnemyForm("not-active")
          setFormPayload({
            name: "",
            type: "Anxiety",
            description: "",
            difficulty: 1,
            title: "",
            url: ""
          })
      }

      const difficultyStars = [1,2,3,4,5].map((difficulty) => {
        return (
          <i key={difficulty} id={difficulty}
            className={stars[difficulty-1]}
            onClick={setDifficulty}
            onMouseEnter={colorStars}
            onMouseLeave={resetStars} />
        )
      })
    
      return (
        <div className={`modal ${props.enemyForm}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-info">
                    <p className="modal-card-title">
                        <strong className="has-text-white">Create Enemy</strong>
                    </p>
                    <button className="delete" aria-label="close"
                    onClick={closeEnemyForm}></button>
                </header>
                <section className="modal-card-body">

                <div className="field">
                <label className="label">My Real Life Problem</label>
                <div className="control">
                    <input id="name" className="input" type="text" autoComplete="off"
                    onChange={update}
                    value={formPayload.name}
                    placeholder="Afraid of the Gym" />
                </div>
            </div>

            <div className="field">
                <label className="label">Describe Problem</label>
                <div className="control">
                    <textarea id="description" className="textarea" autoComplete="off"
                    value={formPayload.description}
                    onChange={update}
                    placeholder="I am afraid of all the people at the gym..."></textarea>
                </div>
            </div>

            <label className="label" style={{ marginBottom: 0 }}>Difficulty of Problem</label>
            <p className="subtitle">{difficultyStars}</p>

            <br/>
            <div className="field has-text-centered">
                <p className="title is-5">
                    <span className="icon-text has-text-weight-bold">
                        <span>My Problem</span>
                        <span className="icon">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>RPG Enemy</span>
                    </span>
                </p>
            </div>

            <div className="field">
                <label className="label">Name of Problem as an RPG Enemy</label>
                <div className="control">
                    <input id="title" className="input" type="text" autoComplete="off"
                    value={formPayload.title}
                    onChange={update}
                    placeholder="Death Knight" />
                </div>
            </div>

            <div className="field">
                <label className="label">Picture of Enemy from a URL</label>
                <div className="control">
                    <input id="url" className="input" type="url" autoComplete="off"
                    value={formPayload.url}
                    onChange={update}
                    placeholder="https://bulma.io/images/placeholders/1280x960.png" />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-info"
                        onClick={sendEnemyForm}>Create Enemy
                    </button>

                    <button className="button"
                        onClick={closeEnemyForm}>Close
                    </button>
                </footer>
            </div>
        </div>
      )
}

export default EnemyForm