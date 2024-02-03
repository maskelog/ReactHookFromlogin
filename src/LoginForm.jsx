import { useForm } from "react-hook-form";
import "@picocss/pico";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        // 1초 기다린 후 데이터를 alert로 표시합니다.
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(JSON.stringify(data));
      })}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="******"
        {...register("password", {
          required: "비밀번호는 필수입력입니다",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
        aria-invalid={
          isSubmitted ? (errors.password ? "true" : "false") : undefined
        }
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
