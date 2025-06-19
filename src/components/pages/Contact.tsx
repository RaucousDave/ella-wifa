import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import PageWrapper from "../PageWrapper";
import FadeIn from "../FadeIn";
import { FaLinkedin, FaWhatsapp, FaBehance, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_1wstjn5",
        "template_h9gf33n",
        form.current,
        {
          publicKey: "ntvE_cBVepoVp-dqq",
        }
      );

      toast.success("Message sent successfully!");
      form.current.reset(); // Optional: clears the form
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="h-[30vh] bg-primary-light flex justify-center items-center">
        <h1 className="text-background font-heading text-5xl tracking-tight">
          Contact Me
        </h1>
      </section>

      <section className="bg-background text-foreground py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-surface px-6 rounded-lg py-6 font-body"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block tracking-tight text-sm text-primary-light mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md bg-background border border-primary-light placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-primary-light mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-background border border-primary-light placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-primary-light mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project"
                className="w-full px-4 py-2 rounded-md bg-background border border-primary-light placeholder:text-gray-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } bg-primary-light text-background px-6 py-3 rounded-full tracking-tight font-body hover:bg-lilac transition`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Socials */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <FadeIn>
              <h2 className="text-3xl text-primary-light mb-2">
                Let's connect
              </h2>
              <p className="text-base text-gray-400 max-w-md mx-auto md:mx-0">
                Whether it’s a question, a collaboration, or a brand idea — I'm
                just a message away.
              </p>
            </FadeIn>
            <div className="flex justify-center md:justify-start gap-6 text-primary-light text-2xl">
              <a
                href="https://www.linkedin.com/in/immanuella-wifa-22m03"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/2349060321070"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.behance.net/ellawifa/info"
                target="_blank"
                rel="noreferrer"
              >
                <FaBehance />
              </a>
              <a
                href="https://www.facebook.com/share/15g6BnyAv1"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
