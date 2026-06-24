import ContactForm from "@/composants/forms/contact-form";
import { getMetadata } from "@/libs/metadata";

type ContactPageType = {};

export async function generateStaticParams() {
  return getMetadata("contact");
}

export default function ContactPage({}: ContactPageType) {
  return (
    <main>
      ContactPage <ContactForm />
    </main>
  );
}
