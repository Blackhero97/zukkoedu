import Book from "./assets/zukkopng.png";
import Teacher from "./assets/teacher.png";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Geo from "./assets/meaning.png";
import Morta from "./assets/computer.png";
import Student from "./assets/psy.png";
import Homework from "./assets/homework.png";
import LinkOne from "./assets/one-link.png";
import LinkTwo from "./assets/two-link.png";
import LinkThree from "./assets/three-link.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "swiper/modules";
function English() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isChange, setIsChange] = useState(true);
  const [data, setData] = useState({
    sharoit: [
      {
        icon: "01",
        className: "card one",
        title: "Good education",
        id: 1,
      },
      {
        icon: "02",
        className: "card two",
        title: "Breakfast lunch dinner",
        id: 2,
      },
      {
        icon: "03",
        className: "card three",
        title: "Dormitory",
        id: 3,
      },
      {
        icon: "04",
        className: "card four",
        title: "Excellent classrooms",
        id: 4,
      },
      {
        icon: "05",
        className: "card five",
        title: "Cambridge method of teaching",
        id: 5,
      },
      {
        icon: "06",
        className: "card six",
        title: "Traveling around the valley",
        id: 6,
      },
      {
        icon: "07",
        className: "card seven",
        title: "Extra lessons for 1-6 classes",
        id: 7,
      },
      {
        icon: "08",
        className: "card eight",
        title: "Chance to win a schoolarship top 1000 universities",
        id: 8,
      },
      {
        icon: "09",
        className: "card nine",
        title: "Speak 5 languages",
        id: 9,
      },
      {
        icon: "10",
        className: "card ten",
        title: "Free of using Computer",
        id: 10,
      },
      {
        icon: "11",
        className: "card eleven",
        title: "Debate lessons with specialized teachers",
        id: 11,
      },
    ],
  });
  const [isToggle, setIstoggle] = useState(false);
  const info = () => {
    Swal.fire("The site is in test mode!!", "Try again later!", "error");
  };
  return (
    <>
      <main id="main" className="main">
        <div
          className="main-box container  one"
          data-aos="fade-right"
          data-aos-duration="1300"
        >
          <div className="text-box">
            <h2 className="main-title">
              "Zukko International School" Gain Knowledge And Change Your Life
            </h2>
            <button onClick={info}>
              Take information <i class="bx bxs-chevron-right-circle"></i>
            </button>
          </div>
          <div
            className="img-box two"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src={Book} alt="" className="main-img" />
          </div>
        </div>
      </main>
      <div className="benifits" id="benifits">
        <div className="benifit-box container">
          <h2 className="t1" data-aos="fade-down" data-aos-duration="1000">
            Why You Should Choose Us ?
          </h2>
          <p className="t1-5" data-aos="fade-down" data-aos-duration="1000">
            Each of our students will have following facilities
          </p>
          <div className="cards-box">
            {data &&
              data.sharoit.map((e) => {
                return (
                  <div
                    className={e.className}
                    data-aos="flip-right"
                    data-aos-duration="1000"
                  >
                    <div key={e.id}>
                      <i className={e.icon}>{e.icon}</i>
                      <p>{e.title}</p>
                      {/* <p>{e.text}</p> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <section className="video">
        <div className="video-box container">
          <h2
            className="video-title"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Video Frames
          </h2>
          <div className="vide-card-box">
            <Swiper
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
              }}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <video
                  controls
                  className="two"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <source src="https://zukkovideos.netlify.app/video/01.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video
                  controls
                  className="three"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <source src="https://zukkovideos.netlify.app/video/02.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video
                  controls
                  className="four"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <source src="https://zukkovideos.netlify.app/video/03.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/04.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/05.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/06.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/07.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/08.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/09mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/10.mp4" />
                </video>
                <h4>Video frames of the lesson</h4>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="teachers" id="teachers">
        <div className="teachers-box container">
          <h2
            className="one teachers-title"
            data-aos-duration="1000"
            data-aos="fade-down"
          >
            Our Teachers
          </h2>
          <div className="teacher-wrapper one" data-aos="fade-right">
            <Swiper
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              navigation={true}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img-box ">
                    <div className="swiper-img">
                      <img src={Teacher} alt="" />
                    </div>
                    <div className="info-box">
                      <h3 className="teacher-name">Rovelyn L. Trinidad</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box ">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Field : Primary education</h4>
                      </div>
                      <div className="experience">
                        <h4> Experience: 20 years</h4>
                      </div>
                      <div className="experience">
                        <h4>Students: 800+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img-box ">
                    <div className="swiper-img">
                      <img src={Teacher} alt="" />
                    </div>
                    <div className="info-box">
                      <h3 className="teacher-name">JUSTIN IVAN PAGUIO</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box ">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Field: Music</h4>
                      </div>
                      <div className="experience">
                        <h4>Experience: 5 years</h4>
                      </div>
                      <div className="experience">
                        <h4>Students: 800+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img-box">
                    <div className="swiper-img">
                      <img src={Teacher} alt="" />
                    </div>
                    <div className="info-box">
                      <h3 className="teacher-name">Terso Dorothy Fil P</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Field: English</h4>
                      </div>
                      <div className="experience">
                        <h4>Experience: 2 years</h4>
                      </div>
                      <div className="experience">
                        <h4>Students: 250+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img-box">
                    <div className="swiper-img">
                      <img src={Teacher} alt="" />
                    </div>
                    <div className="info-box">
                      <h3 className="teacher-name">Kyzhl Gumalis</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Field: Biology</h4>
                      </div>
                      <div className="experience">
                        <h4>Experience: 4 years</h4>
                      </div>
                      <div className="experience">
                        <h4>Students: 500+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div className="swiper-img-box">
                    <div className="swiper-img">
                      <img src={Teacher} alt="" />
                    </div>
                    <div className="info-box">
                      <h3 className="teacher-name">Rey Mart Rivera</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box">
                    {" "}
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Field: Primary education</h4>
                      </div>
                      <div className="experience">
                        <h4>Experience: 3 years</h4>
                      </div>
                      <div className="experience">
                        <h4> Students: 300+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="btn-box">
              <a href="tel:+998907004500">
                <button> Contact with the teacher</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="course">
        <div className="course-box container">
          <h2 className="two" data-aos="fade-down" data-aos-duration="1300">
            We Also Teach The Following Subjects
          </h2>
          <div
            className="course-card-box  three "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="course-card">
              <img src={Morta} alt=" " className="icon" />
              <h4>Computer education</h4>
              <p>
                In the computer literacy circle, you will learn basic skills
                from experienced professionals.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Sign up
                </a>
              </button>
            </div>
            <div className="course-card ">
              <img src={Homework} alt=" " className="icon" />
              <h4>The art of oratory</h4>
              <p>
                You will learn how to speak in public and get your point across.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Sign up
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Geo} alt=" " className="icon" />
              <h4>Critycal thinking</h4>
              <p>
                Criticism is the key to development. With us you will learn
                critical thinking and self-development.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Sign up
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Student} alt=" " className="icon" />
              <h4>Psychological diagnosis</h4>
              <p>
                Psychology is the state of mind of a person. You will learn how
                to approach situations correctly.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Sign up
                </a>
              </button>
            </div>
            <img className="one-link" src={LinkOne} alt="" />
            <img className="two-link" src={LinkTwo} alt="" />
            <img className="three-link" src={LinkThree} alt="" />
          </div>
        </div>
      </section>
      <section className="location" id="location">
        <div className="location-box container">
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.3566872358272!2d71.28136520600414!3d40.348703920145994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbaa25c3127873%3A0xa5ffcab5527e1367!2sRishton%20Sanoat%20Kolledzhi!5e0!3m2!1suz!2s!4v1692184839303!5m2!1suz!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-box">
            <h2>Contact Information</h2>
            <div className="contact-box-child">
              <h5>Our Adress:</h5>
              <span className="adress">
                <i class="bx bx-current-location"></i>
                City Rishtan 1st Vocational School . Fergana street 30-house
              </span>
            </div>
            <div className="contact-box-child">
              <div className="details">
                <summary>Working days:</summary>
                <p>
                  <span>Monday</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Tuesday</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Wednesday</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Thursday</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Friday</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Saturday</span>
                  <span>08:00-16:00</span>
                </p>
                <p>
                  <span>Sunday</span>
                  <span>Day off</span>
                </p>
              </div>
            </div>
            <div className="contact-box-child"></div>
            <div className="contact-box-child"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default English;
