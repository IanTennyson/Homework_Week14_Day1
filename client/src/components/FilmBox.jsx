import React from 'react';
import FilmList from './FilmList'
import Headar from './Headar'
import Footer from './Footer'
import GetShowTimes from './GetShowTimes'

class FilmBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [{id:1, title: "Sausage Party", link: "http://www.imdb.com/"},
      {id:2, title: "Café Society", link: "http://www.imdb.com/"}, 
      {id:3, title: "Morgan", link: "http://www.imdb.com/"}, 
      {id:4, title: "The 9th Life of Louis Drax", link: "http://www.imdb.com/"}, 
      {id:5, title: "Naam Hai Akira", link: "http://www.imdb.com/"}, 
      {id:6, title: "Equity", link: "http://www.imdb.com/"}, 
      {id: 7, title: "Things To Come", link: "http://www.imdb.com/"}]
    }
  }

  render() {
    return(
    <div className='film-box'>
      <Headar/>
      <FilmList data={this.state.data}/>
      <Footer/>
      <GetShowTimes/>
    </div>
    )
  }

}

export default FilmBox;