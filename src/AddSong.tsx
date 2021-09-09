import React from 'react'

interface parentCallback {
  value: string
}

class addSong extends React.Component <{parentCallback:any}, { value: string }>{

  constructor(props:any) {
    super(props);
    this.state = { value: 'Hello' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  sendData = () => {
     this.props.parentCallback(this.state.value);
  }
  myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
  }
  handleSubmit(event:any) {
    this.sendData()
    event.preventDefault();

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.myChangeHandler}
        />
          <p>{this.state.value}</p>
      </form>

    );
  }
}
export default addSong;
