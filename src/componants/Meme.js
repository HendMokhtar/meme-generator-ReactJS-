import React from 'react'

export default function Meme() {
  const [meme ,setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes ,setAllMemes] = React.useState([])
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  },[])
  function getRandomMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
    return (
      <main className= "container">
       <div className="form memeForm my-5">
        <div className="form-row">
        <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control topText"
                placeholder="Top Text"
                name='topText'
                value={meme.topText}
                onChange = {handleChange}
              />
        </div>
        <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control bottomText"
                placeholder="Bottom Text"
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
              />
        </div>
        </div>
        <button className="btn btn-block" onClick={getRandomMeme}>Get a new meme image  🖼 </button>
        </div>
        <div className='meme'>
          <img src={meme.randomImage} alt="memeImage" />
          <h2 className='memeText top'>{meme.topText}</h2>
          <h2 className='memeText bottom'>{meme.bottomText}</h2>
        </div>
      </main>
    )
}