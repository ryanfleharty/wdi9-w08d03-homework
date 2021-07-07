import React from 'react';

function GifIndex(props){
  return(
    <div>
      <h1>sum jifs for u</h1>
      <div>
        <ul>
          {props.foundGifs}
        </ul>
      </div>
    </div>
  )
}

export default GifIndex
