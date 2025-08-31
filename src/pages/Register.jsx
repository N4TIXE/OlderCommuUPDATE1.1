import Newnav from "../components/newNav";
import { useState } from "react";

const Register = () => {
  const [isActive , setIsActive] = useState(false);
  const togglePanel = () =>{
    setIsActive(!isActive);
  }

  return (
    <>
      <Newnav />
      <div className="m-0 p-0 box-border flex items-center justify-center flex-col h-screen">
        <div className="bg-[#fff] rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
          {/* Sign-Up */}
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-google-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-facebook-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-github-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-line-fill"></i></a>
              </div>
              <span className="text-[12px]">or use your email for registeration</span>
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Gmail"/>
              <input type="password" placeholder="Password"/>
              <button className={`bg-[#512da8] text-white text-[12px] py-2.5 px-[45px] border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer`}>Sign Up</button>
            </form>
          </div>

          {/* Sign-In */}
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-google-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-facebook-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-github-fill"></i></a>
                <a href="#" className="text-[#333] text-[13px] no-underline my-[15px] mb-2.5"><i class="ri-line-fill"></i></a>
              </div>
              <span className="text-[12px]">or use your email password</span>
              <input type="email" placeholder="Gmail"/>
              <input type="password" placeholder="Password"/>
              <a href="#">Forget Your Password?</a>
              <button className={`bg-[#512da8] text-white text-[12px] py-2.5 px-[45px] border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer`}>Sign Up</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p className="text-[14px] leading-5 tracking-[0.3px] my-5">Enter your personal details to use all of site features</p>
                <button className={`bg-[#512da8] text-white text-[12px] py-2.5 px-[45px] border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer ${isActive === false ? 'bg-transparent border-white':''}`}>Sign In</button>
              </div>

              <div className="toggle-panel toggle-right">
                <h1>Hello, ToDevCommu!</h1>
                <p className="text-[14px] leading-5 tracking-[0.3px] my-5">Register with your personal details to use all of site features</p>
                <button className={`bg-[#512da8] text-white text-[12px] py-2.5 px-[45px] border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer ${isActive === false ? 'bg-transparent border-white':''}`}>Sign In</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;