import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Artwork, useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ArtworkCardProps {
  artwork: Artwork;
  onViewDetails: (artwork: Artwork) => void;
}

export const ArtworkCard = ({ artwork, onViewDetails }: ArtworkCardProps) => {
  const { t } = useTranslation();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const inCart = isInCart(artwork.id);

  const handleCartAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(artwork.id);
    } else {
      addToCart(artwork);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden shadow-card hover:shadow-glow transition-smooth cursor-pointer group">
        <div 
          className="relative aspect-square overflow-hidden bg-muted"
          onClick={() => onViewDetails(artwork)}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted" />
          )}
          <img
            src={artwork.image}
            alt={artwork.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-smooth group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center p-4">
            <Button 
              variant="secondary" 
              size="sm"
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(artwork);
              }}
            >
              <Eye className="h-4 w-4" />
              {t('gallery.view_details')}
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-1">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {artwork.year} • {artwork.category}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${artwork.price.toLocaleString()}
            </span>
            
            <Button
              size="sm"
              variant={inCart ? "destructive" : "default"}
              onClick={handleCartAction}
              className="gap-2"
            >
              {inCart ? (
                <>
                  <X className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('gallery.remove_from_cart')}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('gallery.add_to_cart')}</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
