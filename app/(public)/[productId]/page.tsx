import { getProductById } from "@/actions/products";
import AddToCartBtn from "@/components/add-to-cart-btn";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export default async function Page({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = await getProductById(productId);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex gap-2">
        <Image
          src={product.image_url}
          alt="product thumbnail"
          width={400}
          height={400}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl">{product.name}</h3>
          <p className="text-xl">{product.description}</p>
          <span>{product.price}</span>
          <div>
            <AddToCartBtn
              id={product.id}
              image_url={product.image_url}
              name={product.name}
              price={product.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
