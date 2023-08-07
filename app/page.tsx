import Image from "next/image";
import CutePic from "./assets/1691062266943130.jpg";

const App = () => (
  <main className="flex flex-col items-center gap-2 mx-6 my-8">
    <Image
      alt="cute face with the text 'a face you can trust'"
      src={CutePic}
      placeholder="blur"
    />
    <h1 className="text-4xl sm:text-5xl font-semibold text-slate-800">
      Coming up soon!
    </h1>
  </main>
);

export default App;
