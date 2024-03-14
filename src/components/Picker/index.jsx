export default function Picker({ label, value, isDisabled, onClick }) {

  
    if (isDisabled) return null;
  
    return (
      <div
        onClick={onClick}
        className={`transition ease-in-out delay-150 rounded-full bg-zinc-800 hover:-translate-y-1 hover:scale-10 hover:bg-zinc-700 duration-300 h-28 w-28 text-white items-center justify-center flex cursor-pointer`}
      >
        <p>{label}</p>
      </div>
    );
  }