import PageHero from "@/components/PageHero";
import Image from "next/image";

const staff = [
  {
    name: "Pastor Jason Hamilton",
    role: "Pastor",
    email: "pastor@fbcwmich.org",
    photo: "/images/pastor-hamilton.webp",
    bio: "Pastor Jason Hamilton leads our congregation with a heart for God's Word and a passion for reaching the lost with the Gospel.",
  },
  {
    name: "Aaron Buczek",
    role: "Director of Vocal Music",
    email: "music@fbcwmich.org",
    photo: "/images/aaron-buczek.webp",
    bio: "Aaron conducts the Chorus and sings baritone with the Men's Ensemble. He teaches middle school band in Plymouth and has attended the church since spring 2009.",
  },
  {
    name: "Mrs. Diana Hamilton",
    role: "Director of Instrumental Music",
    email: null,
    photo: "/images/diana-hamilton.webp",
    bio: "Diana provides piano accompaniment for Sunday and Wednesday services. She has been a faithful member since 2002.",
  },
  {
    name: "Bill Proulx",
    role: "Treasurer",
    email: "treasurer@fbcwmich.org",
    photo: "/images/bill-proulx.webp",
    bio: "Bill faithfully serves our congregation by managing the church's financial stewardship.",
  },
];

export default function PastorAndStaff() {
  return (
    <>
      <PageHero
        title="Pastor & Staff"
        subtitle="Meet the team serving our church family"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staff.map((member) => (
              <div
                key={member.name}
                className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 shadow-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sky-900 text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-medium"
                  >
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
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
