import { useState } from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import aboutImg from "../assets/about-illustration.png";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const team = [
    {
      name: "Munish Kumar",
      role: "Founder",
      title: "Full Stack Developer",
      img: team2,
      whatsapp: "https://wa.me/919361224959",
      about:
        "Builds scalable full-stack systems with a strong focus on performance, clean architecture, and long-term maintainability.",
      glow: "from-orange-400 to-yellow-300",
      ring: "ring-orange-400",
    },
    {
      name: "Member Two",
      role: "Co-Founder",
      title: "Network Security Engineer",
      img: team1,
      whatsapp: "https://wa.me/911234567891",
      about:
        "Specializes in secure infrastructure, penetration testing, and hardened network architectures for modern businesses.",
      glow: "from-blue-400 to-cyan-300",
      ring: "ring-cyan-400",
    },
    {
      name: "Member Three",
      role: "Co-Founder",
      title: "Data Analyst",
      img: team3,
      whatsapp: "https://wa.me/911234567892",
      about:
        "Transforms raw data into actionable insights, dashboards, and business intelligence that actually drives decisions.",
      glow: "from-purple-400 to-pink-300",
      ring: "ring-pink-400",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-gray-900 font-inter">

      {/* ================= HERO ================= */}
      <section className=" bg-linear-to-br from-slate-900 via-black to-slate-900 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-linear-to-r from-orange-400 to-yellow-300 text-black font-semibold">
              Who We Are
            </span>

            <h1 className="text-4xl md:text-5xl font-syne font-extrabold leading-tight">
              Engineers Who Build <br /> Real Business Systems
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              MPXIRE is a technology-first company focused on secure systems,
              scalable products, and measurable growth.
            </p>

            <p className="mt-4 text-gray-400">
              No buzzwords. No shortcuts.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-orange-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl p-4 rounded-3xl shadow-2xl">
              <img
                src={aboutImg}
                alt="MPXIRE Team"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-syne font-bold">
              Leadership Team
            </h2>
            <p className="text-gray-600 mt-4">
              Every member matters. Every role counts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-10 text-center border bg-white
                transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >

                {/* Glow (DOES NOT BLOCK CLICKS) */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-linear-to-r ${member.glow}
                  opacity-0 group-hover:opacity-15 blur-2xl transition pointer-events-none`}
                />

                {/* Avatar */}
                <div
                  className={`relative w-36 h-36 mx-auto rounded-full overflow-hidden mb-6
                  ring-4 transition ${
                    openIndex === i ? member.ring : "ring-transparent"
                  }`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <h3 className="text-2xl font-bold">{member.name}</h3>

                <p className="uppercase tracking-widest text-sm mt-2 font-semibold text-gray-500">
                  {member.role}
                </p>

                <p className="mt-2 text-gray-600">{member.title}</p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold
                    hover:bg-green-600 hover:scale-105 transition"
                  >
                    WhatsApp
                  </a>

                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="px-5 py-2 rounded-full border font-semibold
                    hover:bg-black hover:text-white transition"
                  >
                    About
                  </button>
                </div>

                {/* About Text */}
                {openIndex === i && (
                  <p className="mt-6 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {member.about}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black py-24 text-center">
        <h2 className="text-4xl font-syne font-bold text-white">
          Ready to Build Something Serious?
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Let’s create secure, scalable systems that actually grow your business.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 bg-linear-to-r from-orange-400 to-yellow-300
          px-14 py-5 rounded-full font-bold text-black hover:scale-105 transition"
        >
          Contact MPXIRE
        </a>
      </section>

      {/* Fonts + Animation */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=Inter:wght@400;500&display=swap');
          .font-syne { font-family: 'Syne', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
        `}
      </style>

    </main>
  );
}
