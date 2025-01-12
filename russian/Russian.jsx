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
function Russian() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isChange, setIsChange] = useState(true);
  const [data, setData] = useState({
    sharoit: [
      {
        icon: "01",
        className: "card one",
        title: "Качество образование",
        id: 1,
      },
      {
        icon: "02",
        className: "card two",
        title: "Трехразовое питания",
        id: 2,
      },
      {
        icon: "03",
        className: "card three",
        title: "Общежития",
        id: 3,
      },
      {
        icon: "04",
        className: "card four",
        title: "Замечателтные классные комнаты  ",
        id: 4,
      },
      {
        icon: "05",
        className: "card five",
        title: "Камбриджская система образования",
        id: 5,
      },
      {
        icon: "06",
        className: "card six",
        title: "Поездка по долине",
        id: 6,
      },
      {
        icon: "07",
        className: "card seven",
        title: "Дополнительные занятия для учащихся 1-6 классов",
        id: 7,
      },
      {
        icon: "08",
        className: "card eight",
        title: "Шанс выиграть стипендии в 1000 лучших университетов",
        id: 8,
      },
      {
        icon: "09",
        className: "card nine",
        title: "Возможность говорить на 5 языках",
        id: 9,
      },
      {
        icon: "10",

        className: "card ten",
        title: "Свободно пользоваться компьютером",
        id: 10,
      },
      {
        icon: "11",
        className: "card eleven",
        title: "Уроки дебатоват мастеров дела",
        id: 11,
      },
    ],
  });
  const [isToggle, setIstoggle] = useState(false);
  const info = () => {
    Swal.fire("Сайт работает в тестовом режиме!", "Попробуйте позже!", "error");
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
              Учись в «Zukko International School» и Измени Свою Жизнь
            </h2>
            <button onClick={info}>
              Для справки <i class="bx bxs-chevron-right-circle"></i>
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
            Почему Вам Следует Выбрать Нас ?
          </h2>
          <p className="t1-5" data-aos="fade-down" data-aos-duration="1000">
            Каждый из наших студентов имеет следуюшие удобства
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
            Видеоклипы
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
                <h4>Отрывки из процесса урока</h4>
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
                <h4>Отрывки из процесса урока</h4>
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
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/04.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/05.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/06.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/07.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/08.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/09mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
              </SwiperSlide>
              <SwiperSlide>
                <video controls>
                  <source src="https://zukkovideos.netlify.app/video/10.mp4" />
                </video>
                <h4>Отрывки из процесса урока</h4>
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
            Наши Учителя
          </h2>
          <div className="teacher-wrapper one " data-aos="fade-right">
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
                      <h3 className="teacher-name">Ровелин Л. Тринидад</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box ">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Направление: Начальное образование</h4>
                      </div>
                      <div className="experience">
                        <h4>Опыт: 20-лет</h4>
                      </div>
                      <div className="experience">
                        <h4>Студенты: 800+</h4>
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
                      <h3 className="teacher-name">ДЖАСТИН ИВАН ПАГИО</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box ">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Направление: Музыка</h4>
                      </div>
                      <div className="experience">
                        <h4>Опыт 5-лет</h4>
                      </div>
                      <div className="experience">
                        <h4>Студенты: 800+</h4>
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
                      <h3 className="teacher-name">Терсо Дороти Фил П.</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box ">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Направление: Aнглийский язык</h4>
                      </div>
                      <div className="experience">
                        <h4>Опыт 2-лет</h4>
                      </div>
                      <div className="experience">
                        <h4>Студенты: 250+</h4>
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
                      <h3 className="teacher-name">Кыжл Гумалис</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box">
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Направление: Биология</h4>
                      </div>
                      <div className="experience">
                        <h4>Опыт 4-лет</h4>
                      </div>
                      <div className="experience">
                        <h4>Студенты: 500+</h4>
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
                      <h3 className="teacher-name">Рей Март Ривера</h3>
                    </div>
                  </div>
                  <div className="swiper-text-box">
                    {" "}
                    <div className="experience-box">
                      <div className="experience">
                        <h4>Направление: Начальное образование</h4>
                      </div>
                      <div className="experience">
                        <h4>Опыт 3-лет</h4>
                      </div>
                      <div className="experience">
                        <h4>Студентыi: 300+</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="btn-box">
              <a href="tel:+998907004500">
                <button> Связаться с Учителем</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="course">
        <div className="course-box container">
          <h2 className="two" data-aos="fade-down" data-aos-duration="1300">
            Помимо Науки Мы Учим Следующему
          </h2>
          <div
            className="course-card-box  three "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="course-card">
              <img src={Morta} alt=" " className="icon" />
              <h4>Компьютерная грамотность</h4>
              <div className="accordion-box">
                <p>
                  В кружке компьютерной грамотности вы освоите базовые навыки у
                  опытных специалистов.
                </p>
              </div>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Зарегистрироваться
                </a>
              </button>
            </div>
            <div className="course-card ">
              <img src={Homework} alt=" " className="icon" />
              <h4>Искусство публичных выступлений</h4>
              <div className="accordion-box">
                <p>
                  Вы научитесь выступать публично и доносить свою точку зрения
                </p>
              </div>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Зарегистрироваться
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Geo} alt=" " className="icon" />
              <h4>Критическое мышление</h4>
              <div className="accordion-box">
                <p>
                  Критика – ключ к развитию. С нами вы научитесь критическому
                  мышлению и саморазвитию.
                </p>
              </div>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Зарегистрироваться
                </a>
              </button>
            </div>
            <div className="course-card">
              <img src={Student} alt=" " className="icon" />
              <h4>Психологическая диагностика</h4>
              <div className="accordion-box">
                <p>
                  Психология – это душевное состояние человека. Вы научитесь
                  правильно подходить к ситуациям
                </p>
              </div>
              <button>
                <a target="_blank" href="https://forms.gle/xDyLE2HHgNvRsBPa8">
                  Зарегистрироваться
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
            <h2>Контактная информация</h2>
            <div className="contact-box-child">
              <h5>Наш адрес:</h5>
              <span className="adress">
                <i class="bx bx-current-location"></i>
                Город Риштон первое профессиональная школа, улица Фергана,
                дом-30
              </span>
            </div>
            <div className="contact-box-child">
              <div className="details">
                <summary>Рабочих дней</summary>
                <p>
                  <span>Понедельник</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Вторник</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Среда</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Четверг</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Пятница</span>
                  <span>08:00-18:00</span>
                </p>
                <p>
                  <span>Суббота</span>
                  <span>08:00-16:00</span>
                </p>
                <p>
                  <span>Воскресенье</span>
                  <span>Выходной</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Russian;
