import FadeIn from "../FadeIn";
import PageWrapper from "../PageWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex justify-center flex-col gap-5 items-center h-[80vh] md:h-[90vh]">
        <h1 className="font-sentient text-5xl text-center md:text-7xl text-lilac-dark font-medium tracking-tighter">
          Immanuella Wifa
        </h1>
        <p className="font-heading tracking-tight md:text-lg text-lilac-dark">
          Design That Speaks. Brands That Stick
        </p>
      </section>

      <section>
        <h1 className="text-4xl font-sentient text-lilac-dark text-center font-semibold tracking-tighter">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row py-12 px-6 gap-8 items-center">
          {/* IMAGE SIDE */}
          <div className="w-full md:w-[50%] flex justify-center">
            <div className="md:max-w-[400px] w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/assets/Immanuella.JPG"
                alt="Immanuella Wifa"
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="text-lilac-dark md:w-[50%] font-heading text-lg tracking-tighter leading-relaxed">
            <FadeIn>
              <p className="mb-8">
                I’m a graphic designer who transforms blank spaces into bold
                visuals that connect, convert, and leave a lasting impression.
                Whether it’s branding, digital content, or marketing design, I
                craft visuals that aren’t just beautiful—but built to perform.
                <br />
                <br />
                <strong>Clear. Creative. Compelling.</strong> Every pixel with
                purpose. Let’s turn your vision into scroll-stopping design.
              </p>
              <Link
                to="/gallery"
                className="bg-lilac-dark text-background px-6 py-3 rounded-full"
              >
                Check Out My Work
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
