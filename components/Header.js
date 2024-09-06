export default function Header() {
  return (
    <div className="fixed top-0  w-full">
      <p className="text-center text-[#D4D4D4] p-2 md:p-3 bg-[#222222]">
        Aatif's Portfolio - Visual Studio Code
      </p>
      <p className="p-1 bg-[#2C2C2C]">
        <ul className="flex gap-2 md:gap-3 text-[#D4D4D4] text-sm">
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </p>
    </div>
  );
}
