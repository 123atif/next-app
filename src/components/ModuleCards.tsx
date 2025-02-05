// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Title from "./Title";

// interface ModuleCardsProps {
//   playerCards: any;
//   teamCards: any;
// }

// const ModuleCards: React.FC<ModuleCardsProps> = ({
//   playerCards,
//   teamCards,
// }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-8">
//       <Title
//         text="Glorizen Player NFT Cards"
//         className="mt-3 p-4 text-center"
//       />
//       <AnimatePresence mode="wait">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-4 md:gap-8"
//         >
//           {playerCards.map((img: string, index: number) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="relative w-[150px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] p-2"
//             >
//               <Image
//                 src={img}
//                 alt={`Player ${index + 1}`}
//                 fill
//                 className="object-contain hover:z-10"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//       <Title text="Glorizen Team NFT Cards" className="mt-3 p-4 text-center" />
//       <AnimatePresence mode="wait">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {teamCards.map((img: string, index: number) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="relative"
//             >
//               <Image src={img} alt={`Team Card ${index + 1}`} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ModuleCards;
