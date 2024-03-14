export default function OrderPicker({ children, variant = "primary" }) {

  const variants = {
    primary: "bg-green-600 border-green-600 text-white hover:bg-green-800 hover:border-green-800",
    secondary: "bg-transparent text-green-600 border-green-600 border hover:text-green-800 hover:border-green-800",
  };

  return (
    <button
      className={`py-2 px-2 w-1/5 rounded-md font-bold text-sm ${variants[variant]}`}
    >
      {children}
    </button>
  );
}