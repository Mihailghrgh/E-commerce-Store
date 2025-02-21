import { FormInput, SubmitBtn } from "../components/index";
import { Form, Link, redirect } from "react-router-dom";
import { customHook } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customHook.post(`/auth/local/register`, data);
    toast.success("User registered successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      `please double check the credentials`;
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center bg-transparent">
      <Form
        method="post"
        className="card w-96 p-8 bg shadow-lg flex flex-col gap-y-1 bg-primary-content"
      >
        <FormInput
          name="username"
          label="username"
          type="username"
          defaultValue="Jane1 Doe"
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
          defaultValue="secret"
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
