import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function InMemory() {
  return (
    <>
      <PageHero
        title="In Memory"
        subtitle="Honoring those who faithfully served"
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Placeholder photo */}
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 shadow-xl">
              <Image
                src="/images/pastor-tim.webp"
                alt="Dr. Timothy Parrish"
                width={384}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-sky-900 mb-2">
              Dr. Timothy Parrish
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto my-6 rounded-full" />

            <div className="text-slate-600 text-lg leading-relaxed space-y-4 text-left">
              <p>
                Dr. Timothy Parrish faithfully served the Lord and the
                congregation of First Baptist Church of Warren. His dedication
                to the ministry and love for God&apos;s Word left a lasting
                impact on all who knew him.
              </p>
              <p>
                We honor his memory and the legacy of faithful service he left
                behind. His commitment to the Gospel and to the people of this
                church will never be forgotten.
              </p>
              <p className="text-center italic text-sky-700 text-xl mt-8">
                &ldquo;Well done, thou good and faithful servant.&rdquo;
                <br />
                <span className="text-base text-sky-500">
                  — Matthew 25:21
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
