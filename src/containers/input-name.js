import React from 'react';

export class InputName extends React.Component {
  constructor(props){
    super(props);
    this.state={correct: false};
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    const text=e.target.value;
    if()
  }

  render(){
    if(!this.state.correct){
      return (
        <input type="text" onChange={this.handleChange} />
        <p>Name can contain only letters </p>
      )
    }
    return(
      <input type="text" onChange={this.handleChange} />
    )
  }
}