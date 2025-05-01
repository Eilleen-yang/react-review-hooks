import { useEffect, useRef, useState } from "react";

// - input 값을 기억은 하고 싶은데 리렌더링은 발생시키고 싶지 않아요 → useRef
// - 전송을 누르면 핸들러 발동되면서 setText 에 기억했던 입력값을 넣어주면 끝
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
