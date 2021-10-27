import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slides from "./Carousel.json";
import "css-doodle";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Introduction() {
  const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 2000,
    arrows: false,
    infinite: true,
    easing: "ease",
    pauseOnHover: true,
    // indicators: (i) => <div className="indicator">{i + 1}</div>
  };

  return (
    <section
      id="home"
      className="relative sm:pt-4 min-h-screen h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 flex items-center"
    >
      <css-doodle style={{ zIndex: -1 }} grid="200x1">
        {/* {`  :doodle {
    @grid: 20 / 100vmax;
    background: #fff;
    font-family: sans-serif;
    overflow: hidden;
  }
  :after {
    content: \\@hex.@r(0x2500, 0x257f);
    color: hsla(@r360, 70%, 70%, @r.9);
    font-size: 8vmin;
  }`} */}
        {`:doodle {
    @grid: 25x1 / 18vmin;
  }
  :container {
    perspective: 30vmin;
  }

  @place-cell: center;
  @size: 100%;

  border: @r(2px) solid @pd(
    #00b8a9, #f8f3d4, #f6416c, #ffde7d
  );
  @random(.1) { border-style: dashed; }
  @random(.1) { border-style: dotted; }
  @random(.1) {
    border-width: @p(1px, 1px);
    border-style: double;
  }

  border-radius: 50%;
  transform-style: preserve-3d;
  will-change: transform, opacity;
  animation: scale-up 20s linear infinite;
  animation-delay: calc(-20s / @size() * @i());

  @keyframes scale-up {
    0%, 100% {
      transform: translate3d(0, 0, 0) rotate(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    95% {
      transform:
        translate3d(0, 0, 45vmin)
        rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
        rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
        rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
    }
  }
`}
      </css-doodle>
      <div
        className="mx-auto md:mx-10 pt-16 md:col-span-2"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="relative mx-0 md:mx-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:max-w-2xl lg:w-full">
          <main className="mt-2 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 lg:py-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight  sm:text-5xl md:text-6xl">
                <span className="block xl:inline font-extrabold header-theme">
                  Electrothon 4.0
                </span>
                <span className="block text-indigo-600 text-normal">2022</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                SEARCH | PLAN | ENGAGE | CREATE
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://devfolio.co/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button
                      className={`w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 ${
                        true ? "cursor-not-allowed" : "hover:bg-indigo-700"
                      } md:py-4 md:text-lg md:px-10 z-1`}
                      disabled={true}
                    >
                      Apply Now
                    </button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://specnith.com/electrothon.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Electrothon 3.0
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className="mx-auto block h-full w-full col-span-3"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        <Slide
          {...properties}
          className="hero-container mt-8 sm:mt-24 px-6 sm:px-10 md:px-0"
        >
          {shuffle(slides).map((element, index) => (
            <div className="each-slide overflow-hidden bg-contain" key={index}>
              <img
                src={"./electrothon/" + element.url}
                alt={element.caption}
                className="hero-background"
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}