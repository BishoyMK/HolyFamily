'use client';

import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer,
  defaultViewport, 
  scaleUp,
} from '@/components/animations';

export default function Programs() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1st Section */}
      <section className="relative">
        <div className="relative w-full h-[450px] pt-[112px] px-4 md:px-[64px] pb-[112px] text-white flex items-start transition-all duration-300">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/prog1.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-35 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full">
            <motion.div 
              className="max-w-[768px]"
              initial="hidden"
              whileInView="visible"
            
            
            >
              <p 
                className="text-white font-semibold mb-2 text-[16px] transition-all duration-300"
              >
                Explore
              </p>
              <h2 
                className="text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] mb-4 transition-all duration-300">
                Our Enriching Programs
              </h2>
              <p 
                className="text-[16px] md:text-[18px] leading-[150%] mb-6 transition-all duration-300"
                >
                Discover a world of learning with our diverse programs designed for every child's growth.
              </p>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={fadeInUp}
              >
                {[
                  { href: "#curriculum", text: "Curriculum" },
                  { href: "#lifeskills", text: "Life Skills" },
                  { href: "#steam", text: "S.T.E.A.M." },
                  { href: "#august", text: "August Program" },
                  { href: "#afterschool", text: "After School Activities" }
                ].map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="bg-white text-black font-semibold border border-solid border-gray-300 px-4 py-1.5 rounded-xl transition-all duration-300 text-sm md:text-base"
                    variants={scaleUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="bg-[#FEFBEE] py-16 px-4 md:px-8 lg:px-16 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
          {/* Left: Icon, Heading, and Text */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            {/* Icon: Two children holding hands */}
            <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8">
              <path d="M35.7489 11.5029C38.5547 11.5029 40.8293 9.22836 40.8293 6.42252C40.8293 3.61668 38.5547 1.3421 35.7489 1.3421C32.943 1.3421 30.6685 3.61668 30.6685 6.42252C30.6685 9.22836 32.943 11.5029 35.7489 11.5029Z" fill="black"/>
              <path d="M48.6956 26.8982L40.8768 13.4776C40.5023 12.8348 39.7417 12.3804 39.1686 12.3804C39.0311 12.3804 32.6506 12.3804 32.5133 12.3804C31.9402 12.3804 31.1796 12.8348 30.8051 13.4776L24.9141 23.5892L18.3746 12.3644C17.9584 11.6499 17.2069 11.2538 16.4352 11.2552C16.421 11.2543 16.407 11.2531 16.3926 11.2531H10.1054C10.091 11.2531 10.077 11.2543 10.0628 11.2552C9.29116 11.2537 8.53975 11.6498 8.12342 12.3644L0.304496 25.7849C-0.317469 26.8523 0.0437717 28.2218 1.11121 28.8438C1.46548 29.0502 1.85287 29.1483 2.23522 29.1483C3.00518 29.1483 3.75456 28.7503 4.17013 28.0371L7.6188 22.1176V24.652L6.07535 35.7737C5.94537 36.7105 6.6731 37.5463 7.61891 37.5463V44.3539C7.61891 45.6339 8.61422 46.724 9.8933 46.7696C11.2362 46.8174 12.3401 45.7429 12.3401 44.4105V37.5462H14.2052V44.3538C14.2052 45.6339 15.2005 46.724 16.4798 46.7695C17.8227 46.8172 18.9263 45.7427 18.9263 44.4104V37.5461C19.8721 37.5461 20.5998 36.7103 20.4698 35.7735L18.9263 24.6516V22.1986L22.3276 28.0369C22.4433 28.2354 23.2464 29.6385 23.7928 29.9569C24.1471 30.1632 24.5345 30.2613 24.9168 30.2613C25.6868 30.2613 26.4361 29.8635 26.8517 29.1502L30.2032 23.3974L30.1709 43.1976C30.1709 44.5013 31.2276 45.5581 32.5314 45.5581C32.5368 45.5581 32.5421 45.5574 32.5476 45.5573C32.553 45.5573 32.5583 45.5581 32.5638 45.5581C33.8676 45.5581 34.9245 44.5013 34.9245 43.1976L34.8921 31.2504C34.8921 30.7538 35.2669 30.3201 35.7626 30.288C36.3057 30.2529 36.7572 30.6829 36.7572 31.2185V43.1409C36.7572 44.4208 37.7525 45.511 39.0316 45.5566C40.3745 45.6044 41.4784 44.5299 41.4784 43.1976V23.3976L44.8299 29.1503C45.2454 29.8636 45.9948 30.2615 46.7648 30.2615C47.1471 30.2615 47.5346 30.1633 47.8888 29.957C48.9563 29.335 49.3175 27.9655 48.6956 26.8982Z" fill="black"/>
              <path d="M5.30882 10.2888L6.56636 10.1767C7.28949 10.1123 7.79915 9.43633 7.65759 8.72414C7.44176 7.6358 7.36718 6.12537 8.27076 5.19135C8.2698 5.23067 8.26776 5.26968 8.26776 5.30912C8.26776 8.11482 10.5424 10.3894 13.3481 10.3894C16.1537 10.3894 18.4283 8.11482 18.4283 5.30912C18.4283 5.26968 18.4262 5.23067 18.4252 5.19135C19.3289 6.12547 19.2542 7.6358 19.0382 8.72414C18.897 9.43633 19.4064 10.1123 20.1296 10.1767L21.387 10.2888C22.0517 10.3481 22.6409 9.86434 22.7121 9.20079C22.8851 7.58962 22.855 5.17238 21.9438 4.21253C20.5988 2.79575 18.9354 2.78139 17.8607 2.97675C17.0157 1.34479 15.3128 0.228699 13.3482 0.228699C11.3836 0.228699 9.68058 1.34468 8.8354 2.97675C7.76089 2.7815 6.0971 2.79575 4.75233 4.21253C3.84135 5.17238 3.81124 7.58973 3.98388 9.20079C4.05514 9.86434 4.64421 10.3481 5.30882 10.2888Z" fill="black"/>
            </svg>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-8 transition-all duration-300 text-[#000000]">
              Explore Our Engaging Programs
            </h2>
            {/* Paragraphs */}
            <p className="text-[16px] md:text-[18px] leading-[150%] mb-6 transition-all duration-300 text-[#000000]">
              Holy Family Day Nursery School offers a program which consists of Full-Day Nursery (2.5 years old), Pre - K 3 and Pre- K 4 Classes. Children are accepted between the ages of 2 ½ through 4 years.
            </p>
            <p className="text-[16px] md:text-[20px] leading-[150%] transition-all duration-300 text-[#000000]">
              The curriculum consists of both active and quiet activities. Time is allotted for sharing, songs, dance, stories, gross and fine motor activities, auditory discrimination, visual perception awareness, sense-perceptual development, preparatory reading, language, mathematics, Life Skills and writing skills, as well as arts and crafts. S.T.E.A.M. activities are integrated into the curriculum. Daily, time is set aside for creative play and the children have access to an outdoor environment.
            </p>
          </motion.div>
          {/* Right: Image */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <img 
              src="/images/prog2.png" 
              alt="Teacher with children" 
              className="md:w-[616px] md:h-[442px] md:mt-[75px] md:mb-[75px] w-full h-auto object-cover rounded-lg transition-all duration-300" 
            />
          </motion.div>
        </div>
      </section>

      {/* 3rd Section */}
      <section id="curriculum" className="bg-[#051743] py-16 px-4 md:px-8 lg:px-16 transition-all duration-300">
        <div className=" max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-start md:mt-[75px]">
          {/* Left: Heading, and Text */}
          <motion.div 
            className="flex-1 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-8 transition-all duration-300 md:mb-[70px]">
              CURRICULUM
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[150%] transition-all duration-300">
              Utilizing a hands-on approach to learning, our school's curriculum offers our students daily challenges to explore and discover the world around them through problem solving and critical thinking. Each level, Nursery, Pre-K 3 and Pre-K 4 offer opportunities for practicing self-care, fine and gross motor skills, and physical well-being plus developing and fine-tuning language skills through poetry, song and stories. The curriculum is designed to develop self-confidence and self-awareness in preparation for the future. Lessons are presented individually, in small groups and whole groups by qualified teachers. Children are then allowed to continue working independently at their own rate. Subject matter is drawn from the learning standards: mathematics, reading, language arts, religion, science, social studies, music, art and more. Subjects are blended to present well-balanced lessons. Monthly themes lead the path of learning and material presentations. The school is well equipped with a multitude of educational materials. Whole group activities encourage social- emotional development through using communication skills to interact with peers, following directions and so much more.
            </p>
          </motion.div>
          {/* Right: Image */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <img 
              src="/images/prog3.png" 
              alt="Teacher with children" 
              className=" md:w-[616px] md:h-[640px]   w-full h-auto object-cover rounded-lg transition-all duration-300" 
            />
          </motion.div>
        </div>
      </section>

      {/* 4th Section */}
      <section className="bg-[#051743] py-16 px-4 md:px-8 lg:px-16 transition-all duration-300">
        <motion.div 
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {[
            { src: "/images/prog4.png", alt: "Alphabet Activity" },
            { src: "/images/prog5.png", alt: "Group Learning" },
            { src: "/images/prog6.png", alt: "Counting Activity" }
          ].map((image, index) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-[300px] md:h-[416px] object-cover rounded-lg transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </motion.div>
      </section>

      {/* 5th Section - Life Skills */}
      <section id="lifeskills" className="bg-[#051743] py-16 px-4 md:px-8 lg:px-16 text-white transition-all duration-300">
        <motion.div 
          className="max-w-[768px] mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-4 transition-all duration-300">
            LIFE SKILLS
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[150%] transition-all duration-300">
            Holy Family Day Nursery School's Life Skills activities are incorporated into our very busy day at all levels. The goal of introducing Life Skills activities is to afford the opportunity to the students to master everyday skills that will be utilized throughout their lives. These everyday, practical skills help support the development of coordination, classification, concentration, and self-sufficiency.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {[
            { src: "/images/prog7.png", alt: "Life Skill Activity 1" },
            { src: "/images/prog8.png", alt: "Life Skill Activity 2" },
            { src: "/images/prog9.png", alt: "Life Skill Activity 3" }
          ].map((image, index) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-[300px] md:h-[416px] object-cover rounded-lg transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </motion.div>
      </section>

      {/* 6th Section - S.T.E.A.M. */}
      <section id="steam" className="bg-[#FEDA5E] py-16 px-4 md:px-8 lg:px-16 text-[#000000] transition-all duration-300">
        <motion.div 
          className="max-w-[768px] mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-4 transition-all duration-300">
            S.T.E.A.M.
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[150%] transition-all duration-300">
            S.T.E.A.M. (is an acronym for Science, Technology, Engineering, Art, Mathematics) gives a new name to what we at Holy Family Day Nursery School have been doing for many years… helping children to explore, observe, ask questions, predict, problem-solve, by integrating and applying their learning to real-life situations.
            <br /><br />
            Young children are great explorers. They learn through play and using various materials made available to them in our well-equipped classrooms. Allowing the younger students to explore, create and problem-solve helps develop their thinking skills for future application. Part of that creativity is expressed through art.
            <br /><br />
            The older students actively engage in cooperative group problem-solving through collaboration utilizing known and newly acquired means of communication.
            <br /><br />
            Our goal is to promote academic growth and development of critical thinking and reasoning skills in the hopes they will lead our students toward future S.T.E.A.M. studies.
            <br /><br />
            Becoming innovators, inventors, and problem-solvers will lead our students to 21st-century careers.
          </p>
        </motion.div>
      </section>

      {/* 7th Section - August Orientation Program */}
      <section id="august" className="bg-[#051743] py-16 px-4 md:px-8 lg:px-16 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
          {/* Top Text Block */}
          <div className="text-white">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-8 transition-all duration-300">
              August Orientation Program
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[150%] transition-all duration-300">
              All students newly enrolled at Holy Family Day Nursery School are encouraged to attend a minimum of two of the four weeks of the Summer Orientation Program. New students are welcome and encouraged to attend three or even all four weeks of the Summer Orientation Program. The Orientation Program is conducted during the month of August each year.
              <br /><br />
              The Summer Orientation Program is designed to assist new students with the adjustment period of beginning a new school and making new friendships. It is a fun-filled introduction to the routine of the school. The outdoor environment plays a great part in this program. Teachers are encouraged to incorporate the outdoors into their daily curriculum. Picnic lunches, outdoor science exploration and playing are all exciting experiences.
              <br /><br />
              The Summer Program curriculum is based on a specially prepared theme. Each class develops unique studies into the chosen theme. The students spend more time enjoying constructing arts and craft projects, participating in music and movement activities contributing to language development, building social skills while developing new friendships.
              <br /><br />
              This is a wonderful opportunity for adjustment for both children starting out in their education and for transfer students to get to learn about their new school, the staff, and the Franciscan Sisters of St. Elizabeth who conduct the school.
              <br /><br />
              The hours of operation for the Summer Program are the same as the regular academic year (7:00 AM – 5:30 PM) while the daily classroom schedules are often adapted to the specific studies and activities at hand. Summer Program dates and information are included in the initial registration packets for students registering prior to the beginning of each new school year.
              <br /><br />
              The Summer Program is open to new and present students plus those Pre-K 4 students who have graduated from Holy Family Day Nursery School and are moving on to new schools for Kindergarten.
            </p>
          </div>

          {/* Image Block */}
          <div>
            <img
              src="/images/prog10.png"
              alt="Playground with toy houses"
              className="w-full h-auto object-cover rounded-lg transition-all duration-300 w-[360px] h-[348px] md:w-[1312px] md:h-[727px]"
            />
          </div>
        </div>
      </section>

      {/* 8th Section - After School Activities */}
      <section id="afterschool" className="bg-[#0D0B05] py-16 px-4 md:px-8 lg:px-16 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          {/* Left Column: Text and Buttons */}
          <div className="flex-1 text-white">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-8 transition-all duration-300">
              AFTER<br />SCHOOL<br />ACTIVITIES
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[150%] mb-8 transition-all duration-300">
              Kids Dance Caravan - Extreme Edge Martial Arts
            </p>
            <div className="flex gap-4">
              <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md transition-all duration-300">
                Learn More
              </button>
              <button className="bg-[#1C1B1A] text-white px-4 py-2 rounded-md transition-all duration-300">
                Contact
              </button>
            </div>
          </div>

          {/* Middle Image */}
          <div className="flex-1">
            <img
              src="/images/prog11.png"
              alt="Kids Dance Performance"
              className="w-full h-[338px] object-cover rounded-lg transition-all duration-300"
            />
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/images/prog12.png"
              alt="Martial Arts"
              className="w-full h-[338px] object-cover rounded-lg transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
