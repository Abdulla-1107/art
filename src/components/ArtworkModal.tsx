import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artwork, useCart } from '@/contexts/CartContext';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  const { t } = useTranslation();
  const { addToCart, removeFromCart, isInCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!artwork) return null;

  const inCart = isInCart(artwork.id);

  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(artwork.id);
      toast.success(t('gallery.remove_from_cart'));
    } else {
      addToCart(artwork);
      toast.success(t('gallery.add_to_cart'));
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: artwork.description,
        url: window.location.href,
      });
    } else {
      toast.info('Share functionality');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-auto"
          >
            <div className="bg-card rounded-lg shadow-elegant max-w-6xl mx-auto">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10"
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-3xl font-serif font-bold mb-2">
                      {artwork.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {artwork.artist}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">{t('artwork.price')}</span>
                        <span className="font-bold text-xl text-primary">
                          ${artwork.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">{t('artwork.medium')}</span>
                        <span className="font-medium">{artwork.medium}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">{t('artwork.dimensions')}</span>
                        <span className="font-medium">{artwork.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">{t('artwork.year')}</span>
                        <span className="font-medium">{artwork.year}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {artwork.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleCartAction}
                      variant={inCart ? "destructive" : "default"}
                      className="w-full gap-2"
                      size="lg"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {inCart ? t('gallery.remove_from_cart') : t('gallery.add_to_cart')}
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Heart className="h-5 w-5" />
                        {t('artwork.wishlist')}
                      </Button>
                      <Button variant="outline" size="lg" className="gap-2" onClick={handleShare}>
                        <Share2 className="h-5 w-5" />
                        {t('artwork.share')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
