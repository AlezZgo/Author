import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch with me for project inquiries, job opportunities, or just to say hello.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 