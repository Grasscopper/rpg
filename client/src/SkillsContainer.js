import React from 'react'

const SkillsContainer = (props) => {
    return (
        <div className="column is-3">
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by4">
                <img src="https://bulma.io/images/placeholders/640x480.png"
                alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title">Time Freeze</p>
                        <p className="subtitle">Effective Against Anxiety Enemies</p>
                    </div>
                </div>

                <div className="content">
                    Take a moment to pause yourself. You put so much value on completing certain tasks
                    before moving on. But what is the true consequence of not completing them? Do not
                    give them power. You are OK. After pausing, and some deep breaths, resume yourself.
                </div>
            </div>
        </div>
    </div>
    )
}

export default SkillsContainer