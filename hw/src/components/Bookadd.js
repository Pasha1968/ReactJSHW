import React, { useState } from 'react';

class Bookadd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      author: "",
      publisher: "",
      year:"",
      genreId:1,
    };
  }
  go() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch('https://localhost:44390/api/BookControler', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }
  submitHandler = (event) => {
    event.preventDefault();
    const {
        name,
        author,
        publisher,
        year,
        genreId
    } = this.state;
    console.log(JSON.stringify(this.state));
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch('https://localhost:44390/api/BookControler', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    this.setState({name: '', author: '', publisher: '',year:''})
  };
  changeInputHandler = event => {
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
    }}))
  }
  render() {
    return (
      <div className="container pt-3">
        <form onSubmit={this.submitHandler}>
        <div className="form-group">
            <label htmlFor="name">BookName</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              name="name"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="author">author</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.author}
              name="author"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="publisher">publisher</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.publisher}
              name="publisher"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="year">year</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.year}
              name="year"
              onChange={this.changeInputHandler}
            />
            <label htmlFor="genreId">genreId</label>
            <input
              type="text"
              className="form-control"
              id="genreId"
              value={this.state.genreId}
              name="genreId"
              onChange={this.changeInputHandler}
            />
          </div>
          <button className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}
export default Bookadd;