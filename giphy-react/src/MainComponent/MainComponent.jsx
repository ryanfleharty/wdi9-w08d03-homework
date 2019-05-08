import React, { useState,useEffect } from 'react';
import GifIndex from './GifIndex/GifIndex.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

const headerStyle = {
  color: '#8B0000',
  'textAlign': 'center',
  'fontSize': '30px',
  'fontWeight': 'bold'
}

function MainComponent() {

  const [foundGifs, setFoundGifs] = useState([]);
  const [randomGif, setRandomGif] = useState('');


  useEffect(()=>{
    getRandomGif()
  }, [foundGifs]);

  const getRandomGif = async () => {
    const randomGif = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`);

    const parsedGif = await randomGif.json();

    // So origionally I had just 'parsedGif', but it wouldn't
    // Allow me to acces nested layers of the object!
        // parsedGif.data.url came up 'cant read prop of undefined'...
        // yet const gif = parsedGif.data; gif.url worked

    setRandomGif(parsedGif.data);
  }

  const createGifsArray = async (searchTerm) => {

    const gottenGifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=10`);

    const parsedGifs = await gottenGifs.json();

    createGifs(parsedGifs.data);

  };

  const createGifs = (gifs) => {

    const gifsList = gifs.map((gif) => {
      return (
        <li key={gif.id}>
          <iframe title={gif.id} src={gif.embed_url}/>
        </li>
      );
    });

    setFoundGifs(gifsList);

  }

  console.log(randomGif.embed_url)

  return (<div>
    <h1 style={headerStyle}>Giphy 'app'</h1>
    <iframe title={randomGif.id} src={randomGif.embed_url} />
    <SearchForm createGifsArray={createGifsArray}/>
    <GifIndex foundGifs={foundGifs}/>
  </div>);
}

export default MainComponent;
