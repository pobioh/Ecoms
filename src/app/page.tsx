import Image from "next/image";
import HomePage from "./home/page";
import ClientLayout from "./client-layout";

export default function Home() {
  return (
    <ClientLayout>
      <div className="wrapper">
        <HomePage />
      </div>
    </ClientLayout>
  );
}
