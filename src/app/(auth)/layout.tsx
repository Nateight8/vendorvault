export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full w-full flex items-center p-3 gap-2">
        {children}
        <div className="flex-1 border h-full bg-muted rounded-md"></div>
      </div>
    </>
  );
}
