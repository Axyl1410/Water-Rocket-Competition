import Document from "@/components/layout/document";
import Hero from "@/components/layout/hero";
import Location from "@/components/layout/location";
import Register from "@/components/layout/register";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 pt-15">
      <Hero />
      <Document />
      <Location />
      <Register />
    </div>
  );
}
