"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

type Inputs = {
  email: string;
  name: string;
  password: string;
};

export default function SignUpForm() {
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  async function signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    console.log(data, error);
  }

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, password }) => {
    console.log(name, email, password);
    signUpNewUser(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col p-4 gap-2"
    >
      <h2 className="text-center">Sign-up</h2>

      <label htmlFor="name">Name</label>
      <input className="border" {...register("name", { required: true })} />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="border"
        {...register("email", { required: true })}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="border"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <input type="submit" className="bg-blue-400 p-2 text-white" />

      <p>
        Already have an account? click{" "}
        <Link href="/auth/login" className="text-blue-500">
          here
        </Link>
      </p>
    </form>
  );
}
