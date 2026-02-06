import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaHeart } from 'react-icons/fa';
import Prop from '../assets/Prop.jpeg'
import FirstDate from '../assets/FirstDate.jpg';
import DiwaliLight from '../assets/DiwaliLight.jpeg';
import BDay from '../assets/BDay.jpeg'
import Garba from '../assets/Garba.jpg'
import D2 from '../assets/D2.jpeg'
import D1 from '../assets/D1.jpeg'
import D3 from '../assets/D3.jpeg'
import Heartrain from './HeartRain';


interface TimelineEvent {
  image: string;
  caption: string;
  date: string;
  description?: string;
}

const timelineData: TimelineEvent[] = [
  {
    image: Prop ,
    caption: 'Proposal',
    date: '2024-09-05',
    description: 'The moment our eyes met, time stood still and our hearts knew.',
  },
  {
    image: FirstDate,
    caption: 'First Date',
    date: '2024-09-28',
    description: 'Your smile lights up my world like a thousand stars.',
  },
  {
    image: Garba,
    caption: 'Garba Night',
    date: '2024-10-08',
    description: 'My heart dances to the rhythm of your love.',
  },
  {
    image: DiwaliLight,
    caption: 'First Diwali',
    date: '2024-09-28',
    description: 'In the story of my life, you are my favorite chapter.',
  },
  {
    image: BDay,
    caption: 'Birth Day',
    date: '2025-05-16',
    description: 'Your laughter wraps around me like a song I never want to stop hearing.',
  },
  {
    image: D2,
    caption: 'First Trip',
    date: '2025-12-20',
    description: '“In the journey of my life, you’re the moment I’d relive again and again.',
  },
  {
    image: D1,
    caption: 'Monratino',
    date: '2025-12-22',
    description: 'You’re the beautiful mystery my heart loves trying to understand.',
  },
  {
    image: D3,
    caption: 'Traditional in Darjeeling',
    date: '2025-12-27',
    description: 'With you beside me, even ordinary moments feel extraordinary.',
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 opacity-0">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-dancing text-6xl md:text-7xl text-white drop-shadow-lg">
            Our Love Story
          </h2>
          <p className="mt-4 font-playfair text-white/90 italic">
            Every moment with you is a treasure...
          </p>
        </motion.div>

        <div className="relative">
          {timelineData.map((event, index) => (
            <TimelineEventCard key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineEventCard: React.FC<TimelineEvent & { index: number }> = ({ image, caption, date, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24`}
    >

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10"
      >
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
          <FaHeart className="text-white text-lg" />
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 
             ${isEven ? 'ml-8 md:ml-12' : 'mr-8 md:mr-12'} 
             flex-1 max-w-xl shadow-xl`}
      >
        {/* Heart rain effect confined to the card */}
        <div className="absolute inset-0 pointer-events-none">
          <Heartrain />
        </div>

        {/* Main content placed above the heart rain */}
        <div className="relative z-10">
          <div className="overflow-hidden rounded-xl mb-4 group">
            <img
              src={image}
              alt={caption}
              className="w-full h-72 object-cover transform transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="space-y-3">
            <h3 className="font-dancing text-3xl text-white">{caption}</h3>
            <p className="font-playfair text-white/80 italic">{description}</p>
            <p className="text-sm text-white/90 font-semibold">
              {format(new Date(date), 'MMMM do, yyyy')}
            </p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};


export default TimelineSection;
