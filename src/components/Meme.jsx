import React, {useState, useEffect} from "react"
// import memesData from '../memesData.js'
import '../styles/Meme.css'

export default function Header() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            console.log('useeffect!')
    }, [])

    function getMemeImg() {
        const randomNum = Math.floor(Math.random()*allMemes.length);
        const {url} = allMemes[randomNum];
        
        setMeme(prevMeme => ({...prevMeme, randomImage: url}));
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value
            }
        ))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    name="topText"
                    className="form--input" 
                    placeholder="Top text"
                    value={meme.topText}
                    onChange={handleChange} />
                <input 
                    type="text" 
                    name="bottomText"
                    className="form--input" 
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    onChange={handleChange} />
                <button className="form--button" onClick={getMemeImg}>Get a new meme image 🖼</button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}