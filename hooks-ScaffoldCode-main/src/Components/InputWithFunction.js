import { useState, useEffect } from "react";
export default function Input() {
  const [name, setName] = useState("Harry");
  const [lastName, setLastName] = useState("Joseph");

  useEffect(() => {
    document.title = name + " " + lastName;
  }, []);
  //[] acts like componentDidMount
  //[any arg] acts like componentDidUpdate. That means if the argument value changes the defined action within useEffect will take place.
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello, {name + " " + lastName}</h2>
    </>
  );
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
