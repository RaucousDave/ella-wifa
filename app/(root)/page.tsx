import FadeIn from "@/app/components/FadeIn";
import PageWrapper from "@/app/components/PageWrapper";
import Link from "next/link"

import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex justify-center flex-col gap-5 items-center h-[80vh] md:h-[90vh]">
        <h1 className="font-heading text-5xl text-center md:text-7xl text-primary-light font-medium">
          Immanuella Wifa
        </h1>
        <p className="font-body tracking-tight md:text-lg mb-8 text-gray-300">
          Design That Speaks. Brands That Stick
        </p>
          <div className={"flex justify-between transition ease-linear gap-8 items-center tracking-tighter leading-relaxed font-body"}>
              <Link
                  href="/gallery"
                  className="bg-primary-light hover:bg-primary-dark text-background px-6 py-3 rounded"
              >
                  Check Out My Work
              </Link>
              <a
                  href="/cv/Immanuella%20Wifa%20CV.pdf"
                  download
                  className="bg-background hover:bg-primary-dark text-gray-300 border border-primary-dark px-6 py-3 rounded"
              >
                  Download CV
              </a>
          </div>
      </section>

      <section>
        <h1 className="text-4xl font-heading text-primary-light text-center font-medium">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row py-12 px-6 gap-8 items-center">
          {/* IMAGE SIDE */}
          <div className="w-full md:w-[170%] flex justify-center">
            <FadeIn delay={0}>
              <div className="md:max-w-[500px] w-full h-[500px] rounded-3xl overflow-hidden shadow-lilac">
                <Image
                  src="/assets/Immanuella.JPG"
                  alt="Immanuella Wifa"
                  loading="lazy"
                  className="object-cover rounded-3xl"
                  width={500}
                  height={500}
                />
              </div>
            </FadeIn>
          </div>
          {/* TEXT SIDE */}
          <FadeIn delay={1.0}>
            <div className="text-gray-300 flex sm:inline flex-col justify-center items-center md:w-[50%] font-body md:text-lg tracking-tighter leading-relaxed">
              <p className="mb-8 text-center sm:text-left">
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
                href="/contact"
                className="bg-primary-light hover:bg-primary-dark text-background px-6 py-3 rounded"
              >
                Let's have a chat
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
