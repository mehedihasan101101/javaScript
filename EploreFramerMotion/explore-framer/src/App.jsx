
import { useState } from 'react'
import './App.css'
import { AnimatePresence, easeInOut, easeOut, motion, scale, spring, stagger, useCycle } from "motion/react"
function App() {
  const [open, setOpen] = useState(false);
  const [goAway, setGoAway] = useState(true);
  const [animation, cycleAnmimation] = useCycle("animationOne", "animationTwo")
  setTimeout(() => {
    setGoAway(false)
  }, 4000);
  const exploreVarient = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    },
  }
  // child parent animation in order.
  const moreAboutVariant = {
    hidden: { x: "100vw" },
    visible: {
      x: "0vw",
      transition: {
        type: spring,
        when: "beforeChildren",
        staggerChildren: .5,
      }
    }
  }
  const childAnimationVariant = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, x: 4 }
  }
  // svg variant
  const svgVariant = {
    start: {
      rotate: 180,
    },
    end: {
      rotate: 0
    }
  }
  const svgPathVariant = {
    start: {
      opacity: 0,
      pathLength: 0

    },
    end: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1
      }
    }
  }
  // keyframe hover infinity
  const keyFrameVariant = {
    hover: {
      scale: [1.1, 1.5, 1.1, 1.5, 1.1, 1.5],
      transition: {
        duration: .5,
        repeat: Infinity,
        ease: "easeIn"

      }
    }
  }
  // variant for ball
  const ballVariant = {

    animationOne: {
      x: [-20, 140],
      y: [-20, -90],
      transition: {
        x: {
          duration: .5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"

        },
        y: {
          duration: .25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }
      }



    },
    animationTwo: {
      y: [-20, -90],
      transition: {
        y: {
          duration: .25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }
      }



    }
  }
  return (
    <>
      <div className='container p-5 flex flex-col  bg-purple-950 m-auto'>
        <motion.h1
          className='text-white text-3xl font-bold p-5'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, }}
        >
          Animate with framer motion
        </motion.h1>
        {/* tween */}
        <motion.div
          className='bg-green-300 w-30 h-30'
          initial={{ x: 200, y: 200 }}
          animate={{ x: 0, y: 0, rotate: 360 }}
          transition={{ duration: 1, ease: easeOut }}
        >
        </motion.div>

        {/* spring */}
        <motion.div
          className='bg-green-300 w-30 h-30 mt-4'
          initial={{ x: 200, y: 200 }}
          animate={{ x: 0, y: 0, }}
          transition={{ type: spring, stiffness: 120, damping: 8 }}
        >
        </motion.div>
        {/* Explore Variant */}
        <motion.div
          className='bg-blue-900 w-30 h-30 mt-2'
          variants={exploreVarient}
          initial="hidden"
          animate="visible"
        >
          <h1>variant</h1>
        </motion.div>
        {/* svg path with framer */}
        <div className='w-full'>
          <motion.svg variants={svgVariant} initial="start" animate="end" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 24 24" fill="none">
            <motion.path variants={svgPathVariant} d="M9 18H9.01M15 18H15.01M9 20.5H9.01M12 18H12.01M12 21H12.01M15 20.5H15.01M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </motion.svg>
        </div>
        {/* layout animation */}

        <motion.div className='bg-emerald-600 flex items-end'
          layout
          style={{ height: open ? 300 : 200 }}
          transition={{ type: spring, }}
        >
          <button onClick={() => setOpen(!open)} className=' px-5 py-3  bg-amber-600 w-full'>Expand</button>
        </motion.div>

        {/* hover effect  */}
        <ul className='text-amber-200 text-2xl font-bold'>
          My Favorite games
          <motion.li whileHover={{ scale: 1.3, originX: 0 }} transition={{ type: "spring", stiffness: 300, damping: 2 }} className='ml-2'>Gta 5</motion.li>
          <motion.li whileHover={{ scale: 1.3, originX: 0 }} transition={{ type: "spring", stiffness: 300, damping: 2 }} className='ml-2'>RDR 2</motion.li>
          <motion.li whileHover={{ scale: 1.3, originX: 0 }} transition={{ type: "spring", stiffness: 300, damping: 2 }} className='ml-2'>COD</motion.li>
        </ul>


      </div >

      {/* animation parent and child in order */}
      <motion.div className='container m-auto bg-cyan-500 flex flex-col items-center p-10' variants={moreAboutVariant} initial="hidden" animate="visible" >
        <motion.h1 variants={childAnimationVariant} className='font-bold text-4xl '>Explore Framer Motion with Variant</motion.h1>
        <motion.h1 variants={childAnimationVariant} className='font-bold text-4xl '>Explore Framer Motion with Variant</motion.h1>
        <motion.h1 variants={childAnimationVariant} className='font-bold text-4xl '>Explore Framer Motion with Variant</motion.h1>
        <motion.div variants={childAnimationVariant}>
          <h1>hi</h1>
        </motion.div>
      </motion.div>

      {/* keyframe Animation */}
      <motion.button variants={keyFrameVariant} whileHover="hover" className='py-3 px-5 bg-red-500 m-auto block  mt-2 rounded mb-5 hover:cursor-pointer'> keyframe</motion.button>

      {/* exit animation */}

      <motion.div className='bg-gray-900 m-auto container text-white p-5 text-2xl font-bold flex items-center justify-center'>
        <AnimatePresence>
          {goAway && <motion.h1 exit={{ x: -5000 }} transition={{ duration: 1 }}>Hi i am exit animation</motion.h1>}

          {/* Explore onExitComplete framer function */}
        </AnimatePresence>
      </motion.div>


      {/* useCycleHook */}
      <motion.div className='container m-auto h-50 mb-4 bg-amber-300  flex items-end justify-center'>
        <motion.div variants={ballVariant} animate={animation} className=' rounded-full bg-white h-4 w-4 '></motion.div>

        <div onClick={() => cycleAnmimation()} className='block'>Change Motion</div>
      </motion.div>

    </>
  )
}

export default App
