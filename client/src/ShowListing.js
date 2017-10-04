import React, { Component } from 'react';
import Show from './Show'

const ShowListing = (props) => {

  const showNodes = props.shows.map( (show) => {
    return <Show show={show} />
  })

  return (
    <ul>
      {showNodes}
    </ul>
  )
}


export default ShowListing;
