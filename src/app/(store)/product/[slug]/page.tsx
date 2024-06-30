import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";

interface ProductProps {
 params: {
  slug: string
 }
}

async function getProduct(slug: string): Promise<Product> {
  const res = await api(`/products/${slug}`, {
   next: {
    revalidate: 60 * 60, // 1 hora
   }
  })
  const products = await res.json()
  return products
}

export default async function ProductPage({ params }: ProductProps) {
  const products = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3 text-white">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="relative"
          src={products.image}
          alt="Moletom Never Stop Learning"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
         {products.title}
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
         {products.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
         <span className="flex items-center rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
         {products.price.toLocaleString('pt-BR', {
             style: 'currency',
             currency: 'BRL',
             minimumFractionDigits: 0,
             maximumFractionDigits: 0,
            })}
         </span>
         <span className="text-sm text-zinc-400">
          {(products.price / 12).toLocaleString('pt-BR', {
           style: 'currency',
           currency: 'BRL',
          })}
         </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            {['P', 'M', 'G', 'GG'].map((size) => (
              <button
                key={size}
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button type='button' className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
