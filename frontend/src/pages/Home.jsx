import React from 'react'
import { Hero } from '../cmps/Hero'


export class Home extends React.Component {

    render() {
        return (
            <section>
                <div className="home-section">
                    <Hero/>
                </div>
                <div className="home-desc">
                <p>Welcome to <span>Any Talk.</span></p>
                <p>Communication platform Anytime, Anywhere </p>
                </div>
                </section>
        )
    }
}
