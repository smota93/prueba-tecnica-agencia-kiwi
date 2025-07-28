"use client"

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { lusitana } from '@/app/ui/fonts';

import { Input } from './input';
import { Button } from './button';
import { login } from '../lib/data';
import { LoginData } from '../lib/definitions';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData);
      console.log('Login successful');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
  };

  const handleFacebookLogin = () => {
    setFacebookLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between h-screen md:py-6 px-6">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <div className="w-full md:mt-15">
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.password}
                  onChange={handleInputChange}
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

            {/* Error Notification */}
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <p className="text-sm">{error}</p>
              </div>
            )}
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full bg-cyan-950 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>

            <div className="flex h-4 items-end space-x-1">
              {/* Add form errors here */}
            </div>
          </div>
        </div>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex flex-row md:flex-col gap-3">
        <Button
          className="w-full text-black bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleGoogleLogin}
          disabled={googleLoading || facebookLoading}
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="ml-3 hidden md:inline">{googleLoading ? 'Signing in...' : 'Continue with '}</span>
          <span className="ml-3 md:ml-1">{googleLoading ? '' : 'Google'}</span>
        </Button>
        <Button
          className="w-full text-black bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleFacebookLogin}
          disabled={googleLoading || facebookLoading}
        >
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
          <span className="ml-3 hidden md:inline">{facebookLoading ? 'Signing in...' : 'Continue with '}</span>
          <span className="ml-3 md:ml-1">{facebookLoading ? '' : 'Facebook'}</span>
        </Button>
      </div>

      {/* Sign Up */}
      <div className="flex justify-center mt-2">
        <span>Don't you have an account?
          <a href="#" className="ml-1 text-blue-600 hover:text-blue-800">
            Sign up
          </a>
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-center pb-5 md:pb-0">
        <span className="text-sm text-gray-400">© 2023 ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}