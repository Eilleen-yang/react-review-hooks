# `React Hooks` 복습 실습

## `useEffect()`

> `useEffect`를 이용해 아래의 조건을 만족하도록 작성하기

1. `렌더링 완료` 👉🏻 최초 한번만 출력.
2. `count 값이 바뀜` 👉🏻 버튼 클릭 시 마다 출력.
3. `input 값이 바뀜` 👉🏻 text 입력 시 마다 출력.

- 또한, +1버튼을 누르면 `count`값이 올라가고 `text`값을 입력하면 아래 입력하는 값이 즉각 보여야한다.

## `useEffect` + `useRef`

1. `input`에 입력된 값이 저장된 `text`가 바뀔 때마다 `렌더링!` 이라는 문구 `conosole.log`에 찍히기

<br/>

`useRef()`가 사용되는 상황

- **타이머 ID**
- **이전 스크롤 위치**
- **DOM 요소의 참조**
- **API 응답 시간 체크용 시작 시간**
- **렌더링과 상관없는 캐시값**

## `useState`

[CodeSandbox](https://codesandbox.io/p/sandbox/ds98vp?file=%2Fsrc%2FClock.js)

- `Clock.js`에서 업데이트 되지 않는 버그 수정하기.

## `Optimization` 성능 최적화

- 문제점을 파악하고 불필요한 렌더링 막기.
  - `ChildComponent`가 `React.memo`로 감싸져 있어도 무조건 리렌더링 된다.
  - 매번 새로운 객체/함수라서 props가 바뀐 것으로 간주한다.

## Form

- `useFormStatus()` : 마지막 폼 제출의 상태 정보를 제공하는 Hook

  - 어떠한 매개변수도 받지 않는다.
  - 반환값으로 다음의 프로퍼티를 가지는 status 객체를 반환한다.
    - `pending, data, method, action`
  - → 이 훅은 `<form>` 내부에 렌더링한 컴포넌트에서 호출해야 함
  - → 이 훅은 오직 상위 `<form>` 에 대한 상태 정보만 반환함

- `useOptimistic()`
  - UI를 낙관적으로 업데이트할 수 있게 해주는 `React Hook`
  - 네트워크 요청과 같은 백그라운드의 작업이 끝나기 전에 사용자 인터페이스에 **낙관적**으로 업데이트하는 방법을 제공
