import { motion } from 'framer-motion';
import nutan from '../assets/nutan.jpg';

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-[300px] h-[300px] group"
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 animate-border-flow p-1">
        {/* Glass container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-full h-full rounded-full overflow-hidden"
        >
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300" />
          
          {/* Profile Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src={nutan}
              alt="Nutan Nayak"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white text-lg font-semibold text-center"
              >
                Nutan Nayak
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-300 text-sm text-center"
              >
                MCA Graduate & Full Stack Developer
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute -top-4 -right-4 w-12 h-12 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        animate={{
          y: [5, -5, 5],
          rotate: [360, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(236, 72, 153, 0.4))",
          backdropFilter: "blur(4px)",
        }}
      />
    </motion.div>
  );
};

export default ProfilePhoto;
