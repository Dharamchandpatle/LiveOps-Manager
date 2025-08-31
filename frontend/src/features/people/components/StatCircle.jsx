import React from "react";
import { motion } from "framer-motion";

const KPIStat = ({ percentage, label }) => {
  return (
    <motion.div
      className="w-32 p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-900 flex flex-col items-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Label */}
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>

      {/* Percentage */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
        {percentage}%
      </h2>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-3 overflow-hidden">
        <motion.div
          className="h-3 bg-red-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default KPIStat;
