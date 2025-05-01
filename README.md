# `React Hooks` 복습 실습

## `useEffect()`

> `useEffect`를 이용해 아래의 조건을 만족하도록 작성하기

1. `렌더링 완료` 👉🏻 최초 한번만 출력.
2. `count 값이 바뀜` 👉🏻 버튼 클릭 시 마다 출력.
3. `input 값이 바뀜` 👉🏻 text 입력 시 마다 출력.

- 또한, +1버튼을 누르면 `count`값이 올라가고 `text`값을 입력하면 아래 입력하는 값이 즉각 보여야한다.

## `useEffect` + `useRef`

1. `input`에 입력된 값이 저장된 `text`가 바뀔 때마다 `렌더링!` 이라는 문구 `conosole.log`에 찍히기

## `useState`

[CodeSandbox](https://codesandbox.io/p/sandbox/ds98vp?file=%2Fsrc%2FClock.js)

- `Clock.js`에서 업데이트 되지 않는 버그 수정하기.

## `Optimization` 성능 최적화

- 문제점을 파악하고 불필요한 렌더링 막기.
  - `ChildComponent`가 `React.memo`로 감싸져 있어도 무조건 리렌더링 된다.
  - 매번 새로운 객체/함수라서 props가 바뀐 것으로 간주한다.

## `useReducer`

1. `useReducer` 사용해 익혀보기
