import { api } from "@/data/api";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts() {
  const res = await api('/products/featured')
  const products = await res.json()
  return products
}

export default async function Home() {
  const products = await getFeaturedProducts()
  if (products.length === 0) {
    return <div>Failed to load products. Please try again later.</div>;
  }
  console.log(products)

  return (
    <div className="grid max-h-[53.75rem] grid-cols-9 grid-rows-6 gap-6 text-white">
      <Link
        href={"/"}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src="/moletom-never-stop-learning 1.svg"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[17.5rem] rounded-full border-2 border-zing-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src="/moletom-java.svg"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[17.5rem] rounded-full border-2 border-zing-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>

      </Link>

      <Link
        href={"/"}
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src="/camiseta-dowhile-2022.svg"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[17.5rem] rounded-full border-2 border-zing-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
