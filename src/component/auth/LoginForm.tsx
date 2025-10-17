/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import type { logInFormType } from "../../types/authFormTypes";
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../../constants/regex";
import { useState } from "react";
import { login } from "../../api/auth";
import Loder from "../Loder";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, setError } =
    useForm<logInFormType>({ mode: "all" });
  const { errors } = formState;
  //   const { name, ref, onChange, onBlur } = register("email");
  const onSubmit = async (data: logInFormType) => {
    try {
      setLoading(true);
      await login(data);
    } catch (error: any) {
      setError("root", { message: error.response.data });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            LogIn Here
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                // name={name}
                // ref={ref}
                // onChange={onChange}
                // onBlur={onBlur}
                {...register("email", {
                  required: { value: true, message: "Email is requred" },
                  pattern: { value: EMAIL_REGEX, message: "invalid email" },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <p className="text-sm text-red-600 mt-2">
                {typeof errors.email?.message === "string"
                  ? errors.email?.message
                  : null}
              </p>
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: { value: true, message: "password is requred" },
                  minLength: {
                    value: 8,
                    message: "Passowrd must be eight digit",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <p className="text-sm text-red-600 mt-2">
                {typeof errors.password?.message === "string"
                  ? errors.password?.message
                  : null}
              </p>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
            >
              {loading ? <Loder /> : "Login"}
            </button>
            {/* Login Redirect */}
            <p className="text-center text-sm text-gray-600 mt-4">
              DO you not have an account ?
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
