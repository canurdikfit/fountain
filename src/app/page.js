import AppDemo from "@/components/AppDemo";
import Banner from "@/components/Banner";
import Protocols from "@/components/Protocols";
import Transactions from "@/components/Transactions";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <AppDemo />
      <Transactions />
      <Protocols />
    </main>
  );
}
