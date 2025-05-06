// useOptimistic() : UI를 낙관적으로 업데이트할 수 있게 해주는 React Hook

import { useOptimistic, useRef, useState } from "react";

function Thread({ messages, sendMessage }) {
  const formRef = useRef();
  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current.reset();
    await sendMessage(formData);
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  return (
    <>
      <h3>useOptimistic</h3>
      {optimisticMessages.map((messages, index) => (
        <div key={index}>
          {messages.text}
          {!!messages.sending && <small>(Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
export default function OptimisticForm() {
  const [messages, setMessages] = useState([
    {
      text: "Hello there!",
      sending: false,
      key: 1,
    },
  ]);
  async function sendMessage(formData) {
    const sendMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sendMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}

export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
