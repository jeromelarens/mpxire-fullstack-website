import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";

export default function Portfolio() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Our Work"
          subtitle="Some of the projects we have delivered"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border p-6 rounded">
            <h3 className="font-semibold">Business Website</h3>
            <p className="text-sm mt-2">
              Professional website for a local business.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold">E-commerce Platform</h3>
            <p className="text-sm mt-2">
              Online store with payment integration.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold">Marketing Campaign</h3>
            <p className="text-sm mt-2">
              Lead generation campaign for a startup.
            </p>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}