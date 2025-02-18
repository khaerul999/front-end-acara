import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import {Spinner} from "@heroui/react";

const Login = () => {
  const {
    isVisible,
    toggleVisibility,
    control,
    handleLogin,
    handleSubmit,
    isPendingLogin,
    errors,
  } = useLogin();

  console.log(errors);
  
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
          <Image
            src="/images/general/logo.svg"
            alt="logo"
            width={180}
            height={180}
          />
          <Image
            src="/images/ilustrations/login.svg"
            alt="login"
            width={1024}
            height={1024}
            className="w-2/3 lg:w-full"
          />
        </div>
        <Card>
          <CardBody className="p-8">
            <h2 className="text-xl font-bold text-danger">Login</h2>
            <p className="text-small">
              Dont have a account?&nbsp;
              <Link
                href="/auth/register"
                className="font-semibold text-danger-400"
              >
                Register here
              </Link>
            </p>

            {errors.root && (
                <p className="mt-2 text-xs font-medium text-danger">
                    {errors?.root?.message}
                </p>
            )}

            <form className="mt-4 flex w-80 flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
            
              <Controller
                name="identifier"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type="text"
                    label="Email / Username"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.identifier !== undefined}
                    errorMessage={errors.identifier?.message}
                  />
                )}
              />
             
              <Controller
                name="password"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type={isVisible? "text" : "password"}
                    label="password"
                    variant="bordered"
                    autoComplete="off"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <FaEye className="pointer-events-none text-xl text-default-400" />
                        ) : (
                          <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                        )}
                      </button>
                    }
                    isInvalid={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                  />
                )}
              />
      
              <Button color="danger" size="lg" type="submit">
                {isPendingLogin ? <Spinner color="white"/> : "Register"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Login;
