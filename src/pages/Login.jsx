import { FormInput, SubmitBtn } from "../components/index";
import { Form, Link } from "react-router-dom";

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
