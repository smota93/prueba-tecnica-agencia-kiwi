import Image from "next/image";

import LoginForm from "@/app/ui/login-form"

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        <div className="w-full flex justify-center order-2 md:w-1/2 md:order-1">
          <LoginForm />
        </div>
        <div className="w-full flex justify-center order-1 md:w-1/2 md:order-2 md:mb-0">
          <Image
            className="w-full h-[200px] md:h-auto md:max-h-[95vh] object-cover rounded-2xl m-4 md:mr-6"
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