import React, { useState } from 'react'

const EnemyEditForm = (props) => {
    let [formPayload, setFormPayload] = useState({
        id: props.id,
        name: props.name,
        type: props.type,
        description: props.description,
        difficulty: props.difficulty,
        title: props.title,
        url: props.url
      })
    
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
            props.setEnemy(editedEnemy)
            props.setEditForm("not-active")
          })
          .catch((error) => {
            console.error(`Error editing an enemy: ${error.message}`)
          })
      }
 
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
                <label className="label">Category of Problem</label>
                <div className="control">
                    <div className="select">
                    <select id="type"
                    value={formPayload.type}
                    onChange={update}>
                        <option>Anxiety</option>
                        <option>Depression</option>
                        <option>Self-Esteem</option>
                        <option>Friendship</option>
                        <option>Work</option>
                        <option>Health</option>
                    </select>
                    </div>
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

            <div className="field">
                <label className="label">Difficulty of Problem</label>
                <div className="control">
                    <input id="difficulty" className="input" type="number" min="1" max="2"
                    value={formPayload.difficulty}
                    onChange={update} />
                </div>
            </div>

            <br/>
            <div className="field has-text-centered">
                <p className="title is-5">
                    <span className="icon-text has-text-warning">
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