import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const VideoModal = ({ isModalOpen, setIsModalOpen, videoId }) => {
  
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100000] flex items-center justify-center p-4 md:p-10"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-5xl relative  rounded-2xl shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 z-20 bg-white/10 hover:bg-primary-green backdrop-blur-md text-white p-2.5 rounded-full transition-all duration-300 border border-white/20 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose className="text-2xl" />
            </button>

            <div className="relative pt-[56.25%] w-full h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="h-1 w-full bg-linear-to-r from-transparent via-theme-primary to-transparent opacity-50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;