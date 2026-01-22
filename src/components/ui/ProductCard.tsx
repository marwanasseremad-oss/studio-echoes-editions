import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const lowestPrice = Math.min(...product.variants.map(v => v.price));
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/artwork/${product.id}`} className="product-card block">
        <div className="product-card-image aspect-[3/4] mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-1">
          <h3 className="font-serif text-lg">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.artistName}</p>
          <div className="flex items-baseline justify-between pt-2">
            <p className="text-sm">From {formatPrice(lowestPrice)} EGP</p>
            <p className="text-xs text-muted-foreground">
              Edition of {product.editionSize}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
