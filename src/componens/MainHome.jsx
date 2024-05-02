import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { IoAnalytics } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const MainHome = () => {
    return (
        <AnimatePresence >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='bg-gradient-to-r from-indigo-900 to-black'>
                <h1 className='py-20 text-white text-6xl text-center'>Lorem, ipsum dolor.</h1>
                <section className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="grid grid-cols-1 md:grid-cols-2 my-10 mx-5 p-5 text-white border rounded-lg">
                        <CgWebsite className='mx-20 text-9xl' />
                        <h2 className='text-3xl my-2 text-center bg-yellow-500 py-5'>Software Development</h2>
                    </div>
                    <div className="tex-center grid grid-cols-1 md:grid-cols-2 my-10 mx-5 p-5 text-white border rounded-lg">
                        <IoAnalytics className='mx-20 text-9xl' />
                        <h2 className='text-3xl my-2 text-center bg-yellow-500 py-5'>Software Development</h2>
                    </div>
                    <div className="my-10 mx-5 p-5 text-white border rounded-lg">
                        <h2 className='text-3xl my-2 text-center'>Lorem, ipsum dolor.</h2>
                        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum non, maiores quae eum ipsa quidem, aspernatur deleniti, fugit iste ab totam explicabo distinctio facere sed similique aut placeat magni dolores praesentium itaque a! Eos in aliquam vel veritatis, numquam hic alias adipisci officiis dolorum veniam, sunt nisi? Nemo, ullam eius!</p>
                    </div>
                    <div className="my-10 mx-5 p-5  text-white border rounded-lg">
                        <h2 className='text-3xl my-2 text-center'>Lorem, ipsum dolor.</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ipsam molestiae, voluptatum illo soluta deserunt culpa totam laborum quis porro inventore sunt, ipsa provident neque, pariatur at adipisci fugiat consequatur nisi. Quidem iste architecto cumque veritatis numquam mollitia minus placeat tempore nemo, quod sint reprehenderit assumenda, eos nihil earum ipsa quis perferendis est. Natus maiores harum facere cumque sunt earum nihil ducimus molestias ea. Porro veritatis magnam doloremque, placeat nesciunt, eius atque ullam quo expedita, adipisci necessitatibus repellendus culpa tempore minima repudiandae totam impedit vitae saepe aperiam optio. Excepturi tempore dolorem ipsum, est maiores modi delectus quasi error quia quos.</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 px-5 py-10 text-white border rounded-lg">
                        <IoLogoJavascript className='text-lime-400 bg-black text-4xl rounded-lg mx-auto' />
                        <MdHtml className='text-4xl bg-yellow-700 rounded-lg mx-auto' />
                        <MdCss className='bg-blue-900 text-4xl rounded-lg mx-auto' />
                        <FaPhp className='text-black text-4xl bg-blue-800 rounded-lg mx-auto' />
                        <FaLaravel className='bg-yellow-800 text-white text-4xl rounded-lg mx-auto' />
                        <DiNodejs className='bg-green-900 text-white text-4xl mx-auto' />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 px-5 py-10 text-white border rounded-lg">
                        <FaPython className='text-lime-400 bg-black text-4xl rounded-lg mx-auto' />
                        <SiMysql className='text-4xl bg-yellow-700 rounded-lg mx-auto' />
                        <FaFileExcel className='bg-white text-green-500 text-4xl rounded-lg mx-auto' />
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>
    )
}

export default MainHome
