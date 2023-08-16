import React from 'react'
import { useState, useEffect } from 'react';

const GoalsIndexContainer = (props) => {
    const [stats, setStats] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/stats")
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
        .then((body) => {
          setStats(body)
        })
        .catch((error) => {
          console.error(`Cannot fetch stats: ${error.message}`)
        })
      }, [])

    let statTiles = stats.map((stat) => {
      return (
        <div className="notification is-success" style={{ border: "solid", borderWidth: "3px", borderColor: "black" }}>
          <p className="title">{stat.name}</p>
          <p className="subtitle">Level {stat.level}</p>
          <p>{stat.description}</p>
          <p>EXP: {stat.exp}</p>
          <p>Goal: {stat.goal}</p>
        </div>
      )
    })

    return (
        <div>
            <section className="hero is-primary is-medium">
              <div className="hero-head">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <p className="title is-2" style={{ marginTop: 12, marginBottom: 12 }}>GoalRPG</p>
                      <span className="navbar-burger" data-target="navbarMenuHeroB">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    <div id="navbarMenuHeroB" className="navbar-menu">
                      <div className="navbar-end">
                        <span className="navbar-item">
                          <a className="button is-info is-inverted">
                            <span className="icon">
                              <i className="fas fa-user"></i>
                            </span>
                            <span>Login</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="hero-body">
                <div className="container has-text-centered">
                  <p className="title">
                    Stats
                  </p>
                  <p className="subtitle">
                    Create and increase the RPG stats that represent your life goals
                  </p>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                  <div className="container">
                    <ul>
                      <li>
                        <a>Stats</a>
                      </li>
                      <li>
                        <a>Enemies</a>
                      </li>
                      <li>
                        <a>Inventory</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>

            <br />

            <div className="container has-text-centered">
              {statTiles}
            </div>

        </div>
    )
}

export default GoalsIndexContainer