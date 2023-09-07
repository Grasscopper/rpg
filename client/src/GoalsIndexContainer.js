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

    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let currentDate = `${month}/${day}/${year}`

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
                    Lofi Girl
                  </p>
                  <p className="subtitle">
                    Aspiring Student
                  </p>
                  <div className="columns">
                    <div className="column is-4" />
                    <div className="column is-4">
                      <strong>HP: 23/30</strong> (Days Until 9/30/23)
                      <progress className="progress is-info" value="23" max="30" />
                    </div>
                    <div className="column is-4" />
                  </div>
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

            <div className="notification has-text-centered has-background-white">

              <p className="title">Death Knight</p>
              <p className="subtitle"><strong>Difficulty: </strong>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </p>
              <div className="columns">
                  <div className="column is-4" />
                  <div className="column is-4">
                    <strong>HP: 14/20</strong> (Homework Problems Left)
                    <progress className="progress is-danger" value="14" max="20" />
                  </div>
                  <div className="column is-4" />
              </div>
                  
              <div className="columns">
              <div className="column is-3" />
              <div className="column is-6">
              <figure className="image is-5by4">
                <img src="https://nintendoeverything.com/wp-content/uploads/D7ypHCkU8AEnvKj.jpg" />
              </figure>
              </div>
              <div className="column is-3" />
              </div>

              <p className="title">
                Complete 20 Calculus Problems to Finish Homework #1 by 9/30/23
              </p>
              <p>
              <strong>Obstacles:</strong>
              </p>
              <ul>
                <li>1. Going to a party on Thursday may hinder my progress</li>
                <button className="button is-primary" style={{ marginBottom: 10 }}>
                Use Skill</button>
                <li>2. Professor is not responsive and the textbook is confusing</li>
                <button className="button is-primary" style={{ marginBottom: 10 }}>
                Use Skill</button>
                <li>3. I struggle differentiating trigonometric functions</li>
                <button className="button is-primary" style={{ marginBottom: 10 }}>
                Use Skill</button>
              </ul>
              <p>
                <strong>Rewards:</strong>
              </p>
              <ul>
                <li>
                  3 <i className="fas fa-book" /> Intelligence EXP
                </li>
                <li>
                  Unlock a <i className="fas fa-dice" /> Game Night with Friends on Friday
                </li>
              </ul>
            </div>

            <div className="container">
              <p className="title">Battle Log:</p>
              <div className="notifcation has-background-light">
                <ul>
                  <li>(Include date for each list item) Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>(9/3/23) Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Lofi Girl attacks Death Knight for 4 damage (4 homework problems completed)</li>
                  <li>Death Knight used "Fireball" (No more office hours before due date)</li>
                  <li>Lofi Girl used "Ally Protect" (Schedule a help session with a classmate)</li>
                  <li>Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Death Knight swings his scythe and deals 1 damage (1 day closer to due date)</li>
                  <li>Lofi Girl attacks Death Knight for 2 damage (2 homework problems completed)</li>
                </ul>
              </div>
            </div>

            <br />
        </div>
    )
}

export default GoalsIndexContainer