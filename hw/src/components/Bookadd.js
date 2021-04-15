import React, { useState } from 'react';

class Bookadd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      authorName: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const {
        title,
        body,
        authorName
    } = this.state;
    let newQuestion = {
        id: Date.now().toString(),
        title,
        body,
        authorName,
        counterView: 0,
        counterAnswers: 0,
        comments: [],
        dateTime: new Date(Date.now())
    }
    this.setState({title: '', body: '', authorName: ''})
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
            />
            <label htmlFor="author">author</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.author}
              name="author"
            />
            <label htmlFor="publisher">publisher</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.publisher}
              name="publisher"
            />
          </div>
          <button className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}
export default Bookadd;