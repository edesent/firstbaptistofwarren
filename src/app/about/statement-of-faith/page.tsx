import PageHero from "@/components/PageHero";

const beliefs = [
  {
    title: "The Word of God",
    text: 'We believe the whole Bible from Genesis 1:1 to Rev. 22:21 as the verbally inspired and infallible WORD OF GOD.',
    verse: "II Tim. 3:16",
  },
  {
    title: "The Virgin Birth",
    text: "We believe Jesus was born of Mary the Virgin, and is the Son of God and God the Son.",
    verse: "Luke 1:35",
  },
  {
    title: "The Atonement",
    text: "We believe that Christ died for our sins according to the Scriptures, the Just of the unjust that He might bring us to God.",
    verse: "I Pet. 3:18",
  },
  {
    title: "The Resurrection",
    text: "We believe that Christ rose from the grave the third day according to the Scriptures.",
    verse: "I Cor. 15:3-4",
  },
  {
    title: "Christ's Intercession",
    text: "We believe that He only, is the great High Priest, and we need not the intercession of any man, but that Christ ever liveth to make intercession for us.",
    verse: "Heb. 7:25",
  },
  {
    title: "The Second Coming",
    text: "We believe that Christ will come again in person, to rapture all believers before the Great Tribulation, and shall return in person, bodily, visibly, to establish His Kingdom on the earth for 1000 years.",
    verse: "Acts 1:11",
  },
  {
    title: "The New Birth",
    text: 'We believe that in order to be saved, a person must be born again — "Ye must be born again."',
    verse: "John 3:3-7",
  },
  {
    title: "Baptism",
    text: "We believe that every truly born again person should declare his faith by the act of baptism (immersion in water) setting forth the Lord's death, burial and resurrection.",
    verse: "Acts 2:41",
  },
  {
    title: "The Church's Mission",
    text: 'We believe that the Church is a body of baptized believers whose only mission is, not to "reform the world," but to preach and teach the Gospel of salvation to the individual person, and teach them to "observe all things what-soever I have commanded you."',
    verse: "Matt. 28:18-20",
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
                  <p className="text-sky-600 font-semibold mt-2">
                    {belief.verse}
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
