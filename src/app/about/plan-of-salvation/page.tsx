import PageHero from "@/components/PageHero";

const steps = [
  {
    question: "Who Is Good?",
    verse:
      '"There is none righteous, no, not one."',
    reference: "Romans 3:10",
  },
  {
    question: "Who Has Sinned?",
    verse:
      '"For all have sinned, and come short of the glory of God."',
    reference: "Romans 3:23",
  },
  {
    question: "Where Did Sin Come From?",
    verse:
      "Sin entered the world through one man and spread universally.",
    reference: "Romans 5:12",
  },
  {
    question: "God's Price on Sin",
    verse: '"The wages of sin is death."',
    reference: "Romans 6:23",
  },
  {
    question: "God's Answer for Sin",
    verse:
      '"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."',
    reference: "Romans 5:8",
  },
];

export default function PlanOfSalvation() {
  return (
    <>
      <PageHero
        title="Plan of Salvation"
        subtitle="God's gift of eternal life through Jesus Christ"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, i) => (
              <div key={step.question} className="relative pl-16">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-sky-200" />
                )}
                <div className="absolute left-0 w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="font-bold text-sky-900 text-xl mb-3">
                    {step.question}
                  </h3>
                  <blockquote className="text-slate-700 text-lg italic mb-2">
                    {step.verse}
                  </blockquote>
                  <p className="text-sky-600 font-semibold">{step.reference}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How to be saved */}
          <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How to Receive Salvation
            </h2>
            <blockquote className="text-xl text-sky-100 italic mb-4 max-w-3xl mx-auto leading-relaxed">
              &ldquo;If thou shalt confess with thy mouth the Lord Jesus, and
              shalt believe in thine heart that God hath raised him from the
              dead, thou shalt be saved.&rdquo;
            </blockquote>
            <p className="text-sky-200 font-semibold text-lg mb-8">
              Romans 10:9
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 max-w-2xl mx-auto border border-white/20">
              <h3 className="font-bold text-xl mb-4">A Simple Prayer</h3>
              <p className="text-sky-100 leading-relaxed italic">
                &ldquo;Dear God, I know I am a sinner. I believe Jesus died on
                the cross for my sins and rose again. I ask you to forgive me of
                my sins and come into my heart. I accept Jesus Christ as my
                personal Lord and Savior. Thank you for saving me. In Jesus&apos;
                name, Amen.&rdquo;
              </p>
            </div>
            <p className="mt-8 text-sky-200">
              &ldquo;For whosoever shall call upon the name of the Lord shall be
              saved.&rdquo; — <span className="font-semibold">Romans 10:13</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
