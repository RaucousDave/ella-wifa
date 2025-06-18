import PageWrapper from "../PageWrapper";
import FadeIn from "../FadeIn";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Identity Design",
    description:
      "Complete visual systems crafted for clarity and emotional connection — including logo, colors, fonts, and guidelines.",
  },
  {
    title: "Logo Design",
    description:
      "Timeless, flexible, and brand-aligned logos that scale beautifully across all platforms.",
  },
  {
    title: "Flyer & Poster Design",
    description:
      "Striking visuals that tell your story at a glance — perfect for promotions, events, and digital campaigns.",
  },
  {
    title: "Social Media Branding",
    description:
      "Branded templates and assets designed for consistency, scroll-stopping visuals, and elevated digital presence.",
  },
];

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="h-[30vh] bg-primary-light flex justify-center items-center">
        <h1 className="text-background font-heading text-5xl tracking-tight ">
          What I Do
        </h1>
      </section>

      {/* Services Grid */}
      <section className="bg-background text-background py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-primary-light p-6 rounded-xl hover:bg-background shadow-lilac hover:text-primary-light transition"
            >
              <h3 className="font-heading text-center sm:text-left tracking-tight text-2xl mb-3">
                {service.title}
              </h3>
              <p className="font-body tracking-tight text-center sm:text-left text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Offers Section */}
      <section className="bg-background text-foreground px-6 md:px-16 pb-24 text-center">
        <FadeIn>
          <h2 className="font-heading tracking-tight text-3xl text-primary-light mb-3">
            Need something custom?
          </h2>
          <p className="font-body tracking-tight text-primary-light max-w-2xl mx-auto text-sm md:text-lg mb-6">
            Whether it’s a brand audit, content templates, or consultation — I
            can create something unique just for your vision.
          </p>
          <Link
            to="/contact"
            className="bg-primary-light hover:bg-primary-dark text-background px-6 py-3 rounded-full tracking-tight font-body hover:bg-lilac transition"
          >
            Let’s Talk
          </Link>
        </FadeIn>
      </section>
    </PageWrapper>
  );
}
