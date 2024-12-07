import type { Metadata } from "next";
import SignUpForm from "@/components/auth/sign-up-form";

export const metadata = {
  title: "Sign Up | Slideify",
} satisfies Metadata;

export default function Page() {
  return <SignUpForm />;
}
