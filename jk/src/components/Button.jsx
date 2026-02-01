export default function Button(props) {
  const { text, variant = "primary", onClick } = props;

  const baseClass = "px-6 py-3 rounded-md font-medium border";

  const variants = {
    primary: "bg-gray-900 text-white border-gray-900 hover:bg-gray-800",
    outline:
      "bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${variants[variant] || variants.primary}`}
    >
      {text}
    </button>
  );
}