const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-500",
    secondary:
      "bg-amber-100 hover:bg-amber-200 text-amber-800 focus:ring-amber-300",
    outline:
      "border border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-500",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${
        sizes[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
