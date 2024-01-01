"use client";
import { FC, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ErrorMessage from "./ErrorMessage";
import {containerVariants} from '@/core/framerVariables'
import { motion } from "framer-motion";
import { PATHS } from "@/core/paths";

type IProps = {
  onLogOut: () => void;
};

const SignUp: FC<IProps> = ({ onLogOut }) => {
  const router = useRouter();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;

  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    getValues,
    watch,
  } = useForm({
    mode: `onChange`,
    reValidateMode: `onChange`,
    shouldFocusError: true,
  });

  const onSubmitSignUp = () => {
    const { email, password, confirmPassword } = getValues();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push(PATHS.HOME);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      transition={{ duration: 0.2 }}
      className="w-11/12  py-2 mx-auto md:w-3/5 lg:w-2/5"
    >
      <h1 className="text-4xl font-bold text-center">
        Create your Free Account
      </h1>
      <p className="py-4 text-center">
        Already have an account?
        <button onClick={onLogOut} className="pl-2 link link-primary">
          Sign in
        </button>
      </p>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmitSignUp)}>
        <label className="form-control w-full">
          <div className="label">Your Email</div>
          <input
            className="input input-bordered w-full "
            type="email"
            {...register("email", {
              required: `this field is required`,
              pattern: {
                value: emailRegex,
                message: "this email eddress not valid",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage errorText={errors.email?.message as string} />
          )}
        </label>

        <label className="form-control w-full">
          <div className="label">Create a password</div>
          <div className="relative">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                setPasswordHidden(!isPasswordHidden);
              }}
            >
              {isPasswordHidden ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
            <input
              className="input input-bordered w-full "
              type={isPasswordHidden ? "password" : "text"}
              {...register("password", {
                required: `this field is required`,
                pattern: {
                  value: passwordRegex,
                  message:
                    "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
            />
          </div>
          {errors.password && (
            <ErrorMessage errorText={errors.password?.message as string} />
          )}
        </label>

        <label className="form-control w-full ">
          <div className="label">Confirm Password</div>
          <div className="relative">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={(e) => {
                e.preventDefault();
                setPasswordHidden(!isPasswordHidden);
              }}
            >
              {isPasswordHidden ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
            <input
              className="input input-bordered w-full "
              type={isPasswordHidden ? "password" : "text"}
              {...register("confirmPassword", {
                required: `this field is required`,
                pattern: {
                  value: passwordRegex,
                  message:
                    "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                },
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
          </div>
          {errors.confirmPassword && (
            <ErrorMessage
              errorText={errors.confirmPassword?.message as string}
            />
          )}
        </label>
        <button
          type="submit"
          disabled={!isValid}
          className={`btn ${!isValid ? "btn-disabled" : "btn-primary"} w-full`}
        >
          Sign Up
        </button>
      </form>
    </motion.div>
  );
};

export default SignUp;
