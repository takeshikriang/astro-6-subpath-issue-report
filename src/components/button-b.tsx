import { handleClick } from "./_handle-click";

export function ButtonB() {
  return (
    <button
      type="button"
      className="border px-4 py-2 rounded cursor-pointer"
      onClick={handleClick}
    >
      Button B
    </button>
  );
}
