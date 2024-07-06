import React, { useState } from 'react'

const AbilityForm = (props) => {
    let [formPayload, setFormPayload] = useState({
        realName: "",
        abilityName: "",
        url: "",
        strength: 1,
        description: ""
    })
    let [previous, setPrevious] = useState(1)

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

      const closeAbilityForm = (event) => {
        event.preventDefault()
        props.setAbilityForm("not-active")
      }

      const sendAbilityForm = (event) => {
        event.preventDefault()
        fetch("http://localhost:8080/api/abilities", {
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
          .then((createdAbility) => {
            props.setAbilities([
                ...props.abilities,
                createdAbility
            ])
          })
          .catch((error) => {
            console.error(`Error creating an ability: ${error.message}`)
          })
          props.setAbilityForm("not-active")
          setFormPayload({
            realName: "",
            abilityName: "",
            url: "",
            strength: 1,
            description: ""
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
        <div className={`modal ${props.abilityForm}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head" style={{ backgroundColor: "#66D1FF"}}>
                    <p className="modal-card-title">
                        <strong className="has-text-white">Create Ability</strong>
                    </p>
                </header>
                <section className="modal-card-body">

                <div className="field">
                <label className="label">My Real Life Ability</label>
                <div className="control">
                    <input id="realName" className="input" type="text" autoComplete="off"
                    onChange={update}
                    value={formPayload.realName}
                    placeholder="Exercise" />
                </div>
            </div>

            <div className="field">
                <label className="label">Describe How Ability Helps</label>
                <div className="control">
                    <textarea id="description" className="textarea" autoComplete="off"
                    value={formPayload.description}
                    onChange={update}
                    placeholder="By going to the gym, I become more relaxed and confident. I can take on more challenges!"></textarea>
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
                    onChange={update}
                    placeholder="Fire Boost" />
                </div>
            </div>

            <div className="field">
                <label className="label">Picture of Ability from a URL</label>
                <div className="control">
                    <input id="url" className="input" type="url" autoComplete="off"
                    value={formPayload.url}
                    onChange={update}
                    placeholder="https://bulma.io/images/placeholders/1280x960.png" />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button has-text-weight-bold has-text-white" style={{ backgroundColor: "#66D1FF", border: "solid", borderColor: "#363636"}}
                        onClick={sendAbilityForm}>CREATE
                    </button>

                    <button className="button"
                        onClick={closeAbilityForm}>Close
                    </button>
                </footer>
            </div>
        </div>
      )
}

export default AbilityForm