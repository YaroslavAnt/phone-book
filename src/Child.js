import React from 'react';

export class Child extends React.Component{
  render(){
    const name = this.props.name
    return(
      <h1>{name}</h1>
    )
  }
}