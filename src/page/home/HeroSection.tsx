import { ImageContainer } from "@/components/common/ImageContainer";
import { FlyingFlowers } from "@/components/ui/FlyingFlowers";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

export const HeroSection = () => {
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="hero"
      className="flex flex-col space-y-2 items-center mt-4  "
    >
      <FlyingFlowers />
      <div className="flex flex-col space-y-2 items-center mt-4  ">
        <ImageContainer
          src="/the.jpg"
          className="w-1/2 h-1/2 object-cover"
        />
      </div>

      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl text-center"
      >
        Developer
      </motion.h1>
      <h1 className="text-3xl md:text-5xl text-primary text-center  text-stroke-black text-stroke-2">
        Trần Nguyên Thế
      </h1>
      <motion.div
        variants={item}
        className="h-6 text-center text-2xl md:text-4xl font-bold text-primary "
      >
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Ton Duc Thang University",
              "Gia Lai, Vietnam",
              "Love coding",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 45,
          }}
        />
      </motion.div>
      <motion.div
        className=" rounded-3xl  p-4 mt-3  md:mt-2
          transition-all duration-300 flex justify-center max-w-[600px] "
      >
        <p className="text-gray-700 text-[15px] leading-relaxed  text-center text-2xl font-semibold ">

          Xin chào, tôi là Trần Nguyên Thế, một developer full-stack. Tôi yêu thích lập trình và tạo ra những sản phẩm thực tế.

        </p>
      </motion.div>


    </motion.div>
  );
};
