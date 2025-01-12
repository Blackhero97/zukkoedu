import Book from "../assets/zukkopng.png";
import Teacher from "../assets/teacher.png";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Geo from "../assets/meaning.png";
import Morta from "../assets/computer.png";
import Student from "../assets/psy.png";
import Homework from "../assets/homework.png";
import LinkOne from "../assets/one-link.png";
import LinkTwo from "../assets/two-link.png";
import LinkThree from "../assets/three-link.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "swiper/modules";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isChange, setIsChange] = useState(true);
  const [data, setData] = useState({
    sharoit: [
      {
        icon: "01",
        className: "card one",
        title: "Sifatli Ta'lim",
        id: 1,
      },
      {
        icon: "02",
        className: "card two",
        title: "Uch mahal issiq ovqat",
        id: 2,
      },
      {
        icon: "03",
        className: "card three",
        title: "Yotoqxona",
        id: 3,
      },
      {
        icon: "04",
        className: "card four",
        title: "Ajoyib sinf xonalar",
        id: 4,
      },
      {
        icon: "05",
        className: "card five",
        title: "Cambridge ta'lim tizimi",
        id: 5,
      },
      {
        icon: "06",
        className: "card six",
        title: "Vodiy bo'ylab sayohat",
        id: 6,
      },
      {
        icon: "07",
        className: "card seven",
        title: "1-6-sinflar uchun qo'shimcha darslar",
        id: 7,
      },
      {
        icon: "08",
        className: "card eight",
        title: "Top 1000 universitetlarga grant yutish imkoniyati",
        id: 8,
      },
      {
        icon: "09",
        className: "card nine",
        title: "5ta tilda so'zlasha olish",
        id: 9,
      },
      {
        icon: "10",

        className: "card ten",
        title: "Kompyuterdan erkin foydalana olish",
        id: 10,
      },
      {
        icon: "11",
        className: "card eleven",
        title: "O'z Sohasi ustalaridan debat darslar",
        id: 11,
      },
    ],
  });
  const [isToggle, setIstoggle] = useState(false);
  const info = () => {
    Swal.fire("Sayt test rejimida!", "Keyinroq urinib ko'ring!", "error");
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
              "Zukko International School"da Ta`lim Olib Hayotingizni
              O`zgartiring
            </h2>
            <button onClick={info}>
              Ma'lumot olish uchun <i class="bx bxs-chevron-right-circle"></i>
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
            Nima uchun aynan bizni tanlashingiz kerak?
          </h2>
          <p className="t1-5" data-aos="fade-down" data-aos-duration="1000">
            Talabalarimizning har biri quyidagi qulayliklarga ega bo`ladi
          </p>
          <div className="cards-box">
            {data &&
              data.sharoit.map((e) => {
                return (
                  <div
                    key={e.id}
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
            Video Lavhalar
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
                <h4>Dars jarayonidan lavhalar</h4>
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
                <h4>Dars jarayonidan lavhalar</h4>
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
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/04.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/05.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/06.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/07.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/08.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/09mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/10.mp4" />
                </video>
                <h4>Dars jarayonidan lavhalar</h4>
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
            Bizning Ustozlar
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
                        <h4>Yo'nalish : Boshlang'ich ta'lim</h4>
                      </div>
                      <div className="experience">
                        <h4> Tajribasi: 20-Yil</h4>
                      </div>
                      <div className="experience">
                        <h4>Talabalari: 800+</h4>
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
                        <h4>Yo'nalish: Musiqa</h4>
                      </div>
                      <div className="experience">
                        <h4>Tajribasi: 5-Yil</h4>
                      </div>
                      <div className="experience">
                        <h4>Talabalari: 800+</h4>
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
                        <h4>Yo'nalish: Ingliz tili</h4>
                      </div>
                      <div className="experience">
                        <h4>Tajribasi: 2-Yil</h4>
                      </div>
                      <div className="experience">
                        <h4>Talabalari: 250+</h4>
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
                        <h4>Yo'nalish: Biologiya</h4>
                      </div>
                      <div className="experience">
                        <h4>Tajribasi: 4-Yil</h4>
                      </div>
                      <div className="experience">
                        <h4>Talabalari: 500+</h4>
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
                        <h4>Yo'nalish: Boshlang'ich ta'lim</h4>
                      </div>
                      <div className="experience">
                        <h4>Tajribasi: 3-Yil</h4>
                      </div>
                      <div className="experience">
                        <h4> Talabalari: 300+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="btn-box">
              <a href="tel:+998907004500">
                <button> O'qituvchi bilan bog'lanish</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="course">
        <div className="course-box container">
          <h2 className="two" data-aos="fade-down" data-aos-duration="1300">
            Bizda fanlarga qo'shimcha quyidagilar o'rgatiladi
          </h2>
          <div
            className="course-card-box  three "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="course-card">
              <img src={Morta} alt=" " className="icon" />
              <h4>Kompyuter Savodxonligi</h4>
              <p>
                Kompyuter savodxoligi to'garagida siz eng asosiy ko'nikmalarni
                yetuk mutaxassislardan olasiz.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Ro'yhatdan o'tish
                </a>
              </button>
            </div>
            <div className="course-card ">
              <img src={Homework} alt=" " className="icon" />
              <h4>Notiqlik san'ati</h4>
              <p>
                Siz omma oldida qanday gapirishni va o'z nuqtai nazaringizni
                etkazishni o'rganasiz.
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Ro'yhatdan o'tish
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Geo} alt=" " className="icon" />
              <h4>Tanqidiy fikrlash</h4>
              <p>
                Tanqid bu rivojlanish kaliti. Tanqid bilan qarash va o'z o'zini
                rivojlantirtishni biz bilan o'rganasiz
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Ro'yhatdan o'tish
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Student} alt=" " className="icon" />
              <h4>Psixologik tashxis</h4>
              <p>
                Psixologiya insonning ruhiy holatdir. Siz vaziyatlarga to'g'ri
                yondashishni o'rganasiz
              </p>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Ro'yhatdan o'tish
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
            <h2>Kontakt malumotlari</h2>
            <div className="contact-box-child">
              <h5>Bizning manzil:</h5>
              <span className="adress">
                <i class="bx bx-current-location"></i>
                Rishton shahri 1-son kasb-hunar maktabi.Farg'ona ko'chasi, 30-uy{" "}
              </span>
            </div>
            <div className="contact-box-child">
              <div className="details">
                <summary>Ish Kunlari</summary>
                <p>
                  <span>Dushanba</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Seshanba</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Chorshanba</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Payshanba</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Juma</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Shanba</span>
                  <span>08:00-16:00</span>
                </p>
                <p>
                  <span>Yakshanba</span>
                  <span>Dam olish kuni</span>
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

export default Home;
