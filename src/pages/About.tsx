import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Calendar, Palette } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Palette,
      title: 'Contemporary Artist',
      description: 'Specializing in abstract and modern art forms',
    },
    {
      icon: Calendar,
      title: '10+ Years Experience',
      description: 'Creating timeless pieces since 2014',
    },
    {
      icon: Award,
      title: 'International Recognition',
      description: 'Featured in galleries across three continents',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('about.title')}
            </h1>
          </div>

          {/* Biography Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">
              {t('about.biography')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Bibisora is a contemporary artist whose work transcends traditional boundaries, 
                exploring the intricate relationship between color, form, and emotion. Born with 
                an innate passion for visual storytelling, Bibisora has developed a distinctive 
                style that combines classical techniques with modern sensibilities.
              </p>
              <p>
                Each piece is a meditation on the human experience, inviting viewers to pause, 
                reflect, and discover their own narratives within the artwork. Through bold use 
                of color and masterful composition, Bibisora creates pieces that are both 
                timeless and contemporary.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-glow transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">
              {t('about.philosophy')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                "Art is not just what we see, but what we feel and what we discover within 
                ourselves. My goal is to create pieces that resonate on a deeply personal level, 
                that speak to the soul and evoke emotion."
              </p>
              <p>
                This philosophy guides every brushstroke, every color choice, and every 
                composition. The result is artwork that transcends mere decoration, becoming 
                a meaningful part of the spaces and lives it inhabits.
              </p>
            </div>
          </motion.div>

          {/* Exhibitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6">
              {t('about.exhibitions')}
            </h2>
            <div className="space-y-4">
              {[
                { year: '2024', title: 'Contemporary Visions', location: 'New York' },
                { year: '2023', title: 'Abstract Expressions', location: 'London' },
                { year: '2023', title: 'Colors of Emotion', location: 'Paris' },
                { year: '2022', title: 'Modern Perspectives', location: 'Tokyo' },
              ].map((exhibition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-card shadow-card"
                >
                  <div className="text-primary font-bold">{exhibition.year}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{exhibition.title}</h3>
                    <p className="text-sm text-muted-foreground">{exhibition.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
