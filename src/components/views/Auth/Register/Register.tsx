import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import {Spinner} from "@heroui/react";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleRegister,
    handleSubmit,
    isPendingRegister,
    errors,
  } = useRegister();

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
            <h2 className="text-xl font-bold text-danger">Create Account</h2>
            <p className="text-small">
              Have an account?&nbsp;
              <Link
                href="/auth/login"
                className="font-semibold text-danger-400"
              >
                Login here
              </Link>
            </p>

            {errors.root && (
                <p className="mb-2 font-medium text-danger">
                    {errors?.root?.message}
                </p>
            )}

            <form className="mt-4 flex w-80 flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
              <Controller
                name="fullname"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type="text"
                    label="fullname"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.fullname !== undefined}
                    errorMessage={errors.fullname?.message}
                  />
                )}
              />
              <Controller
                name="username"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type="text"
                    label="username"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.username !== undefined}
                    errorMessage={errors.username?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type="text"
                    label="email"
                    variant="bordered"
                    autoComplete="off"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    type={visiblePassword.password ? "text" : "password"}
                    label="password"
                    variant="bordered"
                    autoComplete="off"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => handleVisiblePassword("password")}
                      >
                        {visiblePassword.password ? (
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

              <Controller
                name="confirmPassword"
                control={control}
                render={({field}) => (
                    <Input
                    {...field}
                    type={
                      visiblePassword.confirmPassword ? "text" : "password"
                    }
                    label="passwordConfirmation"
                    variant="bordered"
                    autoComplete="off"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() =>
                          handleVisiblePassword("confirmPassword")
                        }
                      >
                        {visiblePassword.confirmPassword ? (
                          <FaEye className="pointer-events-none text-xl text-default-400" />
                        ) : (
                          <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                        )}
                      </button>
                    }
                    isInvalid={errors.confirmPassword !== undefined}
                    errorMessage={errors.confirmPassword?.message}
                  />
                )}
              />
      
              <Button color="danger" size="lg" type="submit">
                {isPendingRegister ? <Spinner color="white"/> : "Register"}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Register;
