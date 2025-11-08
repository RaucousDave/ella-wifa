import PageWrapper from "@/app/components/PageWrapper";
import Gallery from "@/app/components/Projects";

export default function Page() {
  return (
    <PageWrapper>
      <section className="bg-primary-light h-[30vh] flex justify-center items-center">
        <h1 className="font-heading tracking-tight text-5xl text-center">
          My Work
        </h1>
      </section>

      <main className="px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Gallery />
        </div>
      </main>
    </PageWrapper>
  );
}
