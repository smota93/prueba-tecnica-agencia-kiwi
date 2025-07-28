import { poppins } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${poppins.className} flex flex-row justify-center items-center leading-none text-black`}
    >
      <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px]"><span className="font-bold">Horizon</span> <span className="font-normal">Free</span></p>
    </div>
  );
}