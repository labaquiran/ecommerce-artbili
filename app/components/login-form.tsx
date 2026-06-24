"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col p-4 gap-2"
    >
      <h2 className="text-center">Login</h2>

      <label htmlFor="email"> email</label>
      <input
        type="email"
        className="border"
        {...(register("email"), { required: true })}
      />

      <label htmlFor="password">password</label>
      <input className="border" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" className="bg-blue-400 p-2 text-white" />
      <p>
        Don't have an account yet? click{" "}
        <Link href="/auth/signup" className="text-blue-500">
          here
        </Link>
      </p>
    </form>
  );
}
