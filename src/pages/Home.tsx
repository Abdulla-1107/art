import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { ArtworkCard } from '@/components/ArtworkCard';
import { artworks } from '@/data/artworks';
import { useState } from 'react';
import { Artwork } from '@/contexts/CartContext';
import { ArtworkModal } from '@/components/ArtworkModal';

const Home = () => {
  const { t } = useTranslation();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredArtworks = artworks.slice(0, 4);

  const handleViewDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Artworks Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t('home.featured_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.featured_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ArtworkCard artwork={artwork} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </div>
      </section>

      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
