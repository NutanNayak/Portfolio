import { motion } from 'framer-motion';
import { styles } from '../styles';

const experiences = [
  {
    title: "MCA Graduate",
    company_name: "Your University Name",
    date: "2022 - 2024",
    points: [
      "Completed Master's in Computer Applications with distinction",
      "Specialized in Advanced Software Development and System Design",
      "Developed multiple full-stack applications as part of coursework",
      "Participated in various coding competitions and hackathons",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "interface software",
    date: "Summer 2023",
    points: [
      "Developed and maintained web applications using .NET Core and React.js",
      "Collaborated with cross-functional teams to create high-quality products",
      "Implemented responsive design and ensured cross-browser compatibility",
      "Participated in code reviews and provided constructive feedback",
    ],
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-tertiary p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
        <p className="font-bold text-2xl mt-1 text-secondary">{experience.company_name}</p>
        <p className="uppercase py-5 text-gray-500">{experience.date}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, index) => (
            <li key={index} className="text-white-100">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[50%] left-0 right-0 w-full h-[500px] -skew-y-12 bg-gradient-to-r from-pink-400/10 to-purple-500/10 -z-10" />
    </section>
  );
};

export default Experience;
