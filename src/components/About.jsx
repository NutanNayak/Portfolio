import { motion } from 'framer-motion';
import { styles } from '../styles';

const About = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with a Master's in Computer Applications (MCA),
        specializing in building exceptional digital experiences. My expertise spans
        across C#, .NET, React, and modern web technologies. I'm passionate about
        creating efficient, scalable, and user-friendly solutions that solve real-world
        problems. With a strong foundation in both backend and frontend development,
        I bring a comprehensive approach to software development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {[
          {
            title: "Full Stack Development",
            description: "Experienced in building complete web applications using .NET Core and React.",
          },
          {
            title: "Database Design",
            description: "Proficient in designing and optimizing SQL databases for performance.",
          },
          {
            title: "UI/UX Design",
            description: "Creating intuitive and responsive user interfaces with modern frameworks.",
          },
        ].map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <h3 className="text-white text-[20px] font-bold text-center">
                {service.title}
              </h3>
              <p className="text-secondary text-[14px] text-center">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
