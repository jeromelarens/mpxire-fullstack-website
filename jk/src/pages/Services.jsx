export default function Services() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-gray-900 px-6 py-16">

      {/* ===== OUR SERVICES ===== */}
      <section className="max-w-6xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl mt-5 font-extrabold text-center underline underline-offset-8">
          Our Services
        </h1>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Social Media Marketing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Social Media Marketing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Instagram Account Handling</li>
              <li>Content Planning & Posting</li>
              <li>Engagement Strategy</li>
            </ul>
          </div>

          {/* Creative & Branding */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-orange-400">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Creative & Branding
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Logo Design (One Time)</li>
              <li>Poster & Creative Design</li>
              <li>Brand Identity Setup</li>
            </ul>
          </div>

          {/* Video & Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-indigo-400">
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">
              Video & Content
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Reel Editing & Vlog</li>
              <li>Content Writing (Caption & Script)</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-green-400">
            <h2 className="text-2xl font-bold text-green-500 mb-4">
              Web Development & App Development
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Custom website design and development based on business needs
              </li>
              <li>
                Design and develop a high-performance mobile application that is secure, scalable, and user-friendly, aligned with the client's business objectives.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== SERVICE CHARGES ===== */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-center underline underline-offset-8 mb-12">
          Service Charges
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between">
              <span>Single Reel Editing</span>
              <span className="font-semibold">₹500</span>
            </li>
            <li className="flex justify-between">
              <span>Single Reel Editing + Shoot</span>
              <span className="font-semibold">₹800</span>
            </li>
            <li className="flex justify-between">
              <span>YouTube Video Editing</span>
              <span className="font-semibold">₹1300</span>
            </li>
            <li className="flex justify-between">
              <span>Single Poster Design</span>
              <span className="font-semibold">₹150</span>
            </li>
            <li className="flex justify-between">
              <span>Single Carousel Design</span>
              <span className="font-semibold">₹200 – ₹250</span>
            </li>
            <p className="text-sm text-gray-500">
              (Based on work complexity and number of pages)
            </p>
            <li className="flex justify-between">
              <span>Single Content Script (Short Video)</span>
              <span className="font-semibold">₹200</span>
            </li>
            <li className="flex justify-between">
              <span>Single Content Script (Long Video)</span>
              <span className="font-semibold">₹250</span>
            </li>
            <li className="flex justify-between">
              <span>Single Logo Design</span>
              <span className="font-semibold">₹300 – ₹500</span>
            </li>
            <p className="text-sm text-gray-500">
              (Based on logo type and requirements)
            </p>
          </ul>
        </div>
      </section>

      {/* ===== MONTHLY PACKAGE ===== */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center underline underline-offset-8 mb-12">
          Monthly Package
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <p className="text-lg font-semibold mb-2">
              15 Videos + 15 Posters Package
            </p>
            <p className="text-3xl font-extrabold text-gray-900">₹13,000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <p className="text-lg font-semibold mb-2">
              15 Videos + 15 Posters + Account Handling
            </p>
            <p className="text-3xl font-extrabold text-gray-900">₹15,000</p>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-700 font-semibold">
          👉 The amount is <span className="font-bold">non-negotiable</span>.
        </p>
      </section>

    </main>
  );
}