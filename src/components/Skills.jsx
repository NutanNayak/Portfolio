import { motion } from 'framer-motion';
import { styles } from '../styles';
import { skills } from '../data/skills';

const SkillCard = ({ name, level, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">
          {name}
        </h3>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
          />
        </div>
        <p className="text-secondary">{level}%</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={styles.sectionSubText}>My technical expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
