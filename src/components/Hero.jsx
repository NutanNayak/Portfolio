import { motion } from 'framer-motion';
import { styles } from '../styles';
import { skills } from '../data/skills.js';
import StarsCanvas from './canvas/Stars';
import GradientButton from './GradientButton';
import nutan from '../assets/nutan.jpg';

// LinkedIn icon component
const LinkedInIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// GitHub icon component
const GitHubIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Resume icon component
const ResumeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <section className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="text-center md:text-left">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Nutan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              MCA Graduate specializing in{" "}
              <br className="hidden md:block" />
              Full Stack Development with .NET & React
            </p>
            
            {/* Social and Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 items-center justify-center md:justify-start">
              <GradientButton
                href="https://www.linkedin.com/in/nutan-nayak"
                target="_blank"
                icon={LinkedInIcon}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Connect on LinkedIn
              </GradientButton>

              <GradientButton
                href="https://github.com/nutan-nayak"
                target="_blank"
                icon={GitHubIcon}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View GitHub
              </GradientButton>

              <GradientButton
                href="/resume.pdf"
                download="Nutan_Nayak_Resume.pdf"
                icon={ResumeIcon}
                variant="success"
                className="w-full sm:w-auto"
              >
                Download Resume
              </GradientButton>
            </div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative mt-8 md:mt-0 md:ml-auto group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-blue-500 p-1 group-hover:p-1.5 transition-all duration-300">
              {/* Image container with glass effect */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src={nutan}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </section>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#skills" className="hidden sm:block">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>

        <StarsCanvas />
      </div>

      {/* Skills Preview Section */}
      <section id="skills-preview" className="relative w-full min-h-[400px] bg-tertiary px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto py-12 md:py-16"
        >
          <h2 className={`${styles.sectionHeadText} text-center mb-8 md:mb-12`}>
            Core Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {skills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
                <p className="text-white text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
