import Expertise from "./components/Expertise";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-auto w-full bg-white">
     <Slider/>
     <Service/>
     <div className="flex flex-row justify-between items-center p-8">
  <h1 className="text-2xl font-bold text-red-900">
    We provide Best IT Solutions for Corporate and Personal persons.
  </h1>
  <div className="border-1 border-black transition transform hover:-translate-y-1 bg-transparent p-3 text-black cursor-pointer">
    Learn more about services <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

  </div>
</div>
<Gallery/>
<Expertise/>
    </main>
  );
}
