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
    
      return (
        <>
        <div className="column is-offset-4">
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
                <label className="label">Name of Problem as an RPG Enemy</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Death Knight" />
                </div>
            </div>

            <div className="field">
                <label className="label">Difficulty of Enemy</label>
                <div className="control">
                    <input className="input" type="text" placeholder="3" />
                </div>
            </div>


                <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </div>
                <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
                </div>


                <div className="field">
                <label className="label">Describe Problem</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>

                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Visualize Problem</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
                </div>
        </div>
        <div className="column is-4" />
        </>
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