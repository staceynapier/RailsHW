import React, { Component } from 'react';

const Show = (props) => {
  return (
    <section>
    <ul>{props.show.title}</ul>
    <p>{props.show.description}</p>

    </section>
  )
}

export default Show;
