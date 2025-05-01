import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const [text, setText] = useState("");
  const ref = useRef();

  const handleSendClick = (e) => {
    ref.current = e.target.value;
  };

  const handleInputChange = (e) => {
    // setText(e.target.value);
    setText(ref.current);
  };

  useEffect(() => {
    console.log("렌더링 - !");
  }, [text]);

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSendClick}>전송</button>
      <h3>전송된 단어 : {text}</h3>
    </div>
  );
}
