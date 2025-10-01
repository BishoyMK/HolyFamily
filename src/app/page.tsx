import Image from "next/image";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1st Section */}
      <section className="w-full relative">
        <Reveal direction="up">
          <div className="w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] relative">
            <Image
              src="/images/1.png"
              alt="Hero image"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
        <div className="bg-[#051743] text-white py-8 md:py-12 lg:py-18 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <Reveal direction="left">
              <h2
                className="font-gabarito text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight tracking-tight mb-[-30px] ms:mb-6 md:mb-8 transition-all duration-300"
              >
                Where Curiosity <br /> Blossoms & Friendships Bloom
              </h2>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal delay={100} direction="right">
              <p
                className="font-open-sans text-base md:text-lg leading-relaxed mb-6 transition-all duration-300 mt-5"
              >
                At Holy Family Day Nursery School, children flourish in an environment <br /> rooted in love, faith, and joyful learning. Our experienced educators <br /> guide each child through discovery and growth—nurturing hearts and <br /> inspiring minds.
              </p>
            </Reveal>
            <Reveal delay={200} direction="up">
              <div className="flex gap-4">
                <button
                  className="bg-white text-[#0A2347] font-open-sans hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded-xl border border-white"
                >
                  Learn More
                </button>
                <button
                  className="bg-[#1B335C] text-white font-open-sans hover:bg-[#2a4a7a] transition-all duration-300 px-4 py-2 rounded-xl"
                >
                  Contact Us
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="w-full bg-[#F2F2F2] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 ">
            <Reveal direction="left">
              <h2
                className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight tracking-tight text-[#0D0B05] mb-6 transition-all duration-300 "
              >
                A Community Rooted in Care, Growth & Discovery
              </h2>
            </Reveal>
            <Reveal delay={100} direction="right">
              <p
                className="font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05] transition-all duration-300"
              >
                At Holy Family Day Nursery School, we do more than teach — we cultivate a space where every child is cherished, guided, and inspired. Our classrooms are filled with curiosity, laughter, and hands-on experiences that spark imagination and build confidence.
                <br /><br />
                With faith as our foundation and play as our method, we help children blossom into kind, capable learners who are ready for the world ahead. Parents and educators work together as one family — nurturing young hearts and minds every step of the way.
              </p>
            </Reveal>
          </div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={150} direction="up">
              <img 
                src="/images/2.png" 
                alt="Teacher with children" 
                className="sm:w-full sm:h-[450px] h-auto w-full rounded-lg shadow-lg transition-all duration-300 max-w-[616px] lg:max-w-none mx-auto"
              />
            </Reveal>
          </div>
        </div>
        {/* Bottom: Full-width image */}
        <div className="max-w-7xl mx-auto mt-12">
          <Reveal direction="up">
            <img 
              src="/images/3.gif"
              alt="Children outdoors" 
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 sm:mt-30"
            />
          </Reveal>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="w-full bg-[#FEDA5E] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <h2
              className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[39px] leading-tight tracking-tight text-[#0D0B05] text-center mb-12 transition-all duration-300"
            >
              Discover a Place Where Every Child Shines
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1 */}
            <div className="text-center p-6 transition-all duration-300">
              <Reveal direction="up">
                <div className="mb-6 flex justify-center">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Icon" className="w-12 h-12 filter brightness-0" />
                </div>
                <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                  Grow in a Nurturing and Loving Environment
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-[#0D0B05]">
                  We provide a warm, safe space where children feel loved, supported, and empowered to reach their full potential.
                </p>
              </Reveal>
            </div>
            {/* Column 2 */}
            <div className="text-center p-6 transition-all duration-300">
              <Reveal delay={100} direction="up">
                <div className="mb-6 flex justify-center">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Icon" className="w-12 h-12 filter brightness-0" />
                </div>
                <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                  Develop Minds, Hearts & Faith
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-[#0D0B05] mb-4">
                  Our curriculum is thoughtfully designed to support emotional, cognitive, spiritual, and social growth—guiding children to become compassionate learners and kind friends.
                </p>
                <a
                  href="/aboutus"
                  className="font-open-sans font-medium text-[#11334C] inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300"
                >
                  About Us
                  <img
                    src="/images/IconoirNavArrowRight.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4"
                  />
                </a>
              </Reveal>
            </div>
            {/* Column 3 */}
            <div className="text-center p-6 transition-all duration-300">
              <Reveal delay={200} direction="up">
                <div className="mb-6 flex justify-center">
                  <img src="/images/Iconoir3dSelectFace.svg" alt="Icon" className="w-12 h-12 filter brightness-0" />
                </div>
                <h3 className="font-gabarito font-semibold text-xl text-[#0D0B05] mb-4">
                  Partner with a Caring Community
                </h3>
                <p className="font-open-sans text-base leading-relaxed text-[#0D0B05]">
                  Families are at the heart of our school. Through open communication, events, and shared values, we grow stronger together.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4th Section */}
      <section className="w-full bg-[#0D0B05] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          {/* Left side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Reveal direction="left">
              <h2 className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[37px] leading-tight text-white mb-8 transition-all duration-300">
                Why Families Choose Holy Family Day Nursery School
              </h2>
            </Reveal>
            <Reveal delay={100} direction="right">
              <p className="font-open-sans text-base md:text-lg leading-relaxed text-white mb-8 transition-all duration-300">
                At Holy Family, we believe every child is a unique gift. In our loving, faith-based environment, your child will be supported in every step of their early learning journey—growing in confidence, compassion, and creativity.<br /><br />
                Our nurturing team tailors every experience to each child&#39;s needs, ensuring joyful learning that builds strong foundations for life.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="transition-all duration-300">
                <Reveal direction="up">
                  <div className="mb-4">
                    <img src="/images/Iconoir3dSelectFace.svg" alt="Whole-Child Approach Icon" className="w-8 h-8" />
                  </div>
                  <h3 className="font-gabarito font-bold text-xl text-white mb-2">
                    Whole-Child Approach
                  </h3>
                  <p className="font-open-sans text-base leading-relaxed text-white">
                    We care for the heart, mind, body, and spirit—supporting emotional, social, cognitive, and spiritual development.
                  </p>
                </Reveal>
              </div>
              {/* Feature 2 */}
              <div className="transition-all duration-300">
                <Reveal delay={100} direction="up">
                  <div className="mb-4">
                    <img src="/images/Iconoir3dSelectFace.svg" alt="Playful, Purposeful Learning Icon" className="w-8 h-8" />
                  </div>
                  <h3 className="font-gabarito font-bold text-xl text-white mb-2">
                    Playful, Purposeful Learning
                  </h3>
                  <p className="font-open-sans text-base leading-relaxed text-white">
                    Our curriculum blends hands-on activities, early academics, and creative exploration that keeps little minds curious and engaged.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          {/* Right side: Image */}
          <div className="w-full lg:w-1/2">
            <Reveal direction="up">
              <img
                src="/images/4.png"
                alt="Children and teacher at table"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 max-w-[616px] lg:max-w-none mx-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5th Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          {/* Left Part */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Reveal direction="left">
              <h2 className="font-gabarito text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight text-[#0D0B05] mb-6 transition-all duration-300">
                Explore Our Joyful, Faith-Filled Programs
              </h2>
            </Reveal>
            <Reveal delay={100} direction="right">
              <p className="font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05] mb-4 transition-all duration-300">
                At Holy Family Day Nursery School, every program is designed to spark imagination, encourage kindness, and build strong foundations in learning and life.
              </p>
            </Reveal>
            <Reveal delay={150} direction="up">
              <p className="font-open-sans text-base md:text-lg leading-relaxed text-[#0D0B05] mb-8 transition-all duration-300">
                From early academics and STEAM activities to faith-based values and social development, our curriculum supports the whole child in a nurturing, play-rich environment.
              </p>
            </Reveal>
            <Reveal delay={200} direction="up">
              <div className="flex gap-4">
                <button className="bg-[#071D54] text-white font-open-sans font-semibold px-4 py-2 rounded-xl hover:bg-[#0a2a6e] transition-all duration-300">
                  Learn More
                </button>
                <button className="bg-[#0D0B050D] text-[#0D0B05] font-open-sans font-semibold px-4 py-2 rounded-xl hover:bg-[#0D0B051A] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </Reveal>
          </div>
          {/* Right Part */}
          <div className="w-full lg:w-1/2">
            <Reveal direction="up">
              <img
                src="/images/5.png"
                alt="Holy Family Nursery School Entrance"
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 max-w-[616px] lg:max-w-none mx-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

