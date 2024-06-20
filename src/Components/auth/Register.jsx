import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

const Register = () => {
  // schema
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(/^(\+98|0)?9\d{9}$/, {
        message: "Invalid number",
      }),
    password: yup
      .string()
      .min(8, "Must be 8 Chars long")
      .matches(/[a-z]/, "Must contain at least 1 lower Letter")
      .matches(/[A-Z]/, "Must contain 1 capital Letter")
      .matches(/[0-9]/, "Must contain number")
      .matches(
        /[!@#$%^&*()\-_=+[\]{}|;:',.<>/?\\]/,
        "Must contain special character(!@#$%^&*()-+)."
      )
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password is required"),
  });
  // hooks
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({ resolver: yupResolver(schema) });
  //   functions
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data, isLoading, isSubmitting);
    reset()
  };

  return (
    <>
      <section className="bg-main bg-gradient-to-r from-startGradient to-stopGradient h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full my-5 shadow dark:border  sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:space-y-6 border-t-2 border-gold bg-transparent">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Register
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    name
                  </label>
                  <input
                    {...register("name")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.name ? "border-rose-600 " : ""
                    }`}
                    type="text"
                    placeholder="name"
                  />
                  {errors?.name?.message && (
                    <p className="text-red-600 text-xs mt-2">
                      {errors?.name?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    {...register("lastName")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.lastName ? "border-rose-600 " : ""
                    }`}
                    type="text"
                    placeholder="last name"
                  />
                  {errors?.lastName?.message && (
                    <p className="text-red-600 text-xs mt-2">
                      {errors?.lastName?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    phone
                  </label>
                  <input
                    {...register("phone")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.phone ? "border-rose-600 " : ""
                    }`}
                    type="text"
                    placeholder="phone"
                  />
                  {errors?.phone?.message && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors?.phone?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    password
                  </label>
                  <input
                    {...register("password")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.password ? "border-rose-600 " : ""
                    }`}
                    type="text"
                    placeholder="Password"
                  />
                  {errors?.password?.message && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    confirmPassword
                  </label>
                  <input
                    {...register("confirmPassword")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.confirmPassword ? "border-rose-600 " : ""
                    }`}
                    type="text"
                    placeholder="ConfirmPassword"
                  />
                  {errors?.confirmPassword?.message && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors?.confirmPassword?.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                 
                 
                </div>
                <button
                  disabled={isLoading || isSubmitting}
                  type="submit"
                  className="bg-goldBtn border border-goldBtn w-full flex  justify-around text-white hover:bg-goldHover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading || isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Register"
                  )}  
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                 
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <DevTool control={control} />
    </>
  );
};

export default Register;
