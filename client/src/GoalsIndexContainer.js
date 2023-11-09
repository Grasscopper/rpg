import React from 'react'
import { useState, useEffect } from 'react';
import EnemiesContainer from './EnemiesContainer'
import SkillsContainer from './SkillsContainer'
import EnemyForm from './EnemyForm'

const GoalsIndexContainer = (props) => {
    const [tabs, setTabs] = useState(["is-active has-text-primary", "", ""])
    const [stats, setStats] = useState([])
    const [enemyForm, setEnemyForm] = useState("not-active")

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

    const openEnemyForm = (event) => {
      if (enemyForm === "not-active") {
        setEnemyForm("is-active")
      }
      else if (enemyForm === "is-active") {
        setEnemyForm("not-active")
      }
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
            <section className="hero is-primary is-small">
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

                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                  <div className="container">
                    <ul>
                      <li className={tabs[0]} value="0" onClick={changeTab}><a>Enemies</a></li>
                      <li className={tabs[1]} value="1" onClick={changeTab}><a>Skills</a></li>
                      <li className={tabs[2]} value="2" onClick={changeTab}><a>Rewards</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>

            <br />

            <div className="columns is-multiline" style={{ margin: 5 }}>
              <div className="column is-4" />
              <div className="column is-4">
                <div className="container has-text-centered">
                  <button className="button is-fullwidth is-link is-rounded"
                  onClick={openEnemyForm}>
                    Create Enemy
                  </button>
                </div>
              </div>
              <div className="column is-4" />
              <EnemiesContainer />
              <div className="column is-4" />
              <EnemyForm
                enemyForm={enemyForm}
                setEnemyForm={setEnemyForm}
              />
            </div>

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
              <p className="title">
                Complete 20 Calculus Problems to Finish Homework #1 by 9/30/23
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

              <p>
              <strong>Obstacles (Click which life challenges you are currently facing in relation to this goal):</strong>
              </p>
              <div className="columns">
                <div className="column is-3">
                <div className="card has-background-primary has-text-white">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title">ACTIVE BATTLE</p>
        <p className="title is-4">Dark Swordsman</p>
      </div>
    </div>

    <div className="content">
    <p>Going to a party on Thursday may hinder my progress.</p>
    <button className="button is-danger" style={{ marginBottom: 10 }}>
              FIGHT</button>
    <p>Clicking the button will open up a modal of all your life skills. To beat the Dark Swordsman,
      the urge to spend time having fun at a party instead of homework, look through your skill set.
      It will be a checklist with 1 or more options able to be selected. If the skill worked, then
      select WIN. If not, select LOSE. If the battle was won, your skills level up. This way, you 
      personally know this skill or skills are effective against this enemy (life obstacle)
    </p>
    </div>
  </div>
</div>
                </div>

                <div className="column is-3">
                <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">Thunderblade Knight</p>
      </div>
    </div>

    <div className="content">
    Professor is not responsive and the textbook is confusing.
    </div>
  </div>
</div>
                </div>

                <div className="column is-3">
                <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">Ice Brigand</p>
      </div>
    </div>

    <div className="content">
    I struggle differentiating trigonometric functions.
    </div>
  </div>
</div>
                </div>



              </div>
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