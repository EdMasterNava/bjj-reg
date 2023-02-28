import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
function Home(){
    //state

    //render
    return (
        <React.Fragment>
            <section className="home-section">
                <div className="home-content">
                    <div className="title">
                        The #1 Brazilian Jiu-Jitsu Event Calendar
                    </div>
                    <Link to="/events">
                        <button className="event-btn">
                            View Events
                        </button>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;