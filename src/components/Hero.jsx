// import { motion } from "framer-motion";

// import { styles } from "../styles";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroSubText} text-white`}>
//             Hello, I'm <span className='text-[#915EFF]'>Sakshi Patil</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//           Software Engineer,<br className='sm:block hidden' />
//           Web developer, AI Open Source contributor.
//           </p>
//         </div>
//       </div>


//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero; 
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroSubText} text-white`}>
            Hello, I'm <span className='text-[#915EFF]'>Sakshi Patil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer
            <br className='sm:block hidden' />
            Web developer
            <br className='sm:block hidden' />
            AI Enthusiast
            <br className='sm:block hidden' />
            Open Source contributor.
          </p>
        </div>
      </div>

      {/* Image with Round Design (Moved Up, Increased Size, Moved Right) */}
      <div
        className='absolute top-[25%] right-[15%] w-[350px] h-[350px] bg-cover bg-center rounded-full overflow-hidden'
      >
        <img
          src='src\components\photo.jpeg' // Replace with the path to your image
          alt='Profile Image'
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
