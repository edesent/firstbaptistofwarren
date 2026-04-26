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

          {/* Upcoming Events — Google Calendar embed */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-sky-900">Upcoming Events</h2>
            <a
              href="https://calendar.google.com/calendar/u/0/r?cid=fbcwmich@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add to Your Calendar
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-lg bg-white">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FDetroit&src=ZmJjd21pY2hAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
              width="100%"
              height="700"
              style={{ border: 0 }}
              frameBorder="0"
              scrolling="no"
              title="First Baptist Church of Warren Calendar"
            />
          </div>
          <p className="text-slate-500 text-sm mt-4 text-center">
            Click the &ldquo;Add to Your Calendar&rdquo; button above to subscribe and
            see our events alongside your own.
          </p>
        </div>
      </section>
    </>
  );
}
