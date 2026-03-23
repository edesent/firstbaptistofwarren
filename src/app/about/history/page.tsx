import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function History() {
  return (
    <>
      <PageHero
        title="History & Location"
        subtitle="Our roots in the Warren community"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-slate prose-lg">
                <p className="text-slate-600 leading-relaxed mb-4">
                  First Baptist Church of Warren is located in the Historical
                  District of Warren, Michigan. As an Independent Fundamental
                  Baptist Church, we have been faithfully serving our community
                  and proclaiming the Gospel of Jesus Christ.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our church has been a cornerstone of the Warren community,
                  welcoming families and individuals seeking to grow in their
                  faith and fellowship with like-minded believers.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We continue our mission of evangelizing individuals and
                  teaching biblical obedience, carrying forward the rich
                  tradition of faithful Baptist ministry.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/church-1.jpg"
                  alt="First Baptist Church of Warren building"
                  width={750}
                  height={563}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">
              Our Location
            </h2>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-sky-800 text-lg mb-3">
                    Address
                  </h3>
                  <p className="text-slate-600 text-lg mb-6">
                    31707 7th Street
                    <br />
                    Warren, MI 48092
                  </p>
                  <h3 className="font-semibold text-sky-800 text-lg mb-3">
                    Service Times
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Sunday:</strong> 11:00 AM &amp; 6:30 PM
                    </p>
                    <p>
                      <strong>Wednesday:</strong> 6:30 PM (Bible Study)
                    </p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.5!2d-83.027!3d42.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s31707+7th+St%2C+Warren%2C+MI+48092!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Church Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
