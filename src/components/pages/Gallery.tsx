import PageWrapper from "../PageWrapper";

export default function Gallery() {
  return (
    <PageWrapper>
      <section className="bg-primary-light h-[30vh] flex justify-center items-center">
        <h1 className="font-heading tracking-tight text-5xl text-center">
          My Work
        </h1>
      </section>
      <main className=" px-6 py-8">
        <p className="font-body text-primary-light tracking-tighter text-lg text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          deleniti earum excepturi recusandae, distinctio quibusdam quo cum
          neque error mollitia voluptatum possimus molestias fuga? Nihil culpa
          unde rem commodi eligendi?
        </p>
      </main>
    </PageWrapper>
  );
}
