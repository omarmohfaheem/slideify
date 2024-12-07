import type { Metadata } from "next";
import SignInForm from "@/components/auth/sign-in-form";

export const metadata = {
  title: "Sign In | Slideify",
} satisfies Metadata;

export default function Page() {
  return <SignInForm />;
}
