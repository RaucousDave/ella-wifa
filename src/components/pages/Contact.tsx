import PageWrapper from "../PageWrapper";
import FadeIn from "../FadeIn";
import { FaLinkedin, FaWhatsapp, FaBehance, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="h-[30vh] bg-primary-light flex justify-center items-center">
        <h1 className="text-background font-heading text-5xl tracking-tight">
          Contact Me
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background  text-foreground py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form
            className="space-y-6 bg-surface px-6 rounded-lg py-6 font-body"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent ✨ (Not really, setup backend later)");
            }}
          >
            <div>
              <label className="block tracking-tight text-sm font-body text-primary-light mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-background border border-primary-light  placeholder:text-gray-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-body tracking-tight text-primary-light mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-background px-4 py-2 rounded-md border border-primary-light text-gray-400 placeholder:text-gray-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-body text-primary-light tracking-tight mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md border border-primary-light bg-background placeholder:text-gray-400 focus:outline-none"
                placeholder="Tell me about your project"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-light text-background px-6 py-3 rounded-full tracking-tight font-body hover:bg-lilac transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <FadeIn>
              <h2 className="text-2xl font-body tracking-tighter text-primary-light">
                Let's connect
              </h2>
              <p className="font-body text-sm tracking-tight text-gray-400 max-w-md mx-auto md:mx-0">
                Whether it's a question, a collaboration, or a brand idea — I'm
                just a message away.
              </p>
            </FadeIn>
            <div className="flex justify-center md:justify-start gap-6 text-primary-light text-xl">
              <a
                href="https://www.linkedin.com/in/immanuella-wifa-22m03"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/2349060321070"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.behance.net/loliawifa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac transition"
              >
                <FaBehance />
              </a>
              <a
                href="https://www.facebook.com/share/15g6BnyAv1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac transition"
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
