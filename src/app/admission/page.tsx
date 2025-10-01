'use client'

import Image from "next/image";
import Reveal from "../../components/Reveal";

export default function Admission() {

  return (
    <>
      <div className="w-full overflow-hidden">
        {/* 1st Section */}
        <section
          className="relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[515px] px-4 md:px-16 py-12 md:py-28 flex flex-col items-center justify-center gap-8 md:gap-20 transition-all duration-300"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/1.png"
              alt="Holy Family Nursery School Building"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[960px] flex flex-col items-center justify-start text-center px-4">
            <Reveal direction="up">
              <h1 className="w-full text-3xl md:text-5xl font-gabarito font-normal leading-[120%] tracking-tight text-white mb-5 transition-all duration-300">
                Key Features of Our Enrollment Process
              </h1>
            </Reveal>
            <Reveal delay={100} direction="up">
              <p className="w-full text-base md:text-lg font-open-sans font-normal leading-[150%] text-white transition-all duration-300">
                We welcome children aged 2.5 to 4 years, ready to embark on their learning journey. To ensure a successful transition, we ask that children are toilet-trained and able to self-feed. Our nurturing team is here every step of the way to support your child&#39;s readiness and confidence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2nd Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#051743] flex flex-col gap-10 md:gap-20 text-white transition-all duration-300">
          {/* Top Text Block */}
          <div className="w-full max-w-[768px] flex flex-col gap-6">
            <Reveal direction="left">
              <div className="flex items-start gap-4 font-gabarito text-3xl md:text-4xl font-normal leading-[120%] tracking-tight">
                <span role="img" aria-label="calendar" className="text-4xl md:text-5xl">📅</span>
                <div className="flex flex-col">
                  <span>Academic Year + Summer</span>
                  <span>Program</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} direction="right">
              <p className="font-open-sans text-base md:text-lg font-normal leading-[150%]">
                Children enjoy a full 10-month academic year, with an optional August program to extend summer fun and learning.
              </p>
            </Reveal>
          </div>

          {/* Bottom Info Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Uniform Policy */}
            <div className="max-w-[400px]">
              <Reveal direction="up">
                <h3 className="font-gabarito text-2xl md:text-3xl font-normal leading-[130%] tracking-tight mb-4">
                  Uniform Policy
                </h3>
              </Reveal>
              <Reveal delay={100} direction="up">
                <p className="font-open-sans text-base leading-[150%]">
                  All children wear a simple school uniform, helping build a sense of unity, comfort, and routine.
                </p>
              </Reveal>
            </div>

            {/* Ready to Enroll */}
            <div className="max-w-[400px]">
              <Reveal direction="up">
                <h3 className="font-gabarito text-2xl md:text-3xl font-normal leading-[130%] tracking-tight mb-4">
                  Ready to Enroll?
                </h3>
              </Reveal>
              <Reveal delay={100} direction="up">
                <p className="font-open-sans text-base leading-[150%]">
                  Call us at <strong>973-235-1170</strong> for help with the registration process, or drop by to visit our friendly staff in person.
                </p>
              </Reveal>
            </div>

            {/* Daily Hours */}
            <div className="max-w-[400px]">
              <Reveal direction="up">
                <h3 className="font-gabarito text-2xl md:text-3xl font-normal leading-[130%] tracking-tight mb-4">
                  Discover Our Daily Hours
                </h3>
              </Reveal>
              <Reveal delay={100} direction="up">
                <p className="font-open-sans text-base leading-[150%]">
                  Our program runs 8:30 AM to 3:30 PM, Monday <br/> through Friday. For busy families, we also offer <br/>extended hours from 7:00 AM to 5:30 PM to fit your<br/> schedule.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3rd Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#FEFBEE] transition-all duration-300">
          <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-start gap-10 md:gap-20 mt-[-40px] sm:mt-0">
            {/* Left: Text */}
            <div className="flex-1 min-w-[340px]">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-gabarito font-normal leading-[120%] tracking-tight text-[#0D0B05] mb-6 mt-10 ">
                  Nourishing Young Minds Through Healthy Meals
                </h2>
              </Reveal>
              <Reveal delay={100} direction="right">
                <p className="text-base md:text-lg font-open-sans leading-[150%] text-black">
                  We&#39;re committed to nutrition and mealtime care. Every day, children enjoy a hot lunch and afternoon snack, served with safety and love.
                  <br />
                  • 🍎 Healthy Meals: Fresh, balanced meals tailored to your child&#39;s needs.
                  <br />
                  • ✅ Dietary Care: We accommodate allergies and restrictions, ensuring every child eats safely.
                </p>
              </Reveal>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
              <Reveal direction="up">
                <img 
                  src="/images/add1.png" 
                  alt="Teacher with children" 
                  className="w-full h-auto max-w-[616px] rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4th Section */}
        <section className="w-full py-16 md:py-28 px-4 md:px-16 bg-[#0D0B05] transition-all duration-300">
          <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            {/* Left: Text */}
            <div className="flex-1 min-w-[340px] lg:max-w-[616px]">
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
            </div>
            {/* Right: Image */}
            <div className="flex-1 w-full lg:max-w-[616px] aspect-[4/3] relative rounded-lg shadow-lg">
              <Image 
                
                src="/images/add2.png" 
                alt="Teacher with children" 
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 616px"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
