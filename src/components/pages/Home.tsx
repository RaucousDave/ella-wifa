import PageWrapper from "../PageWrapper";
export default function Home() {
  return (
    <PageWrapper>
      <section className="flex justify-center flex-col items-center md:h-screen h-[90vh]">
        <h1 className="font-sentient text-7xl text-lilac-dark font-medium tracking-tighter">
          Immanuella Wifa
        </h1>
        <p className="font-heading tracking-tight text-lg text-lilac-dark"></p>
      </section>
    </PageWrapper>
  );
}
