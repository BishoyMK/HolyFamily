/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
 
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer,
  defaultViewport 
} from '@/components/animations';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1st Section */}
      <section className="w-full relative">
        <motion.div 
          className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <picture>
            <source srcSet="/images/1.png" media="(max-width: 767px)" />
            <Image 
              src="/images/1.png" 
              alt="Hero image"
              className="w-full h-full object-cover"
              priority
              width={1920}
              height={1080}
              quality={85}
            />
          </picture>
        </motion.div>

        <div className="bg-[#051743] text-white py-8 md:py-12 lg:py-18 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <h2 className="hidden md:block font-gabarito text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight tracking-tight mb-6 md:mb-8">
              Where Curiosity <br /> Blossoms & Friendships Bloom
            </h2>
            <h2 className="block md:hidden font-gabarito text-[40px] leading-[120%] font-normal tracking-[-0.02em] text-white w-[400px]">
              Welcome to Our Nurturing Learning Environment
            </h2>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <p className="hidden md:block font-open-sans text-base md:text-lg leading-relaxed mb-6">
              At Holy Family Day Nursery School, children flourish in an environment <br />
              rooted in love, faith, and joyful learning. Our experienced educators <br />
              guide each child through discovery and growth—nurturing hearts and <br />
              inspiring minds.
            </p>
            <p className="block md:hidden font-open-sans text-base leading-relaxed mb-6">
              At Holy Family Day Nursery School, we create a warm and inviting atmosphere where children can thrive. Our dedicated staff fosters curiosity and growth, ensuring every child feels valued and inspired.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#0A2347] font-open-sans hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded-xl border border-white">
                Learn More
              </button>
              <button className="bg-[#1B335C] text-white font-open-sans hover:bg-[#2a4a7a] transition-all duration-300 px-4 py-2 rounded-xl">
                <span className="hidden md:inline">Contact Us</span>
                <span className="inline md:hidden">Sign Up</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="w-full bg-[#F2F2F2] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
          <motion.div 
            className="w-full lg:w-1/2 mt-0 md:mt-[120px]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <h2 className="hidden md:block font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight tracking-tight text-[#0D0B05] mb-6">
              A Community Rooted in Care, Growth & Discovery
            </h2>

            <h2 className="block md:hidden font-gabarito text-xl leading-tight tracking-tight text-[#0D0B05] mb-6"
            style={{
              fontSize: '32px',
              lineHeight: '120%',
              fontWeight: '400',
              letterSpacing: '-1%',
              color: '#0D0B05'
            }}
            >
            Welcome to a nurturing community where every child thrives and grows.
            </h2>
            <p className="hidden md:block font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05]">
              At Holy Family Day Nursery School, we do more than teach — we cultivate a space where every child is cherished, guided, and inspired. Our classrooms are filled with curiosity, laughter, and hands-on experiences that spark imagination and build confidence.
              <br /><br />
              With faith as our foundation and play as our method, we help children blossom into kind, capable learners who are ready for the world ahead. Parents and educators work together as one family — nurturing young hearts and minds every step of the way.
            </p>

            <p className="block md:hidden font-open-sans text-base leading-relaxed text-[#0D0B05]"
            style={{
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400',
              letterSpacing: '',
              color: '#0D0B05'
            }}
            >
            At Holy Family Day Nursery School, we foster a warm and inclusive environment that encourages exploration and learning. Our dedicated staff and supportive community work together to ensure that each child's unique potential is realized.            </p>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <Image 
              src="/images/2phone.png" 
              alt="Teacher with children" 
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 lg:hidden"
              width={360}
              height={348}
              quality={85}
            />
            <Image 
              src="/images/2.png" 
              alt="Teacher with children" 
              className="hidden lg:block w-[616px] h-[640px] rounded-lg shadow-lg transition-all duration-300"
              width={616}
              height={640}
              quality={85}
            />
          </motion.div>
        </div>
        <motion.div 
          className="max-w-7xl mx-auto mt-12 hidden md:block"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <Image 
            src="/images/3.gif"
            alt="Children outdoors" 
            className="w-full h-auto rounded-lg shadow-lg transition-all duration-300"
            width={1200}
            height={675}
            quality={85}
          />
        </motion.div>
      </section>

      {/* 3rd Section */}
      <section className="w-full md:bg-[#FEDA5E] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[39px] leading-tight tracking-tight text-[#0D0B05] text-center mb-12">
            <span className="hidden md:inline">Discover a Place Where Every Child Shines</span>
            <span className="inline md:hidden"
            style={{
              fontSize: '32px',
              lineHeight: '120%',
              fontWeight: '400',
              letterSpacing: '-1%',
              color: '#FFFFFF'
            }}>Discover Our <br /> Commitment to<br />  Educational Excellence <br /> and Lifelong Learning</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* First Card */}
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 block md:hidden"
                />
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 hidden md:block brightness-0"
                />
              </div>
              <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                <span className="hidden md:inline">Grow in a Nurturing and Loving Environment</span>
                <span className="block md:hidden font-gabarito text-[18px] leading-[140%] tracking-[-1%] text-white text-center">
                  Join a Vibrant Community Focused on Growth and Support
                </span>
              </h3>
              <p className="font-open-sans text-base leading-relaxed text-[#0D0B05] hidden md:block">
                We provide a warm, safe space where children feel loved, supported, and empowered to reach their full potential.
              </p>
              <p className="font-open-sans text-base leading-relaxed text-[#FFFFFF] block md:hidden mb-4">
                At Holy Family, we prioritize high-quality education that nurtures every child's potential.  
              </p>

              <div className="block md:hidden ml-3">
                <a
                  href="/aboutus"
                  className="font-open-sans font-medium text-[#FFFFFF] inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300"
                >
                  Learn More
                  <img
                    src="/images/IconoirNavArrowRight.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4 block md:hidden invert"
                  />
                </a>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 block md:hidden"
                />
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 hidden md:block brightness-0"
                />
              </div>
              <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                <span className="hidden md:inline">Develop Minds, Hearts & Faith</span>
                <span className="block md:hidden font-gabarito text-[18px] leading-[140%] tracking-[-1%] text-white text-center">
                  Experience Holistic Development Tailored to Each Child's Unique Needs
                </span>
              </h3>
              <p className="font-open-sans text-base leading-relaxed text-[#0D0B05] hidden md:block mb-6">
                Our curriculum is thoughtfully designed to support emotional, cognitive, spiritual, and social growth—guiding children to become compassionate learners and kind friends.
              </p>
              <p className="font-open-sans text-base leading-relaxed text-[#FFFFFF] block md:hidden mb-4">
                Our programs foster emotional, social, and cognitive growth for well-rounded development.
              </p>

              {/* MOBILE: Sign Up */}
              <div className="block md:hidden ml-3">
                <a
                  href="/signup"
                  className="font-open-sans font-medium text-[#FFFFFF] inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300"
                >
                  <span>Sign Up</span>
                  <img
                    src="/images/IconoirNavArrowRight.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4 invert"
                  />
                </a>
              </div>

              {/* DESKTOP: About Us */}
              <div className="hidden md:block ml-3">
                <a
                  href="/aboutus"
                  className="font-open-sans font-medium text-[#11334C] inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300"
                >
                  <span>About Us</span>
                  <img
                    src="/images/IconoirNavArrowRight.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4 text-[#11334C]"
                  />
                </a>
              </div>
            </motion.div>

            {/* Third Card */}
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 block md:hidden"
                />
                <img
                  src="/images/Iconoir3dSelectFace.svg"
                  alt="Icon"
                  className="w-12 h-12 hidden md:block brightness-0"
                />
              </div>
              <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                <span className="hidden md:inline">Partner with a Caring Community</span>
                <span className="block md:hidden font-gabarito text-[18px] leading-[140%] tracking-[-1%] text-white text-center">
                  Engage with Families Through Community Events and Activities
                </span>
              </h3>
              <p className="font-open-sans text-base leading-relaxed text-[#0D0B05] hidden md:block">
                Families are at the heart of our school. Through open communication, events, and shared values, we grow stronger together.
              </p>
              <p className="font-open-sans text-base leading-relaxed text-[#FFFFFF] block md:hidden mb-4">
                We believe in building strong relationships that enrich the learning experience.
              </p>

              <div className="block md:hidden ml-3">
                <a
                  href="/aboutus"
                  className="font-open-sans font-medium text-[#FFFFFF] inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300"
                >
                  Join Us
                  <img
                    src="/images/IconoirNavArrowRight.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4 block md:hidden invert"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section */}
      <section className="w-full bg-[#0D0B05] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <div className="mb-8">
              <h2 className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[37px] leading-tight text-white mb-8 hidden sm:block">
                Why Families Choose Holy Family Day Nursery School
              </h2>
            </div>

            <div className="mb-8">
              <p className="font-open-sans text-base md:text-lg leading-relaxed text-white mb-8 hidden sm:block">
                At Holy Family, we believe every child is a unique gift. In our loving, faith-based environment, your child will be supported in every step of their early learning journey—growing in confidence, compassion, and creativity.<br /><br />
                Our nurturing team tailors every experience to each child's needs, ensuring joyful learning that builds strong foundations for life.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="w-full font-gabarito text-[32px] md:text-3xl lg:text-4xl xl:text-[37px] leading-tight text-white mb-8 sm:hidden">
                  Discover the <br /> Exceptional Benefits of Enrolling at Holy Family Day Nursery School    
                </h2>
              </div>
              
              <div className="mb-8">
                <p className="font-open-sans text-base md:text-lg leading-relaxed text-white mb-8 sm:hidden">
                  At Holy Family Day Nursery School, your child will thrive in a nurturing environment that fosters growth and creativity. Our dedicated staff is committed to providing personalized attention to each child's unique learning journey.
                </p>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div className="sm:hidden" variants={fadeInUp}>
                <div className="mb-4">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Whole-Child Approach Icon" className="w-8 h-8" />
                </div>
                <h3 className="font-gabarito font-bold text-xl text-white mb-2">
                  Holistic Development
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-white">
                  We focus on emotional, social, and cognitive growth for well-rounded development.
                </p>
              </motion.div>

              <motion.div className="hidden sm:block" variants={fadeInUp}>
                <div className="mb-4">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Whole-Child Approach Icon" className="w-8 h-8" />
                </div>
                <h3 className="mb-4 font-gabarito font-bold text-xl text-white mb-2">
                  Whole-Child Approach
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-white">
                  We care for the heart, mind, body, and spirit—supporting emotional, social, cognitive, and spiritual development.
                </p>
              </motion.div>

              <motion.div className="sm:hidden" variants={fadeInUp}>
                <div className="mb-4">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Playful, Purposeful Learning Icon" className="w-8 h-8" />
                </div>
                <h3 className="font-gabarito font-bold text-xl text-white mb-2">
                  Engaging Curriculum
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-white">
                  Our curriculum blends play and learning, sparking curiosity and a love for education.
                </p>
              </motion.div>

              <motion.div className="hidden sm:block" variants={fadeInUp}>
                <div className="mb-3">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Playful, Purposeful Learning Icon" className="w-8 h-8" />
                </div>
                <h3 className="mb-4 font-gabarito font-bold text-xl text-white mb-2">
                  Playful, Purposeful Learning
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-white">
                  Our curriculum blends hands-on activities, early academics, and creative exploration that keeps little minds curious and engaged.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <picture>
              <source srcSet="/images/4phone.png" media="(max-width: 767px)" />
              <img
                src="/images/4.png"
                alt="Children and teacher at table"
                className="w-[360px] h-[348px] sm:w-[616px] sm:h-[640px] object-cover rounded-lg shadow-lg"
              />
            </picture>
          </motion.div>
        </div>
      </section>

      {/* 5th Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <h2 className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight text-[#0D0B05] mb-6">
              <span className="block md:hidden text-[36px]">Discover Our Enriching Programs</span>
              <span className="hidden md:block">Explore Our Joyful, Faith-Filled Programs</span>
            </h2>
            
            <p className="font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05] mb-4">
              <span className="block md:hidden text-[17px]">Explore our diverse educational offerings and schedule a visit to see our nurturing environment.</span>
              <span className="hidden md:block">At Holy Family Day Nursery School, every program is designed to spark imagination, encourage kindness, and build strong foundations in learning and life.</span>
            </p>
            
            <p className="font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05] mb-8">
              <span className="hidden md:block">From early academics and STEAM activities to faith-based values and social development, our curriculum supports the whole child in a nurturing, play-rich environment.</span>
            </p>

            <div className="flex gap-4">
              <button className="bg-[#071D54] text-white font-open-sans font-semibold px-4 py-2 rounded-xl hover:bg-[#0a2a6e] transition-all duration-300">
                Learn More
              </button>
              <button className="bg-[#0D0B050D] text-[#0D0B05] font-open-sans font-semibold px-4 py-2 rounded-xl hover:bg-[#0D0B051A] transition-all duration-300">
                <span className="hidden md:inline">Contact Us</span>
                <span className="inline md:hidden">Visit Us </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <picture>
              <source srcSet="/images/5phone.png" media="(max-width: 767px)" />
              <img
                src="/images/5.png"
                alt="Holy Family Nursery School Entrance"
                className="w-[350px] h-[218px] sm:w-[698px] sm:h-[382px] sm:rounded-none rounded-lg shadow-lg"
              />
            </picture>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

