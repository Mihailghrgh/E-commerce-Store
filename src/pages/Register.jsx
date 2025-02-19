import { FormInput, SubmitBtn } from "../components/index";
import { Form, Link } from "react-router-dom";

export const action = async () => {
  return null;
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center bg-transparent">
      <Form
        method="post"
        className="card w-96 p-8 bg shadow-lg flex flex-col gap-y-1 bg-primary-content"
      >
        <FormInput
          name="text"
          label="username"
          type="username"
          defaultValue="Jane Doe"
        />
        <FormInput
          name="email"
          label="email"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          defaultValue="your password"
        />
        <div className="mt-3">
          <SubmitBtn text="Create Account" color="primary" />
        </div>

        <div className="mt-2">
          <p className="text-center">
            Already a member?{" "}
            <span>
              <Link
                to="/login"
                className="link-primary capitalize ml-1 link link-hover"
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Register;
