/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { registerFormType } from "../../types/authFormTypes";
import { EMAIL_REGEX, NAME_REGEX } from "../../constants/regex";
import Loder from "../Loder";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../redux/store";
import { registerUser } from "../../redux/auth/authActions";

const RegisterForm = () => {
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState, watch } =
    useForm<registerFormType>({ mode: "all" });
  const { errors } = formState;
  const password = watch("password");
  const onSubmit = async (data: registerFormType) => {
    dispatch(registerUser(data));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "you must enter name" },
                pattern: {
                  value: NAME_REGEX,
                  message: "name must start with letter",
                },
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2">
              {typeof errors.name?.message === "string"
                ? errors.name?.message
                : null}
            </p>
          </div>
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: { value: true, message: "confirm password requried" },
                validate: (value) =>
                  value === password || "password doesnt match",
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2">{error}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            {loading ? <Loder /> : "Register"}
          </button>
          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
