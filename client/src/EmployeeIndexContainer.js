import React from 'react'
import { useState, useEffect } from 'react';
import Employee from './Employee'

const EmployeeIndexContainer = (props) => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/employees")
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
          setEmployees(body)
        })
        .catch((error) => {
          console.error(`Cannot fetch employees: ${error.message}`)
        })
      }, [])

    let employeeTiles = employees.map((e) => {
        return (
            <Employee
            firstName={e.firstName}
            lastName={e.lastName}
            description={e.description}
            />
        )
    })

    return (
        <div>
            <section className="hero is-success is-large">
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
                        <a className="navbar-item">
                          Home
                        </a>
                        <a className="navbar-item">
                          Examples
                        </a>
                        <a className="navbar-item">
                          Documentation
                        </a>
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
                    Create your goals
                  </p>
                </div>
              </div>

              <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                  <div className="container">
                    <ul>
                      <li>
                        <a>Overview</a>
                      </li>
                      <li>
                        <a>Modifiers</a>
                      </li>
                      <li>
                        <a>Grid</a>
                      </li>
                      <li>
                        <a>Elements</a>
                      </li>
                      <li>
                        <a>Components</a>
                      </li>
                      <li>
                        <a>Layout</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
</section>
<h1>Employees:</h1>
            <ul>
                {employeeTiles}
            </ul>
        </div>
    )
}

export default EmployeeIndexContainer