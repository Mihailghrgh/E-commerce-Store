import { FormInput, SubmitBtn } from "../components/index";
import { Form, Link } from "react-router-dom";
import { customHook } from "../utils";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { createLogin } from "../utils/userLogin";

export const action = async ({ request }) => {
  const formatData = await request.formData();
  const data = Object.fromEntries(formatData);

  try {
    const response = await customHook.post("/auth/local/", data);
    console.log(response);
    
    toast.success('Logged in successfully')
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
  return (
    <section className="h-screen grid place-items-center  bg-transparent">
      <Form
        method="post"
        className="card w-96 p-8 bg shadow-xl flex flex-col gap-y-4 bg-primary-content "
      >
        <FormInput
          name="identifier"
          label="Email"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          defaultValue="your password"
        />
        <SubmitBtn text="Login" color="primary" />
        <SubmitBtn text="Forgot Password" color="primary" />
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
      </Form>
    </section>
  );
};
export default Login;
