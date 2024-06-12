import React, { useState } from 'react'

const AbilityEditForm = (props) => {
    let [formPayload, setFormPayload] = useState({
        id: props.id,
        realName: props.realName,
        abilityName: props.abilityName,
        url: props.url,
        strength: props.strength,
        description: props.description
      })
    let [previous, setPrevious] = useState(props.strength)

    let stars = ["fas fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]
    if (formPayload.strength > 1) stars[1] = "fas fa-star"
    if (formPayload.strength > 2) stars[2] = "fas fa-star"
    if (formPayload.strength > 3) stars[3] = "fas fa-star"
    if (formPayload.strength > 4) stars[4] = "fas fa-star"

    const colorStars = (event) => {
      event.preventDefault()
      setFormPayload({
        ...formPayload,
        strength: event.currentTarget.id
      })
    }
    
    const resetStars = (event) => {
      event.preventDefault()
      setFormPayload({
        ...formPayload,
        strength: previous
      })
    }

    const setStrength = (event) => {
      event.preventDefault()
      setFormPayload({
        ...formPayload,
        strength: event.currentTarget.id
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

      const editAbility = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8080/api/abilities/${formPayload.id}`, {
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
          .then((editedAbility) => {
            let newAbilities = props.abilities.map((currentAbility) => {
                let ability = currentAbility
                if (currentAbility.id == props.id) { // the ability to edit
                    ability.id = editedAbility.id
                    ability.realName = editedAbility.realName
                    ability.abilityName = editedAbility.abilityName
                    ability.url = editedAbility.url
                    ability.strength = editedAbility.strength
                    ability.description = editedAbility.description
                }

                return ({
                    ...currentAbility,
                    ability
                })
             })
            props.setAbilities(newAbilities)
            props.setEditForm("not-active")
          })
          .catch((error) => {
            console.error(`Error editing an ability: ${error.message}`)
          })
      }

      const deleteAbility = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8080/api/abilities/${formPayload.id}`, {
            method: "DELETE"
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
          let newAbilities = props.abilities.filter((ability) => formPayload.id != ability.id);
          props.setAbilities(newAbilities)
          props.setEditForm("not-active")
        })
        .catch((error) => {
          console.error(`Error deleting an ability: ${error.message}`)
        })
      }

      const strengthStars = [1,2,3,4,5].map((strength) => {
        return (
          <i key={strength} id={strength}
            className={stars[strength-1]}
            onClick={setStrength}
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
                        <strong>Edit Ability</strong>
                    </p>
                    <button className="button is-danger is-small is-rounded has-text-weight-bold"
                        onClick={deleteAbility}>DELETE
                    </button>
                </header>
                <section className="modal-card-body">

                <div className="field">
                <label className="label">My Real Life Ability</label>
                <div className="control">
                    <input id="realName" className="input" type="text" autoComplete="off"
                    onChange={update}
                    value={formPayload.realName} />
                </div>
            </div>

            <div className="field">
                <label className="label">Describe Ability</label>
                <div className="control">
                    <textarea id="description" className="textarea" autoComplete="off"
                    value={formPayload.description}
                    onChange={update} />
                </div>
            </div>

            <label className="label" style={{ marginBottom: 0 }}>Strength of Ability</label>
            <p className="subtitle">{strengthStars}</p>

            <br/>
            <div className="field has-text-centered">
                <p className="title is-5">
                    <span className="icon-text has-text-weight-bold">
                        <span>My Ability</span>
                        <span className="icon">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>RPG Skill</span>
                    </span>
                </p>
            </div>

            <div className="field">
                <label className="label">Name of Problem as an RPG Skill</label>
                <div className="control">
                    <input id="abilityName" className="input" type="text" autoComplete="off"
                    value={formPayload.abilityName}
                    onChange={update} />
                </div>
            </div>

            <div className="field">
                <label className="label">Picture of Skill from a URL</label>
                <div className="control">
                    <input id="url" className="input" type="url" autoComplete="off"
                    value={formPayload.url}
                    onChange={update} />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-warning has-text-weight-bold" style={{ border: "solid"}}
                        onClick={editAbility}>EDIT
                    </button>
                    <button className="button"
                        onClick={closeEditForm}>Close
                    </button>
                </footer>
            </div>
        </div>
      )
}

export default AbilityEditForm