"use client";

import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";
import akgImage from "@/assets/akg-enhanced.png";
import Head from "next/head";

/* export const metadata: Metadata = {
  title: "Login",
}; */

//const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function Page() {
/*  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark as mounted to indicate it's running on the client side
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  if (!mounted) return null; // Return null during SSR */
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">
            Login to Project Media
          </h1>
          <div className="space-y-5">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <LoginForm />
            <Link href="/signup" className="block text-center hover:underline">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <Image
          src{akgImage}
          width={350}
          height={350}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
