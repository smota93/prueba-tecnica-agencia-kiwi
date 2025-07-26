import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Input } from './input'
import { Button } from './button';
import Image from 'next/image';

export default function LoginForm() {
  return (
    <form className="w-1/2 flex flex-col justify-between h-screen py-8 px-6">
      <div className="flex flex-col items-center">
        <div className="w-full mt-15">
          {/* Welcome message */}
          <h1 className={`${lusitana.className} antialiased mb-3 text-2xl text-left`}>
            Welcome Back 👋
          </h1>
          <p>
            Today is a new day. It's your day. You shape it.
            Sign in to start managing your projects.
          </p>

          {/* Login form */}
          <div>
            <label
              className="mb-3 mt-10 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="At least 8 characters"
                required
                minLength={8}
              />
            </div>
            <div className="flex justify-end mt-5">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>
          </div>
          <Button className="mt-4 w-full bg-cyan-950 text-white">
            Sign In
          </Button>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              className="w-full text-black bg-gray-100"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="ml-3">Continue with Google</span>
            </Button>
            <Button
              className="w-full text-black bg-gray-100"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
              <span className="ml-3">Continue with Facebook</span>
            </Button>
          </div>

          {/* Sign Up */}
          <div className="flex justify-center mt-10">
            <span>Don't you have an account?
              <a href="#" className="ml-1 text-blue-600 hover:text-blue-800">
                Sign up
              </a>
            </span>
          </div>

          <div className="flex h-8 items-end space-x-1">
            {/* Add form errors here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center">
        <span className="text-sm text-gray-400">© 2023 ALL RIGHTS RESERVED</span>
      </div>
    </form>
  );
}