import React from 'react';
import './Profile.css'

export const Profile = () => {
    return (
            <div className="main">
                <div className="profile">
                    <img src="./images/profile.png" alt="" className="profile-pic"/>
                    <div className="account-details">
                        <p>Profile</p>
                        <h1 id="username">Sameer Khan</h1>
                        <p>2 public playlist . <span id="following">22 follwing</span></p>
                    </div>
                </div> 
                <div className="top-artist">
                    <h3 id="top">Top artist this month</h3>
                    <div className="list-of-artist">
                        <div className="box">
                            <img src="./images/justin.jpeg" alt="" className="artist-pic"/>
                            <img src="./images/play.png" className="play" alt="" />
                        </div>
                        <div className="box">
                            <img src="./images/shwan2.jpeg" alt="" className="artist-pic"/>
                            <img src="./images/play.png" className="play" alt="" />
                        </div>
                        <div className="box">
                            <img src="./images/mellow.jpeg" alt="" className="artist-pic"/>
                            <img src="./images/play.png" className="play" alt="" />
                        </div> 
                    </div>
                </div>
            </div>
    )
}
