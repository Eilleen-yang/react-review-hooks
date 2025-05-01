import { useCallback, useMemo } from "react";

// 이 코드는 최적화가 잘 안 된 경우입니다.
<ChildComponent
  config={{ page: 1 }} // 매 렌더링마다 새로운 객체
  onClick={() => alert("hi")} // 매 렌더링마다 새로운 함수
/>;

// 위 코드를 고쳐보세요. vscode 에 그냥 적어보시면 됩니다.
function ChildComponent() {
  const config = useMemo(() => ({ page: 1 }), []);
  const click = useCallback(() => {
    console.log("callback hi");
  }, []);

  return (
    <ChildComponent
      config={config} // 매 렌더링마다 새로운 객체
      onClick={click} // 매 렌더링마다 새로운 함수
    />
  );
}
export default React.memo(ChildComponent);
