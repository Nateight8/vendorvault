import SignupForm from "./components/sign-up-form";

export default function Home() {
  return (
    <div className="w-full flex items-center max-w-md h-full bg-muted p-8 text-foreground border rounded-md">
      <SignupForm />
    </div>
  );
}
