import React from 'react'
import { useState, useEffect } from 'react';
import EnemiesContainer from './EnemiesContainer'
import AbilitiesContainer from './AbilitiesContainer'

const GoalsIndexContainer = (props) => {
    const [abilities, setAbilities] = useState([])

    useEffect(() => {
      fetch("http://localhost:8080/api/abilities")
      .then((response) => {
          if (response.ok) {
              return response
          }
          else {
              let errorMessage = `${response.status}: ${response.statusTest}`
              let error = new Error(errorMessage)
              throw(error)
          }
      })
      .then((response) => {
          return response.json()
      })
      .then((body) => {
          setAbilities(body)
      })
      .catch((error) => {
          console.error(`Cannot fetch abilities (coping skills): ${error.message}`)
      })
      }, [])

    return (
        <div>
          <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" style={{ paddingTop: 0 }}>
                <p className="title is-2 has-text-white">GoalRPG</p>
              </a>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Enemies
                </a>

                <a className="navbar-item">
                  Abilities
                </a>

                <a className="navbar-item">
                  Rewards
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-info">
                      <strong>Sign Up</strong>
                    </a>
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <span>Login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

            <div className="columns is-multiline" style={{ margin: 5 }}>
              <EnemiesContainer abilities={abilities} />
              <AbilitiesContainer />
            </div>
        </div>
    )
}

export default GoalsIndexContainer