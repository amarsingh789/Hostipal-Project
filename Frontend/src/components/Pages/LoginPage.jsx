import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Navigation added
import toast from "react-hot-toast"; // Toast added
import { loginStart, loginSuccess, loginFailure } from "@/Redux/Features/authentication/authSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Eye, EyeOff, Loader2, User } from "lucide-react";

// ==========================================
// 1. Zod Schema - Validation
// ==========================================
const formSchema = z.object({
  loginId: z.string().min(3, "Email, or Mobile No. is required."),
  password: z.string().min(1, "Password is required."),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // 2. React Hook Form Setup
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  // ==========================================
  // 3. API Call: Login Handler
  // ==========================================
  const onSubmit = async (values) => {
    setLoading(true);
    console.log("Submitting Login:", values);
    try {
      // API call (Credentials true for cookies if used later)
      const res = await axios.post("http://localhost:5000/api/login", values, {
        withCredentials: true 
      });
      
      console.log("Login Success:", res.data);
      
      localStorage.setItem("ziva_token", res.data.accessToken)
      dispatch(loginSuccess({
        user: res.data.user,
        token: res.data.accessToken
      }))
      // Success Toast
      toast.success("Login Successful! Welcome back.");
      
      // TODO: Redux mein token save karein (Next step)
      
      // Redirect to Dashboard or Home
      setTimeout(() => navigate("/dashboard"), 1500); 

    } catch (error) {
      console.error("Login Error:", error);
      
      const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
      
      dispatch(loginFailure(errorMessage))
      // Error Toast
      toast.error(errorMessage);
      
      form.setError("root", {
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    // Main Background - Mint gradient to light gray
    <div className="min-h-screen bg-gradient-to-br from-[#E6F4F1] via-gray-50 to-[#E6F4F1] flex items-center justify-center p-4 sm:p-8">
      
      {/* Main Glassmorphism Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-w-6xl w-full min-h-[600px] border border-white/50 bg-opacity-90 backdrop-blur-xl">
        
        {/* ================= LEFT SIDE (Branding) ================= */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-[#053b32] text-[#E5E7EB] w-1/2 relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,100 L50,100 L60,80 L70,120 L80,100 L130,100"
                stroke="#dfff4f"
                fill="none"
                strokeWidth="2"
                transform="scale(2)"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tight mb-16 flex items-center gap-2 text-[#dfff4f]">
              Ziva Healthcare
            </h2>
          </div>

          <div className="relative z-10 mb-12">
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-white">
              Welcome Back to <br /> Better Health
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Securely access your records, consult top doctors, and manage
              appointments with a single sign-in.
            </p>
          </div>

          <div className="relative z-10 flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-[#dfff4f] transition">Terms</Link>
            <Link to="#" className="hover:text-[#dfff4f] transition">Plans</Link>
            <Link to="#" className="hover:text-[#dfff4f] transition">Contact Us</Link>
          </div>
        </div>

        {/* ================= RIGHT SIDE (Form) ================= */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-[#053b32] mb-2 tracking-tight">
              Sign In
            </h2>
            <p className="text-gray-500 mb-8">Access your health account.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Unified Input */}
                <FormField
                  control={form.control}
                  name="loginId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                       Email, or Mobile No.
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center space-x-1 text-gray-400">
                            <User className="w-5 h-5" strokeWidth={1.5} />
                            <Separator
                              orientation="vertical"
                              className="h-5 border-gray-300"
                            />
                          </div>
                          <Input
                            placeholder="Email or +91..."
                            className="h-12 bg-gray-50 border-gray-200 rounded-lg pl-12 focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between mb-2">
                        <FormLabel className="text-gray-700 font-medium pb-0">
                          Password
                        </FormLabel>
                        <Link to="#" className="text-sm text-[#0F766E] hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-12 bg-gray-50 border-gray-200 rounded-lg focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 w-9 text-gray-500 hover:text-[#053b32]"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-[#0F766E] hover:bg-[#053b32] text-white rounded-lg mt-8 transition-colors shadow-md"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : null}
                  Sign In
                </Button>

                <p className="text-center text-sm text-gray-500 mt-6 pt-6 border-t border-gray-100">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-[#0F766E] hover:underline"
                  >
                    Sign up here
                  </Link>
                </p>

              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;