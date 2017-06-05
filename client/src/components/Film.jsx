import React from 'react'

class Film extends React.Component {

  render(){
    return(
      <div className="film">
        <h4 className="film-title">{ this.props.title }</h4>
        <a href={ this.props.link }>
          <p>ShowTimes</p>
        </a>
      </div>
    )
  }

}

export default Film;