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
        <div className="notification" style={{ border: "solid", borderWidth: "2px", borderColor: "black" }}>
          <p className="title">{stat.name}</p>
          <p className="subtitle">Level {stat.level} - {stat.description}</p>
          <div className="buttons is-centered">
            <button className="button is-medium is-primary">Boost</button>
            <button className="button is-medium is-danger">Lower</button>
          </div>
          <p>Progress: {stat.exp}/{stat.goal}</p>
          <progress className="progress is-primary" value={stat.exp} max={stat.goal} />
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
                    Goals
                  </p>
                  <p className="subtitle">
                    Complete by September 30, 2023
                  </p>
                  <ul>
                    <li><p>Increase bench press to 255 pounds by September 30, 2023</p></li>
                    <li><p>Read the 352 page "The Vanishing Half" by September 30, 2023</p></li>
                    </ul>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                  <div className="container">
                    <ul>
                      <li className="is-active has-text-primary">
                        <a>Stats</a>
                      </li>
                      <li>
                        <a>Enemies</a>
                      </li>
                      <li>
                        <a>Skills</a>
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