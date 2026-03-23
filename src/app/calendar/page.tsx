import PageHero from "@/components/PageHero";

const weeklySchedule = [
  {
    day: "Sunday",
    events: [
      { time: "11:00 AM", name: "Morning Worship Service" },
      { time: "6:30 PM", name: "Evening Service" },
    ],
  },
  {
    day: "Wednesday",
    events: [{ time: "6:30 PM", name: "Bible Study" }],
  },
];

export default function Calendar() {
  return (
    <>
      <PageHero
        title="Calendar"
        subtitle="Stay connected with our weekly schedule and upcoming events"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Weekly Schedule */}
          <h2 className="text-2xl font-bold text-sky-900 mb-8">
            Weekly Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {weeklySchedule.map((day) => (
              <div
                key={day.day}
                className="bg-sky-50 rounded-2xl p-6 border border-sky-100"
              >
                <h3 className="font-bold text-sky-800 text-xl mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.events.map((event) => (
                    <div
                      key={event.name}
                      className="flex items-center gap-4 bg-white rounded-lg p-3 border border-sky-100"
                    >
                      <span className="text-sky-600 font-bold text-sm min-w-[80px]">
                        {event.time}
                      </span>
                      <span className="text-slate-700">{event.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events Placeholder */}
          <h2 className="text-2xl font-bold text-sky-900 mb-8">
            Upcoming Events
          </h2>
          <div className="bg-sky-50/50 rounded-2xl p-12 border border-sky-100 text-center">
            <svg
              className="w-16 h-16 text-sky-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-slate-500 text-lg">
              Check back soon for upcoming events and special services!
            </p>
            <p className="text-slate-400 mt-2">
              Follow us on Facebook for the latest updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
