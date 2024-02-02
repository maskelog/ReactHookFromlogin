import { useForm } from "react-hook-form";

function LoignForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register("email")}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="******"
        {...register("password")}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoignForm;
