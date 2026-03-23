import PageHero from "@/components/PageHero";

const beliefs = [
  {
    title: "Biblical Authority",
    text: "We believe the whole Bible from Genesis 1:1 to Revelation 22:21 as the verbally inspired and infallible Word of God.",
  },
  {
    title: "The Incarnation",
    text: "We believe that Jesus was born of the Virgin Mary and represents both God's Son and God in human form.",
  },
  {
    title: "The Atonement",
    text: "We believe that Christ's sacrificial death satisfied divine justice for humanity's transgressions.",
  },
  {
    title: "The Resurrection",
    text: "We believe that Jesus physically rose on the third day after crucifixion.",
  },
  {
    title: "Christ's Intercession",
    text: "We believe that Jesus alone serves as the ultimate high priest without need for human mediators.",
  },
  {
    title: "The Second Coming",
    text: "We believe that Christ will return bodily to rapture believers before tribulation, then establish a thousand-year earthly kingdom.",
  },
  {
    title: "Spiritual Rebirth",
    text: "We believe that salvation requires personal spiritual transformation through faith.",
  },
  {
    title: "Baptism",
    text: "We believe that believers should practice water immersion baptism as a public declaration symbolizing Christ's death, burial, and resurrection.",
  },
  {
    title: "The Church's Mission",
    text: "We believe the congregation's primary purpose involves evangelizing individuals and teaching biblical obedience.",
  },
];

export default function StatementOfFaith() {
  return (
    <>
      <PageHero
        title="Statement of Faith"
        subtitle="The core beliefs that guide our church"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {beliefs.map((belief, i) => (
              <div
                key={belief.title}
                className="flex gap-6 p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-lg shadow-md">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-sky-900 text-xl mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {belief.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
