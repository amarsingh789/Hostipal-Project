import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as z from "zod";
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
import { Eye, EyeOff, Loader2, User, Mail, Phone } from "lucide-react";
import { loginSuccess } from "../../Redux/Features/authentication/authSlice.js";
import { useDispatch } from "react-redux";
const API_URL = import.meta.env.VITE_API_URL;

// Schema
const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(30, "Name cannot be more than 30 characters."),
  mobileNumber: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number.",
    ),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please add a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // React hook form
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch()
  const onSumbit = async (values) => {
    setLoading(true)
    // console.log("Submitting Signup:", values);
    // try{
    //   const res = await axios.post('http://localhost:5000/api/register', values)
    //   console.log("Signup Success:", res.data)
    //   alert("Account created successfully! Please login.");
    // }catch(error){
    //   console.error("Signup Error:", error.response?.data?.message);
    //   form.setError("root", {
    //     message: error.response?.data?.message || "Failed to create account. Try again.",
    //   });
    // }finally {
    //   setLoading(false);
    // }

    // const dataToSend = { ...values };
    // if (dataToSend.mobileNumber === "") {
    //   delete dataToSend.mobileNumber; 
    // }

    console.log("Submitting Signup:", values);
    
    try {
      const res = await axios.post(`${API_URL}/api/register`, values);
      console.log("Signup Success:", res.data);
      
      dispatch(loginSuccess({
        user: res.data.user,
        token: res.data.token
      }))

      // 🚀 SUCCESS TOAST
      toast.success("Account created successfully! Please login.");
      
      // Optional: Form reset karein aur login par redirect karein
      form.reset();
      setTimeout(() => navigate("/login"), 2000); 

    } catch (error) {
      console.error("Signup Error:", error.response?.data?.message || error.message);
      
      // 🚀 ERROR TOAST
      const errorMessage = error.response?.data?.message || "Failed to create account. Try again.";
      toast.error(errorMessage);
      
      form.setError("root", {
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F4F1] via-gray-50 to-[#E6F4F1] flex items-center justify-center p-4 sm:p-6 lg:p-8 py-10">
      <div className="flex flex-col md:flex-row-reverse bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden max-w-6xl w-full min-h-[650px] border border-white/50 bg-opacity-90 backdrop-blur-xl">
        {/* Right Side */}
        <div className="hidden md:flex flex-col justify-between p-8 lg:p-12 bg-[#053b32] text-[#E5E7EB] md:w-1/2 relative overflow-hidden">
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
            <Link to="/" className="text-xl lg:text-2xl font-bold tracking-tight mb-8 lg:mb-16 flex items-center gap-2 text-[#dfff4f]">
              Ziva Healthcare
            </Link>
          </div>
          <div className="relative z-10 mb-8 lg:mb-11">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4 lg:mb-6 text-white">
              Start Your Health <br className="hidden lg:block"/> Journey Today
            </h1>
            <p className="text-gray-300 text-sm lg:text-lg max-w-md">
              Join thousands of patients managing their health records and
              consulting top doctors effortlessly.
            </p>
          </div>
          <div className="relative z-10 flex space-x-4 lg:space-x-6 text-xs lg:text-sm text-gray-400">
            <Link to="#" className="hover:text-[#dfff4f] transition">
              Terms
            </Link>
            <Link to="#" className="hover:text-[#dfff4f] transition">
              Privacy
            </Link>
            <Link to="#" className="hover:text-[#dfff4f] transition">
              Help Center
            </Link>
          </div>
        </div>
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white relative">
          <div className="md:hidden mb-6">
            <h2 className="text-[#0F766E] font-bold text-xl">Ziva Healthcare</h2>
          </div>
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#053b32] mb-1 tracking-tight">
              Create Account
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-8">
              Fill in your details to get started.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-4">
                {/* Error msg */}
                {form.formState.errors.root && (
                  <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm font-medium">
                    {form.formState.errors.root.message}
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400">
                            <User className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <Input
                            placeholder="Amar Singh"
                            className="h-11 bg-gray-50 border-gray-200 rounded-lg pl-10 focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400">
                            <Mail className="w-4 h-4" strokeWidth={1.5} />
                          </div>
                          <Input
                            type="email"
                            placeholder="amar@ziva.com"
                            className="h-11 bg-gray-50 border-gray-200 rounded-lg pl-10 focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium text-sm">
                        Mobile No <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400">
                            <Phone className="w-4 h-4" strokeWidth={1.5} />
                          </div>
                          <Input
                            placeholder="9876543210"
                            maxLength={10}
                            className="h-11 bg-gray-50 border-gray-200 rounded-lg pl-10 focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium text-sm">Password <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            className="h-11 bg-gray-50 border-gray-200 rounded-lg focus-visible:ring-[#0F766E]"
                            {...field}
                          />
                          <Button
                            type='button'
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-[#053b32]"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
                {/* submit btn */}
                <Button type="submit" disabled={loading} className="w-full h-12 text-base bg-[#0F766E] hover:bg-[#053b32] text-white rounded-lg mt-6 transition-colors shadow-md">
                  {loading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin"/>
                  ): null}
                  Create Account
                </Button>

                <p className="text-center text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-[#0F766E] hover:underline"
                  >
                    Sign in here
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

export default SignupPage;
