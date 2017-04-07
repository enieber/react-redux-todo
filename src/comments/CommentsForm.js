import React, { Component } from 'react';

class CommentsForm extends Component {
  constructor(props) {
    super(props) 
    this.onAddCommet = this.onAddCommet.bind(this);
    this.state = {
      name: '',
      text: '',
    }
  }

  onAddCommet() {
    let name = this.state.name
    let text = this.state.text
    if (name && text) {
      console.log(name)
      this.setState({name: '', text: ''})
      this.props.addCommet(name, text)
    }
  } 

  nameChange(event) {    
    this.setState({name: event.target.value});
  }
  
  textChange(event) {    
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Shelf</h2>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.nameChange.bind(this)}/>
          </label>
          <label>
            Comment:
            <input type="text" name="text" value={this.state.text} onChange={this.textChange.bind(this)}  />
          </label>
          <button onClick={() => this.onAddCommet()}>Adicionar</button>
      </div>
    );
  }
}

export default CommentsForm;
