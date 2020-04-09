import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <div className="plot">
          <img className="img" src={selected.Poster} />
          <div className="des">
          <h1><font face="verdana">{selected.Title}</font><span> ({selected.Year})</span></h1>
            <div className='plot-des'><p>{selected.Plot}</p></div>
            <p><b>Genre: </b>{selected.Genre}</p>
            <p><b>IMDB: </b>{selected.imdbRating}</p>
            <p><b>Released: </b>{selected.Released}</p>
            <p><b>Director: </b>{selected.Director}</p>
            <p><b>Writers: </b>{selected.Actors}</p>
            <p><b>Actors: </b>{selected.Actors}</p>
          </div>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
