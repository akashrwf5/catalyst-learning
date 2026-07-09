'use client';

import { ProductCarousel, ProductsCarouselSkeleton } from '@/vibes/soul/sections/product-carousel';

import { useProducts } from '~/lib/makeswift/utils/use-products';

interface MSMyProductCarouselProps {
    className?: string;
    collection: 'featured' | 'best-selling' | 'newest' | 'none';
}

export function MSMyProductCarousel({className, collection}: MSMyProductCarouselProps) {
  const { products, isLoading } = useProducts({
    collection,
    additionalProductIds: [],
  });

  if (isLoading) {
    return <ProductsCarouselSkeleton className={className} />;
  }

  if (products == null || products.length === 0) {
    return <ProductsCarouselSkeleton className={className} />;
  }

  return <ProductCarousel className={className} products={products} />;
}
