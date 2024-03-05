import "./Loading.css";
import spinner from "../../assets/Iphone-spinner-2.gif";
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
          <img className="loader" src={spinner} />
        </div>

      </motion.div>
    </AnimatePresence>
  );
};