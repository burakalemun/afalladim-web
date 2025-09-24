// src/components/FloatingActionButton.jsx
import { motion } from "framer-motion";

export default function FloatingActionButton({ icon, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className="fixed bottom-5 right-5 bg-pink-500 text-white p-4 rounded-full shadow-lg"
        >
            {icon}
        </motion.button>
    );
}
