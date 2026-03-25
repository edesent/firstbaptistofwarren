import PageHero from "@/components/PageHero";

export default function Give() {
  return (
    <>
      <PageHero
        title="Give Online"
        subtitle="Support the ministry of First Baptist Church"
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-slate-600 text-lg leading-relaxed">
              &ldquo;Every man according as he purposeth in his heart, so let
              him give; not grudgingly, or of necessity: for God loveth a
              cheerful giver.&rdquo;
            </p>
            <p className="text-sky-600 font-semibold mt-2">
              II Corinthians 9:7
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-lg">
            <iframe
              src="https://give.tithe.ly/?formId=8085a17b-0363-4ca9-b914-0ad6f2c7f8a4"
              width="100%"
              height="800"
              style={{ border: 0 }}
              title="Give Online - Tithe.ly"
              allow="payment"
            />
          </div>
        </div>
      </section>
    </>
  );
}
