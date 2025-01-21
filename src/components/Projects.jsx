import { motion } from 'framer-motion';
import { styles } from '../styles';

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with .NET Core and React, featuring user authentication, product management, and secure payment processing.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: "project1.png",
    source_code_link: "https://github.com",
  },
  {
    name: "Task Management System",
    description: "A collaborative task management application with real-time updates, team collaboration features, and performance analytics dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "project2.png",
    source_code_link: "https://github.com",
  },
  {
    name: "Portfolio Website",
    description: "A modern and interactive portfolio website showcasing professional experience, skills, and projects with smooth animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "project3.png",
    source_code_link: "https://github.com",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="github.png"
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. They reflect my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
