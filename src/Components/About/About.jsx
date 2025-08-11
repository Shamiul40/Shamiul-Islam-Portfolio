import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/profile7.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse gap-20 md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Greeting */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hi, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Shamiul Islam
          </motion.h2>

          {/* Skills Heading with Typing Effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Mern Stack Developer",
                1500,
                "UI/UX Designer",
                1500,
                "Coder",
                1500,
              ]}
              wrapper="span"
              speed={60}
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />
          </motion.h3>

          {/* About Me Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I am a frontend developer with over 6 months of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in frontend and other modern
            technologies to create seamless user experiences and efficient
            solutions.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1ASOQZwg4aVx6yHVeFJ-1fJS0XOmW2pjr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          animate={{
            rotate: [0, 2, 0, -2, 0], // gentle sway effect
            y: [0, 5, 0, -5, 0], // slight up/down sway
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              src={profileImage}
              alt="Shamiul Islam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
