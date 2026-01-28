import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { t, language } = useLanguage();
  const lowestPrice = Math.min(...product.variants.map(v => v.price));
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const title = language === 'ar' ? product.titleAr : product.title;
  const artistName = language === 'ar' ? product.artistNameAr : product.artistName;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/artwork/${product.id}`} className="product-card block">
        <div className="product-card-image aspect-[3/4] mb-3 md:mb-4">
          <img
            src={product.image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-0.5 md:space-y-1">
          <h3 className="font-display text-sm md:text-lg tracking-wide">{title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{artistName}</p>
          <div className="pt-1 md:pt-2">
            <p className="text-xs md:text-sm">{t('product.from')} {formatPrice(lowestPrice)} EGP</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};