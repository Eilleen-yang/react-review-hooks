import { useRef } from "react";
import { useFormStatus } from "react-dom";

export function UsernameForm() {
  //마지막 폼 제출의 상태 정보를 제공하는 Hook
  const { pending, data } = useFormStatus();

  return (
    <div>
      <h3>FormStatus - UsernameForm / Request a Username :</h3>
      <input type="text" name="username" disabled={pending} />
      <button type="submit" disabled={pending}>
        {pending ? "submitting..." : "Submit"}
      </button>
      <br />
      <p>{data ? `Requesting ${data?.get("username")}...` : ""}</p>
    </div>
  );
}

export default function FormStatus() {
  const ref = useRef(null);

  return (
    <form
      action={async (formData) => {
        await SubmitForm(formData);
        ref.current.reset();
      }}
    >
      <UsernameForm />
    </form>
  );
}

export async function SubmitForm(query) {
  console.log(query.get("username"));
  await new Promise((res) => setTimeout(res, 2000));
}
