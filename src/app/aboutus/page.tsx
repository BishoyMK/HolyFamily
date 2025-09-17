'use client';

import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer,
  defaultViewport 
} from '@/components/animations';

export default function AboutUs() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1st Section */}
      <section className="bg-[#0D0B05] sm:bg-[#fdf7ea] py-6 md:py-12 px-4 md:px-8 lg:px-16 min-h-screen">
        {/* Upper Section */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h1
            className="mx-auto mb-4 font-normal text-3xl md:text-4xl lg:text-[56px] leading-[120%] text-center"
            style={{
              fontFamily: 'Gabarito, sans-serif',
              letterSpacing: '-1%',
              color: '#0D0B05',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <span className="block md:hidden text-[32px] font-gabarito font-[400] leading-[120%] tracking-[-0.01em] text-[#FFFFFF]">Welcome to Our Nurturing Learning Environment</span>
            <span className="hidden md:block">Welcome to Our Nurturing <br /> Learning Environment</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="mx-auto mb-6 text-center font-normal text-base md:text-lg leading-[150%] max-w-3xl"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 400,
              color: '#0D0B05',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <span className="block md:hidden font-open-sans font-[400] text-[17px] leading-[150%] text-center text-[#FFFFFF]">
              At Holy Family Day Nursery School, we are dedicated to fostering a safe and nurturing environment where children can thrive. Our commitment to education and personal growth ensures that every child is prepared for their future.
            </span>
            <span className="hidden md:block">
              I invite you and your children to join our community of learning and love. The teachers and I believe in the dignity of each and every child. We are dedicated to the student's
              <br /> intellectual, personal, moral, social, and religious development. All of our teachers have
              <br /> training in both "traditional" educational practices and Montessori Pedagogy.
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {/* Learn More - Always Visible */}
            <button
              className="bg-blue-900 text-white border border-blue-900 rounded-[12px] flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-4 py-2 w-full sm:w-auto"
              style={{
                color: '#FFFFFF',
                backgroundColor: '#071D54',
              }}
            >
              Learn More
            </button>

            {/* Contact Button - on screen only */}
            <button
              className="rounded-[12px] hidden md:block flex items-center justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-4 py-2 w-full sm:w-auto"
              style={{
                color: '#0D0B05',
                backgroundColor: '#0D0B050D',
              }}
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Lower Section */}
        <motion.div 
          className="w-full overflow-x-auto hide-scrollbar scroll-smooth mt-8 md:mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex flex-col gap-4">
            {/* Upper row: first 5 images */}
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.img
                  key={index}
                  src={`images/About${index}.png`}
                  alt={`About image ${index}`}
                  className="w-[300px] sm:w-[416px] h-[250px] sm:h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
            {/* Lower row: last 4 images */}
            <div className="flex gap-4">
              {[6, 7, 8, 9].map((index) => (
                <motion.img
                  key={index}
                  src={`images/About${index}.png`}
                  alt={`About image ${index}`}
                  className="w-[300px] sm:w-[416px] h-[250px] sm:h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2nd Section */}
      <section className="w-full bg-[#051743] py-8 md:py-16 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-start mt-10 md:mt-20">
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center h-full bg-[#051743]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="text-white max-w-xl">
              {/* Text for larger screens */}
              <p className="hidden md:block text-base md:text-lg mb-8 mt-15">
                At Holy Family Day Nursery School, we are dedicated to nurturing the whole child. Our mission is to provide a safe, loving environment that fosters growth, creativity, and lifelong learning.
              </p>

              {/* Text for mobile screens */}
              <p className="block md:hidden md:text-[36px] mb-8 font-gabarito font-[400] text-[36px] leading-[120%] tracking-[-1%] w-full">
                Welcome to the Heart of Learning at Holy Family Day Nursery School
              </p>
              
              {/* Heading for larger screens */}
              <h2 className="hidden md:block text-3xl md:text-4xl lg:text-[48px] font-['Gabarito'] mb-4">
                Our Mission
              </h2>

              {/* Heading for mobile screens */}
              <h2 className="block md:hidden md:text-4xl mb-4 font-open-sans font-[400] text-[16px] leading-[150%] tracking-[0%] w-full">
                At Holy Family Day Nursery School, we are dedicated to nurturing the whole child. Our mission is to provide a safe, loving environment that fosters growth, creativity, and lifelong learning.
              </h2>

              {/* Text for larger screens */}
              <p className="hidden md:block text-base md:text-lg">
                The mission of Holy Family Day Nursery School is to provide a warm, caring, safe and inspiring Catholic-based early childhood educational environment for children, ages 2.5 - 5.<br />
                A highly qualified staff, including full-time teaching religious sisters and auxiliary staff, provide an environment designed to nurture the whole child encouraging each child's development by providing hands-on, developmentally appropriate educational activities to meet the needs of each individual child in the areas of physical, social, emotional and intellectual growth leading them to become life-long learners.
              </p>

              {/* Text for mobile screens */}
              <p className="block md:hidden">
                {/* Mission Text with Gabarito Font */}
                <span className="w-full font-gabarito font-[400] text-[36px] leading-[120%] tracking-[-1%]">
                  Mission
                </span>
                <br />
                <span className="w-full font-open-sans font-[400] text-[16px] leading-[150%] tracking-[0%]]">
                  Fostering a love for learning in every child.
                </span>
                <br /><br />
                <span className="w-full font-gabarito font-[400] text-[36px] leading-[120%] tracking-[-1%]">
                  Vision
                </span>
                <br />
                <span className="w-full font-open-sans font-[400] text-[16px] leading-[150%] tracking-[0%]">
                  Empowering families and communities through education.
                </span>
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <img
              src="images/About10.png"
              alt="Teacher and child playing"
              className="w-full h-auto md:w-[616px] md:h-[600px] object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
              style={{
                borderRadius: 8,
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="w-full bg-[#FEDA5E] py-8 md:py-16 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center mt-10 md:mt-20">
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="text-[#000000]">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-['Gabarito'] mb-4">
                Our Vision
              </h2>
              <p className="text-base md:text-lg mb-6">
                The vision of Holy Family Day Nursery School is to serve our community with a quality educational program for early childhood level children. Motivated to serve, the Sisters and staff allow the children the freedom to experience and acquire knowledge through the exploration and discovery mode of learning; challenging each child to grow and develop into well-rounded, self-disciplined individuals who have a creative spirit freed through a positive self-image.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
                <img
                  src="/images/IconoirNavArrowRight.svg"
                  alt="Arrow Icon"
                  className="w-4 h-4 transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <img
              src="images/About11.png"
              alt="Teacher and child playing"
              className="w-[360px] h-[350px] md:w-[616px] md:h-[600px] object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
              style={{
                borderRadius: 8,
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 4th Section */}
      <section className="w-full bg-[#0D0B05] py-8 md:py-16 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto mt-5">
          {/* Upper section: heading and intro paragraph */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-[36px] font-['Gabarito'] text-white mb-4">
                OUR HISTORY
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base md:text-lg text-white">
                Founded with a commitment to nurturing young minds, our school has been a cornerstone of the community for over two decades. We believe in fostering a supportive environment where children can thrive, learn, and grow together. Our mission is to empower each child through a holistic approach to education, rooted in love, respect, and collaboration.
              </p>
            </div>
          </motion.div>

          {/* History content */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-8 mt-10 md:mt-25"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <div className="w-full lg:w-1/2">
              <img
                src="/images/About12.png"
                alt="Nun smiling"
                className="w-full h-auto md:w-[616px] md:h-[930px] rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 text-white space-y-6">
              <p className="text-base md:text-lg">
                In the spring of 1954, the Franciscan Sisters of Saint Elizabeth were invited by Monsignor Anthony DeLuca to open a preschool in his parish of Holy Family Church, in Nutley, New Jersey. With the permission of Archbishop Thomas Borland, Archbishop of Newark, the sisters were set up with a small parcel of land with a small house on it. The sisters were given the land and building with the understanding all renovations were their responsibility.
              </p>
              <p className="text-base md:text-lg">
                The sisters persevered modernizing the house into a suitable structure to house three beautiful academic classrooms, a coat room, office, kitchen and living quarters for the Sisters, including a chapel for the Sisters. All this was finalized on September 7, 1967.
              </p>
              <p className="text-base md:text-lg">
                The first community of Sisters was made up of Superior, Mother Justina Iodice, Sister Cecilia Tozzi, Sister Eileen Woodbury, and Sister Romilda Chiga.
              </p>
              <p className="text-base md:text-lg">
                Through the years, the Sisters have dedicated themselves both to the care and education of their small charges as well as being active at Holy Family Church.
              </p>
              <p className="text-base md:text-lg">
                Many of the Sisters of the Franciscan Sisters of Saint Elizabeth have served at Holy Family Day Nursery School but the one that served the longest was the beloved Sister Romilda Chiga. Except for brief times of  service elsewhere, Sister Romilda faithfully served as school administrator, convent superior and ambassador to the mostly Italian community of the parish of Holy Family Church. She spent most of her religious life serving in Nutely, New Jersey. Sister Romilda faithfully served until her untimely death in August 2018.
              </p>
              <p className="text-base md:text-lg">
                Holy Family Day Nursery School continues today to educate children of early childhood ages. Love, respect and care are the basis for the school's program. The Sisters believe in the theory of blending modern technological tools with good old-fashioned hands-on lessons to assist the children to grow and learn at their own pace to become self-confident, aspiring young students.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 