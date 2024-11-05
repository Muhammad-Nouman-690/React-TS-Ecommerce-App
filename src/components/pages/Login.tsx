import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../core/UserContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loginUserValue, setLoginUserValue] = useState("");
  const [loginUserPass, setLoginUserPass] = useState("");

  const user = useContext(UserContext);
  console.log("userName=>", user.name);
  console.log("password=>", user.password);

  const navigate = useNavigate();

  const notifyError = () => {
    toast.error("Invalid credentials. Please try again.");
  };

  const notifySuccess = () => {
    toast.success("Login successful! Redirecting...");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevents the form's default submit action
    if (
      user.name != loginUserValue ||
      user.password != loginUserPass ||
      loginUserValue == "" ||
      loginUserPass == ""
    ) {
      notifyError(); // Call the error toast function
    } else {
      notifySuccess();  // Call the success toast function
      setTimeout(goHome, 1000); // Delay navigation to give time for the success toast to display
    }
  };

  function goHome() {
    navigate("/Home");
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Nouman's Mart
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  value={loginUserValue}
                  onChange={(e) => {
                    setLoginUserValue(e.target.value);
                  }}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  value={loginUserPass}
                  onChange={(e) => {
                    setLoginUserPass(e.target.value);
                  }}
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <p className="text-sm mt-5 font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/Signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </Link>
              </p>
            </form>
            {/* ToastContainer must be included in the component */}
            <ToastContainer position="top-right" transition={Bounce} />
          </div>
        </div>
      </div>
    </section>
  );
}
