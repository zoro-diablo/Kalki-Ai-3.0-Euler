import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Box() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <div
      className='group relative max-w-sm rounded-xl border hover:scale-105 ease-in-out duration-300 border-white/10 bg-gray-900 px-8 py-10 shadow-2xl'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
        }}
      />
      <div>
        <h3 className='text-base font-semibold leading-7 text-emerald-500 flex justify-end'>
          Now live!
        </h3>
        <div className='mt-2 flex items-center gap-x-2'>
          <span className='text-4xl font-bold tracking-tight text-white mx-auto'>
            Stable Returns
          </span>
        </div>

        <motion.div
          className='w-full flex justify-center'
          whileHover={{ rotate: 5 }}
        >
          <img src='/stability.png' alt='package' className='w-[150px] my-10' />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-center mt-5 gap-x-3'>
            <ul className='list-disc list-inside text-white'>
              <li className='mb-3'><span className='font-semibold text-sky-500'>We Charge: </span><span className='text-sky-200'>$5,000</span></li>
              <li className='mb-3'><span className='font-semibold text-sky-500'>Minimal Returns: </span><span className='text-sky-200'>26.9%</span></li>
              <li className='mb-3'><span className='font-semibold text-sky-500'>Risk: </span><span className='text-sky-200'>Minimal Risk</span></li>
              <li className='mb-3'><span className='font-semibold text-sky-500'>Ai Assistant: </span><span className='text-sky-200'>Euler</span></li>
            </ul>
          </div>
        </motion.div>

        <h3 className='text-base font-semibold text-emerald-500 flex justify-center'>
          Safe
        </h3>
        <span className='text-md mt-4 font-medium text-white flex text-center'>
          Access AI-powered trading with low fees, significant gains, and minimal risk.
        </span>

        <button className='btn bg-gradient-button-one w-full mt-5 h-[45px] text-[16px] font-semibold text-white rounded-md'>
          <div className='z-10'>LET&apos;S GO 🚀</div>
        </button>
      </div>
    </div>
  );
}
