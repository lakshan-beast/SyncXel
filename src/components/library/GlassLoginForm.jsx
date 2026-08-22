import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

const GlassLoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [authStatus, setAuthStatus] = useState({
    success: false,
    title: "",
    message: "",
  });

  // Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Mock Login Check (Demo Credentials)
      if (username === "Admin" && password === "1234") {
        setAuthStatus({
          success: true,
          title: `Welcome, ${username}! 🎉`,
          message: "You have successfully logged in to the SyncXel Platform.",
        });
      } else {
        setAuthStatus({
          success: false,
          title: "Access Denied",
          message: "Invalid details. Try Username: admin & Password: 1234",
        });
      }
    } else {
      if (password !== confirmPassword) {
        setAuthStatus({
          success: false,
          title: "Validation Error",
          message: "Passwords do not match. Please check and try again.",
        });
      } else {
        setAuthStatus({
          success: true,
          title: "Account Created! 🚀",
          message: "Your account is ready. You can now log in.",
        });
      }
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="relative flex items-center justify-center min-h-full w-full p-2 overflow-hidden rounded-2xl bg-cover bg-center border border-slate-800">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-sm p-5 bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-300">
        {/* 🔔 MESSAGE / RESULT SCREEN */}
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div
              className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center border ${
                authStatus.success
                  ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}>
              {authStatus.success ? (
                <HiOutlineCheckCircle className="w-7 h-7" />
              ) : (
                <HiOutlineExclamationCircle className="w-7 h-7" />
              )}
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                {authStatus.title}
              </h3>
              <p className="text-xs text-slate-400 max-w-60 mx-auto leading-relaxed">
                {authStatus.message}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full mt-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-white/10 transition-all duration-200">
              {authStatus.success && !isLogin ? "Go to Login" : "Try Again"}
            </button>
          </div>
        ) : (
          /* 🔒 LOGIN / SIGNUP FORM SCREEN */
          <div>
            <div className="text-center mb-6 space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-[11px] text-slate-400">
                {isLogin
                  ? "Enter your details to access your account"
                  : "Join SyncXel and start building today"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Username Input */}
              <div className="relative flex items-center">
                <HiOutlineUser className="absolute left-3.5 text-slate-400 text-base pointer-events-none" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={isLogin ? "Username" : "Username (5-10 chars)"}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="relative flex items-center">
                <HiOutlineLockClosed className="absolute left-3.5 text-slate-400 text-base pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-slate-400 hover:text-cyan-400 transition-colors">
                  {showPassword ? (
                    <HiOutlineEyeOff className="text-base" />
                  ) : (
                    <HiOutlineEye className="text-base" />
                  )}
                </button>
              </div>

              {/* Confirm Password (Signup only) */}
              {!isLogin && (
                <div className="relative flex items-center">
                  <HiOutlineShieldCheck className="absolute left-3.5 text-slate-400 text-base pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              )}

              {/* Remember Me / Forgot Pass (Login only) */}
              {isLogin && (
                <div className="flex items-center justify-between text-[11px] pt-0.5">
                  <label className="flex items-center gap-1.5 text-slate-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-slate-800 bg-slate-900 text-cyan-500 focus:ring-0"
                    />
                    <span>Remember me</span>
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => e.preventDefault()}
                    className="text-cyan-400 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Switch Mode Toggle */}
            <div className="text-center mt-5 pt-3.5 border-t border-slate-800/80 text-xs text-slate-400">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setIsLogin(false);
                      setSubmitted(false);
                    }}
                    className="text-cyan-400 font-semibold hover:underline ml-1">
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setIsLogin(true);
                      setSubmitted(false);
                    }}
                    className="text-cyan-400 font-semibold hover:underline ml-1">
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlassLoginForm;
