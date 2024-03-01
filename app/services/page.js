import ServicesSkeletion from "@/Components/LoadingSkeletons/ServicesSkeletion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-[full] max-w-[1440px] mx-auto">
      <div className="">
        <ServicesSkeletion />{" "}
      </div>
    </main>
  );
}
