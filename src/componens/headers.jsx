import React from 'react';
import Clock from './clock';
import { motion, AnimatePresence } from 'framer-motion';

const Headers = () => {
    return (
        <AnimatePresence >
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="min-h-96 bg-gradient-to-r from-black to-indigo-900">
                <div className="pt-10 pb-10 px-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="text-white text-7xl mt-20">Digital Software Agency</motion.h1>
                </div>
            </motion.header>
        </AnimatePresence>
    );
};

export default Headers;
