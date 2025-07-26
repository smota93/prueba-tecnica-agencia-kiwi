import Image from "next/image";

import LoginForm from "@/app/ui/login-form"

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2 flex justify-center">
          <LoginForm />
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            className="w-full max-h-[95vh] object-cover rounded-2xl mr-6"
            src="/login-art.png"
            alt="login art"
            width={800}
            height={1200}
            priority
          />
        </div>
      </div>
    </>
  )
}