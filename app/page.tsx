import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="relative flex flex-col items-center min-h-screen min-w-4xl p-4">

      <div className="absolute left-0 top-0 bottom-0 w-px border border-zinc-800 border-solid"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px border border-zinc-800 border-solid"></div>

      <div>
      <Navbar />
      </div>
         
      </div>
    </main>
  )
}
