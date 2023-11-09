import React, { useState } from 'react'

const EnemyForm = (props) => {
    // Change into modal
    let [formPayload, setFormPayload] = useState({
        name: "",
        type: "",
        title: "",
        difficulty: 1,
        description: ""
      })
    
      const createEnemy = (event) => {
        event.preventDefault()
        // props.createNewEnemy(formPayload)
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
    
      return (
        <div className={`modal ${props.enemyForm}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-primary">
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
                    <input id="title" className="input" type="text" placeholder="Afraid of the Gym" />
                </div>
            </div>

            <div className="field">
                <label className="label">Category of Problem</label>
                <div className="control">
                    <div className="select">
                    <select>
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
                    <textarea className="textarea"
                    placeholder="I am afraid of all the people at the gym..."></textarea>
                </div>
            </div>

            <div className="field">
                <label className="label">Difficulty of Problem</label>
                <div className="control">
                    <input className="input" type="number" min="1" max="2" placeholder="3" />
                </div>
            </div>

            <br/>
            <div className="field has-text-centered">
                <p className="title is-5">
                    <span className="icon-text has-text-primary">
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
                    <input className="input" type="text" placeholder="Death Knight" />
                </div>
            </div>

            <div className="field">
                <label className="label">Picture of Enemy as a URL</label>
                <div className="control">
                    <input className="input" type="url"
                    placeholder="https://bulma.io/images/placeholders/1280x960.png" />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                <button className="button is-link"
                onClick={closeEnemyForm}>Create Enemy</button>
                <button className="button"
                onClick={closeEnemyForm}>Cancel</button>
                </footer>
            </div>
        </div>
      )
}

export default EnemyForm

{/* <form autoComplete="off" onSubmit={createEnemy}>
<label htmlFor="name">Name</label>
<input
id="name"
name="name"
type="text"
className="text-center"
onChange={update}
value={formPayload.name}
/>


<button type="submit" value="Submit" id="add-new-game">Add New Game</button>
</form> */}