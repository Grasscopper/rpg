import React from 'react'
import { useState, useEffect } from 'react';

const GoalsIndexContainer = (props) => {
    const [stats, setStats] = useState([])
    const [tabs, setTabs] = useState(["is-active has-text-primary", "", ""])

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

    const changeTab = (event) => {
      const activeTab = event.currentTarget.value
      if (activeTab == 0) setTabs(["is-active has-text-primary", "", ""])
      else if (activeTab == 1) setTabs(["", "is-active has-text-primary", ""])
      else if (activeTab == 2) setTabs(["", "", "is-active has-text-primary"])
    }

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
                      <li className={tabs[0]} value="0" onClick={changeTab}><a>Stats</a></li>
                      <li className={tabs[1]} value="1" onClick={changeTab}><a>Enemies</a></li>
                      <li className={tabs[2]} value="2" onClick={changeTab}><a>Skills</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>

            <br />

            <div className="container has-text-centered">
              <div className="notification is-link">
              <p className="title">Merciless Knight (Enemy)</p>
              <p className="subtitle">Define the enemies and bosses as you journey towards your goal</p>
              <p>
              <strong>Biography:</strong> Assignment 1: Complete 5 Calculus problems by Friday
              </p>
              <p>
              <strong>Difficulty Level:</strong> 3/5
              </p>
              <p>
              <strong>Move sets (define the obstacles):</strong>
              </p>
              <ul>
                <li>Going to a party on Thursday may stop me if I procrastinate too long</li>
                <li>Professor is not responsive and I need a bit of help</li>
                <li>I struggle differentiating trigonometric functions</li>
              </ul>
              <p>
                <strong>Reward:</strong> 3 Intelligence EXP
              </p>
         
              <figure className="image is-128x128">
              <img src="https://i.pinimg.com/originals/45/36/00/453600095519f35a8d5db1c30177f524.png"/>
              </figure>

              </div>
            </div>

            <br />

            <div className="container has-text-centered">
              {statTiles}
            </div>

        </div>
    )
}

export default GoalsIndexContainer