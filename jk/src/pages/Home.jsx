import { Link } from "react-router-dom";

import heroImg from "../assets/hero.png";
import webImg from "../assets/web.png";
import marketingImg from "../assets/marketing.png";
import growthImg from "../assets/growth.png";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block mb-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
              Digital Growth Partner
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Build Websites & Marketing Systems That Bring Customers
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              MPXIRE helps small and medium businesses grow online with
              professional websites, branding, and result-driven promotion.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-yellow-300"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-gray-900"
              >
                Our Works
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Digital Growth"
              className="w-3/4  rounded-full shadow-2xl translate-x-50 "
            />
            <div className="absolute inset-0 bg-gradient-to-brfrom-black/60 to-transparent rounded-xl"></div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need to build trust, visibility, and sales online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {/* Service Card */}
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img
                src={webImg}
                alt="Web Development"
                className="h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Website & App Development
              </h3>
              <p className="mt-4 text-gray-600">
                Fast, secure, and conversion-focused websites built
                to support real business goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img
                src={marketingImg}
                alt="Digital Marketing"
                className="h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Digital Marketing & Promotion
              </h3>
              <p className="mt-4 text-gray-600">
                SEO, ads, and content strategies that generate leads
                instead of empty engagement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <img
                src={growthImg}
                alt="Business Growth"
                className="h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Growth & Support
              </h3>
              <p className="mt-4 text-gray-600">
                Continuous improvement, optimization, and support
                to scale your digital presence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY MPXIRE ================= */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose MPXIRE
            </h2>
            <p className="mt-4 text-gray-600">
              We don't overpromise. We build systems that work and
              support businesses long-term.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Clear communication (no tech confusion)</li>
              <li>✔ Business-first approach</li>
              <li>✔ Reliable delivery & support</li>
              <li>✔ Honest pricing & timelines</li>
            </ul>
          </div>

          <div className="bg-yellow-400 rounded-2xl p-10 text-gray-900">
            <h3 className="text-2xl font-bold">
              Let’s Build Something Powerful
            </h3>
            <p className="mt-4">
              Whether you’re starting or scaling, MPXIRE helps you
              move forward with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-gray-900 text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800"
            >
              Talk to Us
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}