export default function Backdrop({ children, className="" }) {
  return (
    <div
      className={`bg-white backdrop-blur-md rounded-lg drop-shadow-lg ${className}`}
      style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.07), inset 0 1px 3px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </div>
  );
}
