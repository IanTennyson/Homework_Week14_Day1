import React from 'react';
import Film from './Film'

class FilmList extends React.Component{

  render(){

    const filmNodes = this.props.data.map((film) => {
      return (
        <Film title={ film.title } key={ film.id } link={ film.link }>
        { film.text }
        </Film>
      )
    });

    return(
      <div className="film-list">
        {filmNodes}
      </div>
      )
  }

}

export default FilmList;