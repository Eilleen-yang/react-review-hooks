import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 여기서 핵심은 전부 다 useEffect 를 사용하는 게 아닙니다.
  // 이벤트 핸들러에서 처리가 가능하다면 핸들러에서 처리하면 됩니다.
  useEffect(() => {
    console.log("렌더링 완료");
  }, []);

  const handleIncreaseClick = () => {
    setCount((prev) => prev + 1);
    console.log("count값 바뀜");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log("input 값 바뀜");
  };
  return (
    <>
      <div>use Effect</div>
      <div>
        <h3>{count}</h3>
        <button onClick={handleIncreaseClick}>+ 1</button>
        <hr />
        <input type="text" onChange={handleInputChange} />
        <h3>{text}</h3>
      </div>
    </>
  );
}
