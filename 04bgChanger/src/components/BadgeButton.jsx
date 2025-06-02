function BadgeButton({ color, setColor }) {
  const label = color.charAt(0).toUpperCase() + color.slice(1);
  const textColor = ["lavender", "white", "yellow"].includes(color)
    ? "black"
    : "white";

  return (
    <button
      className={`outline-none px-4 py-1 rounded-full text-${textColor} shadow-lg`}
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {label}
    </button>
  );
}

export default BadgeButton;
