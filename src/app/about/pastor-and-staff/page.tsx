import PageHero from "@/components/PageHero";
import Image from "next/image";

const pastor = {
  name: "Pastor Jason Hamilton",
  role: "Pastor",
  email: "pastor@fbcwmich.org",
  photo: "/images/jason-hamilton.jpg",
  bio: "Pastor Hamilton initially served as Assistant Pastor of the First Baptist Church from 2010-2019, and was voted in as Head Pastor in September of 2019. Pastor Hamilton has also volunteered with the Rock of Ages Prison Ministry since 2014. Pastor Hamilton holds a Bachelor's of Religious Education from Midwestern Baptist College.",
};

const staff = [
  {
    name: "Bro. Aaron Buczek",
    role: "Director of Vocal Music",
    email: "music@fbcwmich.org",
    photo: "/images/aaron-buczek.jpg",
    since: "Member since 2009",
    bio: "Brother Aaron has been attending the First Baptist Church since 2009, and was appointed Director of Vocal Music by Pastor Parrish in 2011. In addition to directing the choir and various other vocal groups at FBC, Bro. Aaron plays bass and a variety of other instruments during Sunday worship, and also teaches Middle School Band.",
  },
  {
    name: "Sis. Diana Hamilton",
    role: "Director of Instrumental Music",
    email: null,
    photo: "/images/diana-hamilton.jpg",
    since: "Member since 2002",
    bio: "Sister Diana currently serves as the Director of Instrumental Music at FBC, and plays piano at church services. Sis. Diana also has a passion for decorating and gardening, among other things, and is often seen working projects at the church. Sis. Diana has been attending FBC with her family faithfully since 2002.",
  },
  {
    name: "Bro. Bill Proulx",
    role: "Church Treasurer",
    email: "treasurer@fbcwmich.org",
    photo: "/images/bill-proulx.jpg",
    since: "Member since 2010",
    bio: "Bro. Bill currently serves as the FBC Treasurer, a position he has held since March of 2021. In addition to his duties as treasurer, he has been singing tenor in the church choir and playing special music on the piano regularly since he started attending in 2010.",
  },
  {
    name: "Sis. Sherry Dusik",
    role: "Church Secretary",
    email: null,
    photo: "/images/sherry-dusik.jpg",
    since: "Member since 2024",
    bio: "Sister Sherry first started attending the First Baptist Church in 2024, and was appointed Church Secretary by Pastor Hamilton in November of 2025.",
  },
  {
    name: "Sis. Jennifer Tracy",
    role: "Social Media Ministry Director",
    email: null,
    photo: "/images/jennifer-tracy.jpg",
    since: "Active member since 2019",
    bio: "Sis. Jennifer currently serves as Director of the Social Media Ministry, running our livestream for services and editing videos on YouTube, and also edits the church bulletin. Sis. Jennifer has been an active member since moving back to Michigan in 2019, having attended previously with her family for many years.",
  },
  {
    name: "Bro. Paul & Sis. Dolores Roman",
    role: "Music Librarian & Trumpet",
    email: null,
    photo: "/images/paul-dolores-roman.jpg",
    since: "Music Librarian since 2021",
    bio: "Sis. Dolores has been serving as Music Librarian and singing alto in the church choir since September of 2021. In addition, her husband Paul can be heard playing his trumpet at FBC, which he has been doing for many years!",
  },
  {
    name: "Bro. Chris & Sis. Tiffany Lemorie",
    role: "Food Ministry Directors",
    email: null,
    photo: "/images/chris-tiffany-lemorie.jpg",
    since: "Food Ministry since 2020",
    bio: "Bro. Chris and Sis. Tiffany Lemorie have been directors of the FBC Food Ministry since 2020, preparing delicious meals for our church fellowships and other special events. In addition to cooking, the Lemories have been singing in the church choir since 2016.",
  },
  {
    name: "Sis. Rhonda Edgil",
    role: "Hospitality Ministry Chair",
    email: null,
    photo: "/images/rhonda-edgil.jpg",
    since: "Member since 2022",
    bio: "Sis. Rhonda first started attending the First Baptist Church in 2022, and was appointed chair of the Hospitality Ministry by Pastor Hamilton in 2025.",
  },
];

function MailIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function PastorAndStaff() {
  return (
    <>
      <PageHero
        title="Pastor & Staff"
        subtitle="Meet the team serving our church family"
      />

      {/* Pastor — Featured */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                  <Image
                    src={pastor.photo}
                    alt={pastor.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-sky-600 text-white rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
                  <div className="text-xs uppercase tracking-wider text-sky-200">
                    Serving Since
                  </div>
                  <div className="text-2xl font-bold">2010</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
                Our Pastor
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-3">
                {pastor.name}
              </h2>
              <p className="text-xl text-sky-700 font-medium mb-6">
                {pastor.role}
              </p>
              <div className="w-16 h-1 bg-sky-500 rounded-full mb-6" />
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                {pastor.bio}
              </p>
              <a
                href={`mailto:${pastor.email}`}
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
              >
                <MailIcon />
                {pastor.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Serving Together
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              Our Ministry Team
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staff.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/2 aspect-[4/5] sm:aspect-auto relative overflow-hidden bg-sky-50">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={600}
                      height={750}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="sm:w-1/2 p-6 flex flex-col">
                    <h3 className="font-bold text-sky-900 text-xl mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 mb-4 self-start bg-sky-50 px-2.5 py-1 rounded-full">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {member.since}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {member.bio}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-medium mt-4"
                      >
                        <MailIcon />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call-to-action */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-lg italic mb-2">
            &ldquo;And he gave some, apostles; and some, prophets; and some,
            evangelists; and some, pastors and teachers; for the perfecting of
            the saints, for the work of the ministry, for the edifying of the
            body of Christ.&rdquo;
          </p>
          <p className="text-sky-600 font-semibold">Ephesians 4:11-12</p>
        </div>
      </section>
    </>
  );
}
