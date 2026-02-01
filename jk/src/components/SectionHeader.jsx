export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}