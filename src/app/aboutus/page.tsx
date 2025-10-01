import Reveal from "../../components/Reveal";

export default function AboutUs() {
  return (
    <div className="w-full animate-fadeIn">
      {/* 1st Section */}
      <section className="bg-[#fdf7ea] py-6 md:py-12 px-4 md:px-8 lg:px-16 animate-slideUp min-h-screen">
        {/* Upper Section */}
        <div className="max-w-7xl mx-auto animate-fadeIn">
          <Reveal direction="up">
            <h1
              className="mx-auto mb-4 font-normal text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] leading-[120%] text-center animate-slideUp"
              style={{
                fontFamily: 'Gabarito, sans-serif',
                letterSpacing: '-1%',
                color: '#0D0B05',
              }}
            >
              Welcome to Our Nurturing <br /> Learning Environment
            </h1>
          </Reveal>
          <Reveal delay={100} direction="right">
            <p
              className="mx-auto mb-6 text-center font-normal text-base md:text-lg leading-[150%] animate-fadeIn max-w-3xl"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 400,
                color: '#0D0B05',
              }}
            >
              I invite you and your children to join our community of learning and love. The teachers and I believe in the dignity of each and every child. We are dedicated to the student&#39;s<br /> intellectual, personal, moral, social, and religious development. All of our teachers have<br /> training in both &quot;traditional&quot; educational practices and Montessori Pedagogy.
            </p>
          </Reveal>
          <Reveal delay={200} direction="up">
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp">
              <button
                className="bg-blue-900 text-white border border-blue-900 rounded-[12px] flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-4 py-2 w-full sm:w-auto"
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#071D54',
                }}
              >
                Learn More
              </button>

              <button
                className="rounded-[12px] flex items-center justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-4 py-2 w-full sm:w-auto"
                style={{
                  color: '#0D0B05',
                  backgroundColor: '#0D0B050D',
                }}
              >
                Contact
              </button>         
             </div>
          </Reveal>
        </div>
        {/* Lower Section */}
        <Reveal delay={250} direction="up">
          <div
            className="w-full overflow-x-auto hide-scrollbar scroll-smooth mt-8 md:mt-16 animate-fadeIn"
          >
            <div className="flex flex-col gap-4 min-w-max">
            {/* Upper row: first 5 images */}
            <div className="flex gap-4">
              <img src="images/About1.png" alt="Kids playing" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About2.png" alt="Teacher and child" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About3.png" alt="Children with blocks" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About4.png" alt="Classroom" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About5.png" alt="Kids drawing" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
            </div>
            {/* Lower row: last 4 images */}
            <div className="flex gap-4">
              <img src="images/About6.png" alt="Child art" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About7.png" alt="Classroom numbers" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About8.png" alt="Teacher with toddlers" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
              <img src="images/About9.png" alt="Teacher with toddlers" className="w-[416px] h-[340px] object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" />
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      {/* 2nd Section */}
      <section
        className="w-full bg-[#051743] py-8 md:py-16 px-4 md:px-8 lg:px-16 animate-slideUp min-h-screen"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center animate-fadeIn sm:mt-10 mt-[20px]" >
          <div className="w-full lg:w-1/2 animate-slideUp">
            <div className="text-white font-['Open_Sans'] max-w-xl">
              <Reveal direction="right">
                <p className="text-base md:text-lg mb-8 animate-fadeIn">
                  At Holy Family Day Nursery School, we are dedicated to nurturing the whole child. Our mission is to provide a safe, loving environment that fosters growth, creativity, and lifelong learning.
                </p>
              </Reveal>
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-['Gabarito'] mb-4 animate-slideUp">
                  Our Mission
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-base md:text-lg animate-fadeIn">
                  The mission of Holy Family Day Nursery School is to provide a warm, caring, safe and inspiring Catholic based early childhood educational environment for children, ages 2.5 - 5.<br />
                  A highly qualified staff, including full-time teaching religious sisters and auxiliary staff, provide an environment designed to nurture the whole child encouraging each child&#39;s development by providing hands-on, developmentally appropriate educational activities to meet the needs of each individual child in the areas of physical, social, emotional and intellectual growth leading them to become life-long learners.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slideUp">
            <Reveal direction="up">
              <img
                src="images/About10.png"
                alt="Teacher and child playing"
                className="w-full h-auto sm:h-[550px] sm:w-[616px] max-w-[616px] mx-auto object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3rd Section */}
      <section
        className="w-full bg-[#FEDA5E] py-8 md:py-16 px-4 md:px-8 lg:px-16 animate-slideUp min-h-screen"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 items-center animate-fadeIn sm:mt-10 mt-[20px]" >
          <div className="w-full lg:w-1/2 animate-slideUp">
            <div className="text-[#000000]">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-['Gabarito'] mb-4 animate-slideUp">
                  Our Vision
                </h2>
              </Reveal>
              <Reveal delay={100} direction="right">
                <p className="text-base md:text-lg mb-6 animate-fadeIn">
                  The vision of Holy Family Day Nursery School is to serve our community with a quality educational program for early childhood level children. Motivated to serve, the Sisters and staff allow the children the freedom to experience and acquire knowledge through the exploration and discovery mode of learning; challenging each child to grow and develop into well-rounded, self-disciplined individuals who have a creative spirit freed through a positive self-image.
                </p>
              </Reveal>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-fadeIn"
              >
                Contact Us
                <img
                  src="/images/IconoirNavArrowRight.svg"
                  alt="Arrow Icon"
                  className="w-4 h-4 transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slideUp">
            <Reveal direction="up">
              <img
                src="images/About11.png"
                alt="Teacher and child playing"
                className="w-full h-90 sm:h-[550px] sm:w-[616px] mx-auto object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4th Section */}
      <section
        className="w-full bg-[#0D0B05] py-8 md:py-16 px-4 md:px-8 lg:px-16 animate-slideUp min-h-screen"
      >
        <div className="max-w-7xl mx-auto animate-fadeIn mt-5" >
          {/* Upper section: heading and intro paragraph */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-1/2 animate-slideUp">
              <Reveal direction="left">
                <h2 className="text-2xl md:text-3xl lg:text-[36px] font-['Gabarito'] text-white mb-4">
                  OUR HISTORY
                </h2>
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2 animate-fadeIn lg:mr-[70px]">
              <Reveal delay={100} direction="right">
                <p className="text-base md:text-lg text-white">
                  Founded with a commitment to nurturing young minds, our school has been a cornerstone of the community for over two decades. We believe in fostering a supportive environment where children can thrive, learn, and grow together. Our mission is to empower each child through a holistic approach to education, rooted in love, respect, and collaboration.
                </p>
              </Reveal>
            </div>
          </div>

          {/* History content */}
          <div className="flex flex-col lg:flex-row gap-8 mt-25" >
            <div className="w-full lg:w-1/2 mr-10 animate-slideUp">
              <Reveal direction="up">
                <img
                  src="/images/About12.png"
                  alt="Nun smiling"
                  className="sm:mt-0 mt-[-40px] w-full h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
                />
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2 text-white space-y-6 animate-fadeIn">
              <Reveal delay={100}>
                <p className="text-base md:text-lg">
                  In the spring of 1954, the Franciscan Sisters of Saint Elizabeth were invited by Monsignor Anthony DeLuca to open a preschool in his parish of Holy Family Church, in Nutley, New Jersey. With the permission of Archbishop Thomas Borland, Archbishop of Newark, the sisters were set up with a small parcel of land with a small house on it. The sisters were given the land and building with the understanding all renovations were their responsibility.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-base md:text-lg">
                  The sisters persevered modernizing the house into a suitable structure to house three beautiful academic classrooms, a coat room, office, kitchen and living quarters for the Sisters, including a chapel for the Sisters. All this was finalized on September 7, 1967.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base md:text-lg">
                  The first community of Sisters was made up of Superior, Mother Justina Iodice, Sister Cecilia Tozzi, Sister Eileen Woodbury, and Sister Romilda Chiga.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="text-base md:text-lg">
                  Through the years, the Sisters have dedicated themselves both to the care and education of their small charges as well as being active at Holy Family Church.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-base md:text-lg">
                  Many of the Sisters of the Franciscan Sisters of Saint Elizabeth have served at Holy Family Day Nursery School but the one that served the longest was the beloved Sister Romilda Chiga. Except for brief times of service elsewhere, Sister Romilda faithfully served as school administrator, convent superior and ambassador to the mostly Italian community of the parish of Holy Family Church. She spent most of her religious life serving in Nutley, New Jersey. Sister Romilda faithfully served until her untimely death in August 2018.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <p className="text-base md:text-lg">
                  Holy Family Day Nursery School continues today to educate children of early childhood ages. Love, respect and care are the basis for the school&#39;s program. The Sisters believe in the theory of blending modern technological tools with good old-fashioned hands-on lessons to assist the children to grow and learn at their own pace to become self-confident, aspiring young students.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 