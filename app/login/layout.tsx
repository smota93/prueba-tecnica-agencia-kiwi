export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}