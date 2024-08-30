/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "./Box";
import ImageBox from "./ImageBox";
import ProgramImage from "./ProgramImage";

function Hero() {
  const [activeLink, setActiveLink] = useState("All");
  const bgImageUrl =
    "https://s3-alpha-sig.figma.com/img/f3e5/1262/15d38143f2cb9b2292d8b3db365618a1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0zPJ-Sm3jezghpmi~qEigq2TgnduNOs65UQPU3TikWq8SMIaN41Xee-h~Hw9Qma9hp-kDoYtlGwT1miF7I1OYCMQ4aTewIDwMPGajmnKxj2PFbjb5Br5JaqyKL-3gj8V0bgdZcx8-uWA~TRyzLJrPXiX038FhzIADDDOEnnoBvxDTP46q-nG1Xkq6Yh5M69rhUeOaIg4t82ujj0t8UrXKhNLjlRDLA4JKgGdu~n1X04ncuhtrnyRw4QchwHtdh85U~z~bI3raZV0c7eFSFNpDvs6T5D5vvJF-iE9X9xudDzXyWmN2Zql7YSOWmJ5SKf8S~Bjb5EUxH1vT68UaLSlg__";
  return (
    <section
      className="text-gray-600 body-font flex justify-start"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex pb-0 py-16 items-center justify-center flex-col self-start">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-[55px] mb-4 font-semibold text-white">
            Connecting People to Education
          </h1>
        </div>
        <div className="bg-[#26A985] bg-opacity-60 flex flex-col items-center justify-center rounded-3xl p-5 pb-1">
          <nav className="flex justify-center items-center w-full mb-5">
            <div className="flex space-x-4">
              {[
                "All",
                "Courses",
                "Uni, Colleges & Schools",
                "Hostels & Share Rooms",
                "Acadamies",
                "Scholarships",
                "Internships",
              ].map((link) => (
                <a
                  key={link}
                  className={`text-white ${
                    activeLink === link ? "border-b-2 border-green-500" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link);
                  }}
                  style={
                    activeLink === link ? { textDecorationColor: "green" } : {}
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="px-2 w-full flex items-center text-white">
            <button className="inline-flex items-center justify-center bg-teal-500 p-2 rounded-full">
              <FaSearch className="text-white w-5 h-5" />
            </button>
            <input
              className="rounded-full p-2 text-white placeholder-white bg-[#a4c6bc] bg-opacity-50 w-full ml-2"
              type="search"
              placeholder="Search for courses, uni & colleges and information"
            />
          </div>
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h4 className="text-xl mb-8 mt-4 font-small text-[#EDEDED] leading-relaxed">
            Apply to Any University, College, School and Hostel
          </h4>
        </div>
        <div className="flex gap-4 p-8 justify-center ">
          <div className="relative w-[600px] h-[415px] rounded-[50px] shadow-xl shadow-black overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/exploration.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 text-white font-bold p-6 text-4xl">
              Course Exploration
            </div>
          </div>
          <div className="relative mt-auto">
            <img
              src="https://s3-alpha-sig.figma.com/img/a774/757a/90c1b426bbfb375514e8e42487e5fa23?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VqMnc25NtgL9KkZ7DIph3yo8s5aneH-0Lv7riuNRPKCW~Kq-lv7L1z5TdyqeIc3E7MBbB7lo67JpN4AmBRqS3iBoEvsvUcQ~ka36tL7aqcp-3ha~PdUnDlUPSttO~kZ1kjne-VKDRyWfXZC2l1Z~NM7-Syn4UbcpuEt0hEcg9Alte2q0CCOKmch3533FQDamAvDwI5m8hnI3L2kJLKm2LW8QvRRexhQ7UX4LF1CyWBZlLAWxnwGTTIgdIDlTqAQeJpNh8YcmV3xL3ecHmULyDnH61dfumxefE97qeLvUq0Hj-EyaO839U-4h~bubZlp7on2NMMRO4bbYzEPsdb0Dqg__"
              alt="Advertisement"
              className="w-[444px] h-[233px]"
            />
            <div className="text-center mt-4 text-white">
              Advertisement.{" "}
              <span className="text-green-500">Why the ads?</span>
            </div>
          </div>
          <div className="relative mt-auto">
            <img
              src="/opportunity.png"
              alt="Advertisement"
              className="w-[277px] h-[233px]"
            />
            <div className="text-center mt-4 text-white">
              Advertisement.{" "}
              <span className="text-green-500">Why the ads?</span>
            </div>
          </div>
        </div>
        <div className="bg-[#1D8C6E] w-full h-full pb-24">
          <div className="flex gap-4 justify-center mt-8">
            <Box number={90} text="Scholarships" />
            <Box number={1099} text="Admissions" />
            <Box number={209} text="Total Institutions" />
            <Box number={333} text="Hostels" />
          </div>
        </div>
        <div className="flex gap-4 justify-center bg-[#1D8C6E] w-full h-full text-white pb-24">
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/f02f/165a/d8fb6fd4f2a022cfeeba87a37b73193f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvCnjydOH8DMryEfyv8IthlXOMkTXnLwCY1jzEEQjVqt1hJCgzsyW2C4XnM39QwEE1b9cEQTc7Rss8Gj1pu1esPROcevHajsrRjxzQW-dqyVk0603JDN9P8vxVI2RFVK8k6hlU2tiHdl69GGLEFq-nt2k8w7UY06Ds-ugVUbrF30DFlNcih7YjS0tXmZ7~weEI-dqhlKoqyh7AW4A4sNkSO0sVH4rQZSIy7JMBOE7R457waK5Aa17djW40tEuTJec-Puh0Gc1LkS15Uq7spHnNHxi58GWBSICgWnuBSd8UrdDD2T8NfqnkC7f4ES01X3iQs0fVVsierZOS7-5-I-VQ__"
            title="Admission Application"
            description="Apply to any course and institution—university, college, or school. Find admission dates, schedules, fees, and more"
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/79a7/1877/4c7c15ff3347bf6560000ec4ff46ef90?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjr3sWZdrZHVslYg05gtF0r4COYAa9iXgUEtDFjI7zpBbdjxTTkpolFEz~Rl67t~imblk~OoYMXvElNGe6tfiN6PV3mpqOvrmta4ZPE7HYJKwpGpNead7mFZghq1Jyl0ra7VkwNHuvPUljgY8ouAKaFm19O1AoTtbLGHH2iuc2hx7TTUicTj9GKUhOVpXIoBdlQ1M-~ZXc4OGHio50w6UYx5rp226~iOlzi8ZTuGoe6wwpT3lW7Fn5esAJSAP~zeVGbblpl-WeVC5Zz-ZM43Bmmy4nsT~3IMZZrR3lOvZSc28sBfkYvJIzIkfts9rPI~L4x405p2s0TQuPrEYsTKZg__"
            title="Find Your City"
            description="Choose your city for admission to the best universities, colleges, schools, and hostels."
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/5088/15f6/fc7d7a22a819698eb0a1b23aedb34f7a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GTcbA~i04Vh7Vk8BlT7-VtXgyYoH2CGSVCJY~5EzNTDC6f21kEEjSKAj210AphIa3-pC5EjvUvVZ6y7wB3phB2OdLHwdjfMpmfTevWk4wCitR11qdiZe2D2B52OYOJ8N-ZXteTQ651jSatL~krehhLUmZI~ksj8HC4Z56bQn7pRyMAjBii4qLqXp3CnC16vw~5tJk2WzyU0Js0nQ4KbU8DT2Z9NBvtXfRtl28WZcFMWsfDnKReGzoXX9x8GUbIZ2fcTlvf4J1wRZlA4Iq66UIX0sijZQTEA-8xSRtT2FAq01FDHiCiI484QodYeSJMAhLoOq2AgJqJUcADeBo2O37Q__"
            title="Scholarships"
            description="Discover scholarships: merit-based, need-based, discounts, and loan assistance."
          />
        </div>
        <div className="relative w-full h-[415px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s3-alpha-sig.figma.com/img/2c10/877c/b50dfe34c643438d7ccd44978b1afd08?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTAjX5pL4EBWqZVl9AaE0Ps5KCeJaitoi~pp8Xmq80cOHfViY3mQDtWdNxDN1~vr9doeiwRq43pou06kWAxp1Qn8evFSAbIJOX9Dk5LC9hC4mIzPF8EYTHeV8fRuawvzA6ZVE6kzZ2o9gHq55sNniD4QRIGrujqQnJa5Ns5mannsMsZfXQ4Fe8pTWNZaAAuBrB85ZtNwrS-7gSsmFK9nGoDFB1yAtivzRGOIfYzkdHlw1ABQ~tYk3pjHB35g2~ZsBbDrw3P4r1V5CaW9NU-r91JJ2dQwk8AnQimjO~gVlz6yxIdfnojsKHPM0lEvLu2GIriCQuIGOqTF278I-XxyLw__)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 text-white font-bold p-6 text-4xl"
            style={{
              fontFamily: "Inter",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: "77.45px",
              textAlign: "left",
            }}
          >
            International Admissions and Visa Application Support and Guide
          </div>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="-50 0 1540 290"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 0H1514V290C1514 290 1210.33 211 904.269 250.5C598.206 290 -50 290 -50 290V0Z"
            fill="#1D8C6E"
          />
        </svg>
        <div className="relative -top-52 flex flex-row gap-4">
          <ProgramImage
            imageUrl="https://s3-alpha-sig.figma.com/img/a8c6/9f32/267b1ac9fca25c66c401dfabaccefe39?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbLhXnAWlrlGJmM2xcRvjjyD~JOTmtIVSJzm5lqxspNhky7BfU6JCsaYPDjIsBboa8xeOMWdGKcnwskinQQoSbSZ0Aa3rv9OE9Oj-YemhsflNzTozTY8sTloghUPE~EXHtAyY6KuKonYZlxpbQMYQHIApc0G1EVugLwd8R6cksl7bsjZ9Ycl8QE-62mOzOQgtOIwzNuSPGoHaLkHw~neIpezIiIUXZzuKsaHNNqsmm5flSv4chxU6PgQ7hSA6DFiFnAN8CoOHiqU2yeKb5bVRuDdbXR8vPPLYKCoZgHNQ1DEdjzt0-gDp9LrLYdajMvh-3jt7fSX9YgcDb1HaNaGzw__"
            title="BS Programs"
            description="Explore BS (4 years), BA (4 years), Associate Degree (2 years), Professional Degrees (5 years): MBBS, BDS, DPT, LLB, and more undergraduate programs."
          />
          <ProgramImage
            imageUrl="https://s3-alpha-sig.figma.com/img/95e0/b1db/9c8dd19d0f64d9735d869ea7993de532?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLn516hVzuis9Qqbj3Cpu30dNG0L99rbphA0Vv1WCnAdehsLk-OznfHqkr193XwqmnaIPTh8stDFOO3fAsozd~4LPA8Z7WH0FI1STfsbThegGWU5P4QAoHcVY9~JpsqRIuexNfe5neVTTIYqqyn-i6-5TawoI0KOujB1lgt5HaSlVgE-E9L7N2pypw5z3nFktnmUulUSbbB4xCePdf-Q4n71afyf3-crHSwxL8ZKTeEe2b9DsVKpZrsHzEy9~v8AbOgSBHloVHHR9p6z6OzWamkPBpA6QEyjsXjuuhsXyffuGWJQ-1k8LDZxzSb-ZYrKoH8TAUe-4vinpO-x47EKiQ__"
            title="MS & PhD Programs"
            description="Explore MS, M.Phil, PhD, and PostDoc programs. Find top universities for research and scholarships."
          />
        </div>
        <div className="relative -top-40 flex gap-4 justify-center w-full h-full text-white">
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/75ba/d574/413e69003080676391c43f1f051f1ed6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwDDjheVYOEcDdLZcC1gj23BwudNA8ivaTcQ00lV6OkLpckp6NbHd7Cd2zepks~H~gcpLvXqR7WeHFV4cwwjNsL5MeqRjG26LY7RTqsddRCniNPaA~-DtTkSwPixj83sdts~pUOd6l6-0due-PrrfgNV4A1ZzzuzD1vX4uTAaTFzZQDxj6wTl~f8LwtUcWORkUVxGQTLKhpbmVwvBZ2CFozht8jtkuNRKjy5WmMTH9-DuGIVBRFAn~Lf7FPJFgQU1-57WbevYT26VRvs~Q8Zhg9nc-jxhCYeZKwPizXIBLLQ495v9~C01D5h6TTRTqwOVhhnsS2od13cjsDbn0UTnA__"
            title="Short Courses"
            description=""
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/6e1b/c788/fb2322af71c8a7c244b475e4f97aa367?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iXcmG9RADUG21zn7IHF2F5~9JVgtrYvUtrgGsOVYZ~9uXBJ~IDMi3iE-HSiZzjrYo~vyvCW5tLw62d0aZRad2qwa8oCfoYhJAZuB9pgO9FUIhoSCS~h3ezXKHMjC4YbIwURJAKm0qz1hGdptb2emMzgxk77l5KBMDxSArEA75psK92FGWdC5hv8mzBX59i~BBli35uFj8Y~omgaOuQTaYMa5YQrDcwP7UCIAwgINfZqXn9If9TyD7xpkR9gDI4Qh9NxqFFgDWvUqYpA8eyHXBcSitnQ5u1srzUVBIOIYvA76a8S9-2mAZrYM3SQmTPFtgVGWFDs5KBfT-8sPVYSBaw__"
            title="Coaching Academy"
            description=""
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/e4e6/ea38/93d65fe420e3a389718e232cc19c5ae3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bY14uIr~AFsmZG2PEykNq5bY9hnnENnO9wNemZuaYMDiZ4nDrt2eOWqki5iWOrqgIDc3wL5d-gATJeYoFTguF0PzIdepG7rexJCx-q0nJM6~CSyRvIITeeZey~W3JwYKVBd7SL226a-6WkPpvO2wEAUI56JbNg~mLz6qSvFjH37cobE3MUbA2sK82bnBG5dkzRsS09HYdzY477XF5Qu-HSpRPN16oCgpxXi0LwAmVuQi1i2UO0eyFNJGsuMZQXsoPSc9JUwSRK~rCjxVp2pv0dROXr43LCwoToJlnqQ4r2L9zSnIODeL3UDHSTCbCoUlLa97OOdf0poU1TW~lj76QQ__"
            title="Test & Interview Preparation"
            description=""
          />
        </div>
        <div className="relative -top-28 flex flex-row gap-4">
          <ProgramImage
            imageUrl="https://s3-alpha-sig.figma.com/img/6a9b/ab39/9a537d0b4394fc700ebf62a443bae3e8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UAvDnT1BDTDGXXoQt63J~tWl2GYivjttGVUPGByS6bxs7knA0oh5f~ovOVQwylDZOE3A9VN1Vi7TcL7z7xQ3vBcrh5SVuz9daRw2vHSqxJ0OtqMgOSx9gdz~MoYk-kKEPtf7fPtEXUCygDruKBGzpO-AjfdHGtJX92j6Lfj0pYj8qciFUaPOuKqc6IMg1xfTtCHGB2QWt-yWSBFYwQkMtZUkT2fBYchUYW0phOAMV3fttgYAj0yEPrwVkpOVNphWVjpQd2pj5srXzYYKtFqsb2LUr6wcY1tgnA-11SKrRi3l2~JC5NhFVKxksWAToAc0rSptVULQqMjRKn2~lhwNOw__"
            title="Hostels"
            description="(Find Nearest Hostels)"
          />
          <ProgramImage
            imageUrl="https://s3-alpha-sig.figma.com/img/6530/3c9f/f5b3619f9b8e108dd9a80e2135a4c6d1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QccLV53PvjqZ14bCTWvwcMKdG1nIa0yfvM~fFrDxyQqpr~-jPJzUaSxg-Wkq3OflVxW0V2CisTZx3ijC4gcuwu5qc65GILiCct4OODMBqYLfakeJezEG1t53kE7103R9FpORQzzjg-gScik444~QOrGBfyjpCgBNFA~FGhZHY2A46bxYNbKw0CLzhS3fyY2OFXlKE86s5AXbdLKxV16H7JI58MTRe71mZ4gE7zKS~c7al891CYq7LCqr8GG7Z-wLd38BE7AQOcDRyneHYEy-czv6Xk-VWOM9N4zB~JElOUNcWXiyHSt61oTjP8zqfLqnkGcnXMOyit-Q~6vUyPOC7A__"
            title="Room’s Sharing"
            description="(Find your room-mate)"
          />
        </div>
        <div className="flex gap-4 -top-28 items-center align-middle justify-start p-4 self-start px-20">
          <h2 className="text-4xl font-bold text-[#2ecc53]">
            Our <span className="text-black font-thin">Partners</span>
          </h2>
          <button className="bg-[#2ecc53] text-white font-bold py-3 px-6 text-lg rounded-full transition-all duration-300 hover:bg-[#1caeab] active:bg-[#189a95]">
            Apply for the Partnership
          </button>
        </div>
        <div className="flex gap-4 justify-center w-full h-full text-white pb-24">
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/f02f/165a/d8fb6fd4f2a022cfeeba87a37b73193f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvCnjydOH8DMryEfyv8IthlXOMkTXnLwCY1jzEEQjVqt1hJCgzsyW2C4XnM39QwEE1b9cEQTc7Rss8Gj1pu1esPROcevHajsrRjxzQW-dqyVk0603JDN9P8vxVI2RFVK8k6hlU2tiHdl69GGLEFq-nt2k8w7UY06Ds-ugVUbrF30DFlNcih7YjS0tXmZ7~weEI-dqhlKoqyh7AW4A4sNkSO0sVH4rQZSIy7JMBOE7R457waK5Aa17djW40tEuTJec-Puh0Gc1LkS15Uq7spHnNHxi58GWBSICgWnuBSd8UrdDD2T8NfqnkC7f4ES01X3iQs0fVVsierZOS7-5-I-VQ__"
            title="Admission Application"
            description="Apply to any course and institution—university, college, or school. Find admission dates, schedules, fees, and more"
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/79a7/1877/4c7c15ff3347bf6560000ec4ff46ef90?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjr3sWZdrZHVslYg05gtF0r4COYAa9iXgUEtDFjI7zpBbdjxTTkpolFEz~Rl67t~imblk~OoYMXvElNGe6tfiN6PV3mpqOvrmta4ZPE7HYJKwpGpNead7mFZghq1Jyl0ra7VkwNHuvPUljgY8ouAKaFm19O1AoTtbLGHH2iuc2hx7TTUicTj9GKUhOVpXIoBdlQ1M-~ZXc4OGHio50w6UYx5rp226~iOlzi8ZTuGoe6wwpT3lW7Fn5esAJSAP~zeVGbblpl-WeVC5Zz-ZM43Bmmy4nsT~3IMZZrR3lOvZSc28sBfkYvJIzIkfts9rPI~L4x405p2s0TQuPrEYsTKZg__"
            title="Find Your City"
            description="Choose your city for admission to the best universities, colleges, schools, and hostels."
          />
          <ImageBox
            imageUrl="https://s3-alpha-sig.figma.com/img/5088/15f6/fc7d7a22a819698eb0a1b23aedb34f7a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GTcbA~i04Vh7Vk8BlT7-VtXgyYoH2CGSVCJY~5EzNTDC6f21kEEjSKAj210AphIa3-pC5EjvUvVZ6y7wB3phB2OdLHwdjfMpmfTevWk4wCitR11qdiZe2D2B52OYOJ8N-ZXteTQ651jSatL~krehhLUmZI~ksj8HC4Z56bQn7pRyMAjBii4qLqXp3CnC16vw~5tJk2WzyU0Js0nQ4KbU8DT2Z9NBvtXfRtl28WZcFMWsfDnKReGzoXX9x8GUbIZ2fcTlvf4J1wRZlA4Iq66UIX0sijZQTEA-8xSRtT2FAq01FDHiCiI484QodYeSJMAhLoOq2AgJqJUcADeBo2O37Q__"
            title="Scholarships"
            description="Discover scholarships: merit-based, need-based, discounts, and loan assistance."
          />
        </div>
        <div className="w-[1341px] h-[140px]  gap-0 -md bg-[#27a07c] p-4  flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-1 drop-shadow-lg">
              Easy Steps for Admission
            </h2>
            <p className="text-white font-extrabold text-md drop-shadow-md">
              1. Choose Course and Institute 2. Submit Application 3. After
              Confirmation Pay Online
              {" "}
              <button className="ml-2 text-[#2ecc53] font-bold hover:underline text-[32px] drop-shadow-xl">
                "Apply Now"
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
