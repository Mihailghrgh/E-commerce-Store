import { FormInput, SubmitBtn } from "../components/index";
import { Form, Link, useNavigate, useSearchParams } from "react-router-dom";
import { customHook } from "../utils";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { createLogin } from "../utils/userLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  const formatData = await request.formData();
  const data = Object.fromEntries(formatData);

  try {
    const response = await customHook.post("/auth/local/", data);

    createLogin(response.data);
    toast.success("Logged in successfully");
    return redirect("/");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      `Email or Password incorrect, please try again`;
    console.log(errorMessage);

    toast.error("Wrong email or password, please try again");
  }

  return null;
};

const Login = () => {
  const navigate = useNavigate();

  const handleGuestUser = async () => {
    try {
      const response = await customHook.post(`/auth/local/`, {
        identifier: "test@test.com",
        password: "secret",
      });
      createLogin(response.data);
      toast.success("Logged in as Guest");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        `Email or Password incorrect, please try again`;
      console.log(errorMessage);

      toast.error("Wrong email or password, please try again");
    }
  };

  ////Redirecting the user and getting the search Params in order to check if it had landed to the warning Page
  const [searchParams] = useSearchParams();
  const warning = searchParams.get("warning");

  useEffect(() => {
    if (warning) {
      toast.warn("You must login in order to checkout");
    }
  }, [warning]);

  return (
    <section className="h-screen grid place-items-center  bg-transparent">
      <div className="card w-96 p-8 bg shadow-xl flex flex-col gap-y-4 bg-primary-content ">
        <Form method="post">
          <FormInput name="identifier" label="Email" type="email" />
          <FormInput name="password" label="Password" type="password" />
          <SubmitBtn text="Login" color="primary" />
        </Form>
        <SubmitBtn
          text="Guest User"
          color="secondary"
          handleClick={handleGuestUser}
        />
        <div>
          <p className="text-center">
            Not a member yet?{" "}
            <span>
              <Link
                to="/register"
                className="link-primary capitalize ml-1 link link-hover"
              >
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
