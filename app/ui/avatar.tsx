import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer">
      <Image
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="User avatar"
        width={40}
        height={40}
        className="object-cover"
        priority
      />
    </div>
  );
}