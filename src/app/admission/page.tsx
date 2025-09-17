'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { } from "react";
import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer,
  defaultViewport 
} from '@/components/animations';

export default function Admission() {
  

  return (
    <>
      <div className="w-full overflow-hidden">
        {/* 1st Section */}
        <section
          className="relative w-full min-h-[515px] px-4 md:px-16 py-16 md:py-28 flex flex-col items-center justify-center gap-10 md:gap-20 transition-all duration-300"
        >
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/images/1.png"
              alt="Holy Family Nursery School Building"
              layout="fill"
              objectFit="cover"
              quality={90}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="relative z-10 w-full max-w-[960px] flex flex-col items-center justify-start text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.h1 
              className="w-full text-3xl md:text-5xl font-gabarito font-normal leading-[120%] tracking-tight text-white mb-5 transition-all duration-300"
              variants={staggerContainer}
            >
              Key Features of Our Enrollment Process
            </motion.h1>
            <motion.p 
              className="w-full text-base md:text-lg font-open-sans font-normal leading-[150%] text-white transition-all duration-300"
              variants={staggerContainer}
             
            >
              We welcome children aged 2.5 to 4 years, ready to embark on their learning journey. To ensure a successful transition, we ask that children are toilet-trained and able to self-feed. Our nurturing team is here every step of the way to support your child's readiness and confidence.
            </motion.p>
          </motion.div>
        </section>

        {/* 2nd Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#051743] flex flex-col gap-10 md:gap-20 text-white transition-all duration-300">
          {/* Top Text Block */}
          <motion.div 
            className="w-full max-w-[768px] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4 font-gabarito text-3xl md:text-4xl font-normal leading-[120%] tracking-tight">
              <span role="img" aria-label="calendar" className="text-4xl md:text-5xl">📅</span>
              <div className="flex flex-col">
                <span>Academic Year + Summer</span>
                <span>Program</span>
              </div>
            </div>

            <p className="font-open-sans text-base md:text-lg font-normal leading-[150%]">
              Children enjoy a full 10-month academic year, with an optional August program to extend summer fun and learning.
            </p>
          </motion.div>

          {/* Bottom Info Grid */}
          <motion.div 
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {[
              {
                title: "Uniform Policy",
                content: "All children wear a simple school uniform, helping build a sense of unity, comfort, and routine."
              },
              {
                title: "Ready to Enroll?",
                content: "Call us at 973-235-1170 for help with the registration process, or drop by to visit our friendly staff in person."
              },
              {
                title: "Discover Our Daily Hours",
                content: "Our program runs 8:30 AM to 3:30 PM, Monday through Friday. For busy families, we also offer extended hours from 7:00 AM to 5:30 PM to fit your schedule."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="max-w-[400px]"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="font-gabarito text-2xl md:text-3xl font-normal leading-[130%] tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="font-open-sans text-base leading-[150%]">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3rd Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#FEFBEE] transition-all duration-300">
          <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-start gap-10 md:gap-20">
            {/* Left: Text */}
            <motion.div 
              className="flex-1 min-w-[340px]"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-gabarito font-normal leading-[120%] tracking-tight text-[#0D0B05] mb-6 mt-10 md:mt-40">
                Nourishing Young Minds Through Healthy Meals
              </h2>
              <p className="text-base md:text-lg font-open-sans leading-[150%] text-black">
                We're committed to nutrition and mealtime care. Every day, children enjoy a hot lunch and afternoon snack, served with safety and love.
                <br />
                • 🍎 Healthy Meals: Fresh, balanced meals tailored to your child's needs.
                <br />
                • ✅ Dietary Care: We accommodate allergies and restrictions, ensuring every child eats safely.
              </p>
            </motion.div>
            {/* Right: Image */}
            <motion.div 
              className="flex-1 flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInRight}
            >
              <img 
                src="/images/add1.png" 
                alt="Teacher with children" 
                className="w-[360px] h-[640px] md:w-[616px] md:h-[600px] w-full h-auto max-w-[616px] rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>

        {/* 4th Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#0D0B05] transition-all duration-300">
          <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            {/* Left: Text */}
            <motion.div 
              className="flex-1 min-w-[340px] lg:max-w-[616px]"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-gabarito font-normal leading-[120%] tracking-tight text-white mb-6 mt-10 md:mt-0"
              style={{
                fontSize: 40,
                color: '#FFFFFF',
              }}
              >
                School Safety 
              </h2>
              <p className="text-base md:text-lg font-open-sans leading-[150%] text-white "
              style={{
                fontSize: 20,
                color: '#FFFFFF',
              }}
              >
                Holy Family Day Nursery School provides a safe, secure environment. A doorbell controls entry of persons during school hours. Daily sign-in sheets monitor drop-off and pick-up of students. Outdoor activities are always monitored.
              </p>
            </motion.div>
            {/* Right: Image */}
            <motion.div 
              className="w-[360px] h-[640px] md:w-[616px] md:h-[600px] flex-1 w-full lg:max-w-[616px] aspect-[4/3] relative"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInRight}
            >
              <Image 
                src="/images/add2.png" 
                alt="Teacher with children" 
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 616px"
                priority
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
