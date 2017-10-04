import React, { Component } from 'react';
import './App.css';
import ShowListing from './ShowListing.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {shows: []};
  }

  componentDidMount(){
    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/api/shows");
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) return;
      console.log(xhr.response);
      this.setState((prevState) => {
        return {
          shows: JSON.parse(xhr.response)
        }
      })
    });
    xhr.send()
  }

  render() {
    return (
      <div className="App">
        <h1>My Shows</h1>
        <section>
          <ShowListing shows={this.state.shows}/>
        </section>
      </div>
    );
  }
}

export default App;
