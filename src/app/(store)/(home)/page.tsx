import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const res = await api('/products/featured');
  const products = await res.json();
  return products;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();
  return (
    <div className="grid max-h-[53.75rem] grid-cols-9 grid-rows-6 gap-6 text-white">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[17.5rem] rounded-full border-2 border-zing-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
             style: 'currency',
             currency: 'BRL',
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => {
        return (
          <Link
          href={"/"}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            src={product.image}
            alt="Moletom Java"
            className="group-hover:scale-105 transition-transform duration-500"
            width={920}
            height={920}
            quality={100}
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[17.5rem] rounded-full border-2 border-zing-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price}
            </span>
          </div>
        </Link>
        )
      })}
    </div>
  );
}
