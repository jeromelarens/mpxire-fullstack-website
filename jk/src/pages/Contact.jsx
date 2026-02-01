import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let’s Build Something Powerful
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you need a website, app, or digital growth strategy — MPXIRE is ready.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT — CONTACT INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold tracking-wide">
                Get in Touch
              </h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                We work with startups and businesses that want real results,
                not just designs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" />
                <span className="text-lg font-medium">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" />
                <span className="text-lg font-medium">mpxire@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" />
                <span className="text-lg font-medium">India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+919876543210"
                className="px-8 py-4 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="px-8 py-4 rounded-full border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}