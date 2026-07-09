'use client';
import { ProductList, ProductListSkeleton } from "@/vibes/soul/sections/product-list";

import { useProducts } from "~/lib/makeswift/utils/use-products";

export function MSMyProductList() {
    const { products, isLoading } = useProducts({
        collection: "newest",
        additionalProductIds: [],
    });
    
    if (isLoading) {
        return <ProductListSkeleton />;
    }
    
    if (products == null || products.length === 0) {
        return <ProductListSkeleton />;
    }
    
    return <ProductList className="w-full" products={products} />;
}