import React, { useState } from 'react'

const EnemyEditForm = (props) => {
    let [formPayload, setFormPayload] = useState({
        id: props.id,
        name: props.name,
        description: props.description,
        difficulty: props.difficulty,
        title: props.title,
        url: props.url
      })
    let [previous, setPrevious] = useState(props.difficulty)

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

      const closeEditForm = (event) => {
        event.preventDefault()
        props.setEditForm("not-active")
      }

      const editEnemy = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8080/api/enemies/${formPayload.id}`, {
            method: "PUT",
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
          .then((editedEnemy) => {
            let newEnemies = props.enemies.map((currentEnemy) => {
                let enemy = currentEnemy
                if (currentEnemy.id == props.id) { // the enemy to edit
                    enemy.id = editedEnemy.id
                    enemy.name = editedEnemy.name
                    enemy.type = editedEnemy.type
                    enemy.description = editedEnemy.description
                    enemy.difficulty = editedEnemy.difficulty
                    enemy.title = editedEnemy.title
                    enemy.url = editedEnemy.url
                }

                return ({
                    ...currentEnemy,
                    enemy
                })
             })
            props.setEnemies(newEnemies)
            props.setEditForm("not-active")
          })
          .catch((error) => {
            console.error(`Error editing an enemy: ${error.message}`)
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
        <div className={`modal ${props.edit}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-warning">
                    <p className="modal-card-title">
                        <strong>Edit Enemy</strong>
                    </p>
                    <button className="delete" aria-label="close"
                    onClick={closeEditForm}></button>
                </header>
                <section className="modal-card-body">

                <div className="field">
                <label className="label">My Real Life Problem</label>
                <div className="control">
                    <input id="name" className="input" type="text" autoComplete="off"
                    onChange={update}
                    value={formPayload.name} />
                </div>
            </div>

            <div className="field">
                <label className="label">Describe Problem</label>
                <div className="control">
                    <textarea id="description" className="textarea" autoComplete="off"
                    value={formPayload.description}
                    onChange={update} />
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
                    onChange={update} />
                </div>
            </div>

            <div className="field">
                <label className="label">Picture of Enemy from a URL</label>
                <div className="control">
                    <input id="url" className="input" type="url" autoComplete="off"
                    value={formPayload.url}
                    onChange={update} />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-warning"
                        onClick={editEnemy}>Edit Enemy
                    </button>

                    <button className="button"
                        onClick={closeEditForm}>Close
                    </button>
                </footer>
            </div>
        </div>
      )
}

export default EnemyEditForm