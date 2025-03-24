import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Dahsboard</p>
      <p>This is an authenticated route</p>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
