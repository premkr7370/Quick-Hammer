// import { login } from "/store/slices/userSlice";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated } = useSelector((state) => state.user);

//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, isAuthenticated, loading]);

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
//         <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] sm:h-[450px]">
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             Login
//           </h1>
//           <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-[16px] text-stone-500">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
//               />
//             </div>
//             <button
//               className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
//               type="submit"
//             >
//               {loading ? "Logging In..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;



import { login } from "/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-md">
          {/* Header section */}
          <div className="bg-blue-600 py-6 px-4 text-center">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-blue-100 mt-1">Sign in to your account</p>
          </div>

          {/* Form section */}
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign up prompt */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up now
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;