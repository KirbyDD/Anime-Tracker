import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = { 
      name: "",
      episode: "Not Started",
      form: false
    }
  }

  addShow = () => {
    this.setState({ form: true })
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    let newShow = {id: Date.now(), name: this.state.name, episode: this.state.episode};
    this.props.addToList(newShow);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: "",
      episode: "Not Started",
      form: false
    })
  }

  render() {
    return (
      <section>
        <button onClick={e => this.addShow()}>Add Show</button>
        { this.state.form &&
          <form onChange={e => this.handleChange(e)}>
            <label for="anime-name">Anime Name</label>
            <input id="anime-name" placeholder="Enter name here..." name="name" value={this.state.name}/>
            <label for="episode-num">Last Episode Watched</label>
            <input id="episode-num" placeholder="Enter episode here..." name="episode" value={this.state.episode}/>
            <button onClick={event => this.handleSubmit(event)}>Submit!</button>
          </form>
        }
      </section>
    )
  }
}

export default Form;