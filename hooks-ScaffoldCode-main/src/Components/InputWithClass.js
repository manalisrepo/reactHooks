import React from "react";

export default class Input extends React.Component {
  timer: any;
  constructor() {
    super();
    this.state = {
      name: "Harry",
      lastName: "Potter",
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              value={this.state.name}
              onChange={this.handleName}
            />
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              value={this.state.lastName}
              onChange={this.handleLastName}
            />
          </Row>
        </div>

        <h2>Hello, {this.state.name + " " + this.state.lastName}</h2>
      </>
    );
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.lastName;
    this.timer = setInterval(() => {
      console.log("window.width : ", window.innerWidth);
    }, 2000);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.lastName;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
