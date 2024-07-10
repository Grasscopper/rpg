import React, { useState } from 'react'

const AddAbilityForm = (props) => {
    const closeAddForm = (event) => {
        event.preventDefault()
        props.setAddForm("not-active")
    }

    return (
        <div className={`modal ${props.add}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head" style={{ backgroundColor: "#66D1FF"}}>
                    <p className="modal-card-title">
                        <strong className="has-text-white">Create Enemy</strong>
                    </p>
                </header>
                <section className="modal-card-body">

                <div className="field">
                <label className="label">My Real Life Problem</label>
                <div className="control">
                    <input id="name" className="input" type="text" autoComplete="off"
                    placeholder="Heavy School Workload" />
                </div>
            </div>

                </section>
                <footer className="modal-card-foot">
                <button className="button has-text-weight-bold has-text-white" style={{ backgroundColor: "#66D1FF", border: "solid", borderColor: "#363636"}}
                        >CREATE
                    </button>

                    <button className="button"
                        onClick={closeAddForm}>Close
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default AddAbilityForm