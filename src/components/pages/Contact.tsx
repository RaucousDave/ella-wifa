import PageWrapper from "../PageWrapper";
import FadeIn from "../FadeIn";
import { FaLinkedin, FaWhatsapp, FaBehance, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="h-[30vh] bg-lilac-dark flex justify-center items-center">
        <h1 className="text-background font-sentient text-5xl tracking-tighter">
          Contact Me
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background text-foreground py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form
            className="space-y-6 bg-surface px-6 rounded-lg py-6 font-heading"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent ✨ (Not really, setup backend later)");
            }}
          >
            <div>
              <label className="block tracking-tight text-sm font-heading text-lilac mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-background border border-lilac-dark text-lilac-dark placeholder:text-lilac-dark focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-heading tracking-tight text-lilac mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-background px-4 py-2 rounded-md border border-lilac-dark text-lilac-dark placeholder:text-lilac-dark focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-heading text-lilac-dark tracking-tight mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md border border-lilac-dark bg-background placeholder:text-lilac-dark focus:outline-none"
                placeholder="Tell me about your project"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lilac-dark text-background px-6 py-3 rounded-full tracking-tight font-heading hover:bg-lilac transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <FadeIn>
              <h2 className="text-2xl font-sentient tracking-tighter text-lilac-dark">
                Let's connect
              </h2>
              <p className="font-heading text-sm tracking-tight text-gray-400 max-w-md mx-auto md:mx-0">
                Whether it's a question, a collaboration, or a brand idea — I'm
                just a message away.
              </p>
            </FadeIn>
            <div className="flex justify-center md:justify-start gap-6 text-lilac-dark text-xl">
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
