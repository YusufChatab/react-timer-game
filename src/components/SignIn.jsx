import { useState, useRef } from "react";

export default function SignIn() {
  const [name, setName] = useState("");
  const playerName = useRef();

  function handleClick() {
    setName(playerName.current.value);
  }
  return (
    <section id="sign-in">
      <h2>Hello there {name ? name : "unknown entity"} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Sign In</button>
      </p>
    </section>
  );
}
