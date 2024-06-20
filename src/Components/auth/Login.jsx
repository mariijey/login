import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { SiZebpay } from "react-icons/si";

const Login = () => {
  // schema
  const schema = yup.object().shape({
    phone: yup
      .string()
      .required("phone is required")
      .matches(/^(\+98|0)?9\d{9}$/, {
        message: "Invalid number",
      }),
    password: yup
      .string()
      .min(8, "Must be 8 Chars long")
      .matches(/[a-z]/, "Must contain at least 1 Capital Letter")
      .matches(/[A-Z]/, "Must contain 1 lower Letter")
      .matches(/[0-9]/, "Must contain number")
      .matches(
        /[!@#$%^&*()\-_=+[\]{}|;:',.<>/?\\]/,
        "Must contain special character(!@#$%^&*()-+)."
      )
      .required("password is required"),
  });
  // hooks
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      rememberMe: false,
    },
  });

  const [type, setType] = useState("password");
  // constant
  const rememberMe = watch("rememberMe");

  //   functions
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const myArray = JSON.parse(localStorage.getItem("password"));
  };
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  // render
  return (
    <>
      <section className="bg-main bg-gradient-to-r from-startGradient to-stopGradient h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full my-5 shadow dark:border  sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:space-y-6 border-t-2 border-gold bg-transparent">
              <div className="flex flex-col items-center text-white">                
                  <BiSolidUserCircle className="text-8xl" />
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 "
                action="#"
              >
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    phone
                  </label>
                  <input
                    {...register("phone")}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  ${
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

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    password
                  </label>
                  <input
                    {...register("password")}
                    type={type}
                    className={`bg-grayBtn border border-borderGray outline-none text-gray-900 sm:text-sm focus-visible:border-gold focus:border-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors?.password ? "border-rose-600 " : ""
                    }`}
                    placeholder="Password"
                  />

                  <span
                    className="flex justify-end items-center"
                    onClick={handleToggle}
                  >
                    {type === "password" ? (
                      <ImEyeBlocked className="absolute mr-10 mb-10" />
                    ) : (
                      <ImEye className="absolute mr-10 mb-10" />
                    )}
                  </span>
                </div>
                {errors?.password?.message && (
                  <p className={`text-red-600 text-xs mt-0 ${styles.error}`}>
                    {errors?.password?.message}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        {...register("rememberMe")}
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>

                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-gold font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-goldBtn border border-goldBtn w-full flex  justify-around text-white hover:bg-goldHover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  login
                </button>
                <p className="text-sm font-light text-white dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <span className="font-medium text-white hover:underline dark:text-primary-500">
                    <Link to="/register">Register</Link>
                  </span>
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

export default Login;
