import React from "react"
import '../styles/Header.css'
import trollFace from '../assets/troll-face.png'

export default function Header() {
    return (
        <header>
            <div className="header--title">
                <img src={trollFace} alt="meme-troll-face" />
                <h3>Meme Generator</h3>
            </div>
            <h5 className="header--details">React Course - Project 3</h5>
        </header>
    )
}