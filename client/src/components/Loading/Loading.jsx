import "./Loading.css";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        className="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="load-wrap">
      
        </div>

      </motion.div>
    </AnimatePresence>
  );
};