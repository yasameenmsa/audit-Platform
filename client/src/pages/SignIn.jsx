import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { Link } from 'react-router-dom';
// import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // Simulating the form submission
      // Replace this section with your actual API call logic
      console.log("Form Data:", formData); // Logging the form data
      // Example of dispatching success for demonstration
      dispatch(signInSuccess({ message: "Successfully signed in!" }));
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
//     <div className="d-flex flex-column flex-root">

//       <div
//         className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
//         id="kt_login"
//       >
//         <div
//           className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
//           style={{ backgroundImage: "url(https://auditrek.net/assets/login/bg-4.jpg)" }}
//         >
//           {/* Content for login aside */}
//         </div>
//         <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
//           <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
//             {/* Additional content or buttons here */}
//           </div>
//           <div className="d-flex flex-column-fluid flex-center mt-15 mt-lg-0">
//             <div className="login-form login-signin">
//               {/* Your form content */}
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="border p-3 rounded-lg"
//                   id="email"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="border p-3 rounded-lg"
//                   id="password"
//                   onChange={handleChange}
//                 />
//                 <button
//                   disabled={loading}
//                   className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
//                 >
//                   {loading ? "Loading..." : "Sign In"}
//                 </button>
//               </form>
//               <div className="flex gap-2 mt-5">
//                 <p>Dont have an account?</p>
//                 {/* Add the link for signing up */}
//               </div>
//               {error && <p className="text-red-500 mt-5">{error}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

<div className="flex flex-col h-screen">

<div
  className="flex flex-col lg:flex-row bg-white h-full"
  id="kt_login"
>
<div className='absolute top-0 left-0 text-right mt-5 mb-15 mb-lg-0 flex-col justify-center py-5 px-10' >
      <h1 className='text-slate-100 bold text-center text-5xl'>Aduit Platform </h1>
      </div>
  <div
    className="flex flex-col lg:flex-row lg:flex-auto bg-cover bg-no-repeat p-10 lg:p-10"
    style={{ backgroundImage: "url(https://auditrek.net/assets/login/bg-4.jpg)" }}
  >
   <div className='absolute top-1/2 text-right mt-5 mb-15 mb-lg-0 flex-col justify-center py-5 px-10' >
      <h1 className='text-slate-100 bold text-center text-3xl'>    Welcome to Aduit Platform! </h1>
      </div> 

  </div>
  <div className="flex flex-col lg:flex-row lg:flex-auto relative p-7 overflow-hidden">
    <div className="absolute top-0 left-0 text-right mt-5 mb-15 mb-lg-0 flex-col justify-center py-5 px-10">
      {/* Additional content or buttons here */}
    </div>
    <div className="flex flex-col lg:flex-row flex-auto items-center justify-center lg:justify-start">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Newly added content */}
          <div className="text-center mb-10 mb-lg-20">
            <h3 className="text-3xl">Log In</h3>
            <p className="text-muted font-weight-bold">Enter your username and password</p>
          </div>
          {/* Your form content */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg w-full"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg w-full"
              id="password"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-full"
            >
              {loading ? "Loading..." : "Log In"}
            </button>
          </form>
          <div className="flex items-center mt-5">
            <p className="text-sm">Dont have an account?</p>
           <Link to='/Riskdashboard'  >
            Start
           </Link>
            {/* Add the link for signing up */}
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  );
 }