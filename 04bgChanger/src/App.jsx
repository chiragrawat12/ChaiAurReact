import { useState } from "react";
import BadgeButton from "./components/BadgeButton";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <BadgeButton color="red" setColor={setColor} />
          <BadgeButton color="blue" setColor={setColor} />
          <BadgeButton color="green" setColor={setColor} />
          <BadgeButton color="olive" setColor={setColor} />
          <BadgeButton color="gray" setColor={setColor} />
          <BadgeButton color="yellow" setColor={setColor} />
          <BadgeButton color="pink" setColor={setColor} />
          <BadgeButton color="purple" setColor={setColor} />
          <BadgeButton color="lavender" setColor={setColor} />
          <BadgeButton color="white" setColor={setColor} />
          <BadgeButton color="black" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
