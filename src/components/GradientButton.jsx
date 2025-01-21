import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GradientButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  icon: Icon,
  download,
  target
}) => {
  const [ripple, setRipple] = useState({ active: false, x: 0, y: 0 });

  const variants = {
    primary: 'from-purple-600 via-pink-600 to-blue-600',
    secondary: 'from-blue-600 via-cyan-500 to-purple-600',
    success: 'from-green-500 via-emerald-500 to-teal-500',
    warning: 'from-orange-500 via-amber-500 to-yellow-500'
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setRipple({ active: true, x, y });
    
    if (onClick) onClick(event);
    
    setTimeout(() => {
      setRipple({ active: false, x: 0, y: 0 });
    }, 500);
  };

  useEffect(() => {
    if (ripple.active) {
      const timer = setTimeout(() => {
        setRipple({ active: false, x: 0, y: 0 });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [ripple.active]);

  const ButtonContent = () => (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      {ripple.active && (
        <motion.div
          className="absolute bg-white/30 rounded-full"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.5,
          }}
          animate={{
            width: 500,
            height: 500,
            x: ripple.x - 250,
            y: ripple.y - 250,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );

  const baseClassName = `
    relative overflow-hidden
    inline-flex items-center justify-center gap-2
    px-4 sm:px-6 py-2.5 sm:py-3
    text-sm sm:text-base font-medium text-white rounded-full
    shadow-lg hover:shadow-xl
    transform hover:-translate-y-0.5
    transition-all duration-300
    bg-gradient-to-r ${variants[variant]} bg-size-200
    hover:bg-pos-100
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
    ${className}
  `;

  return href ? (
    <motion.a
      href={href}
      target={target}
      download={download}
      className={baseClassName}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      <ButtonContent />
    </motion.a>
  ) : (
    <motion.button
      className={baseClassName}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default GradientButton;
