import {
    FaTiktok,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <div className="relative h-screen text-white">
        <svg
          className="absolute left-0 w-full h-full"
          viewBox="0 0 1440 381"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1462 24.5012C1462 24.5012 1056 -29.9981 715 24.5012C374 79.0004 -32 24.5012 -32 24.5012V314.501C-32 314.501 283.962 167.002 527.731 275.001C771.5 383 1462 381 1462 381V24.5012Z"
            fill="#1D8C6E"
          />
        </svg>
  
        <div className="absolute top-1/2 left-4 sm:left-8 lg:left-14 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          <button className="contact-us border-white border rounded-full py-2 px-4 text-sm sm:text-base">
            Contact Us
          </button>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="https://www.tiktok.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-2xl sm:text-3xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="mt-4 sm:mt-8">
              <img
                src="https://s3-alpha-sig.figma.com/img/3d57/7c1c/d8f188998ee44d92a67d6df9822f9112?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h7Ir2DXpiR5kP54ZcAsFj0rrQMvvh0DnVIDoZMgfiqzRId7X8nsmG3DJtA7zsJ4PxNddNrdBmu8UYg-35Nh76wsrq~WPunC~wrSx9lfwTF8P19wDhPC8Nqlr7YQN-yMI3w5RCaMmffF87Fhu77sSxfVZ6TgBUbYqdjnAkHVN9I8LdttRsYekPdM~iWG6Jk3ee7OmQ9dn9NywetSoxC7~ETmlc5lyLWCw4fTV22db79bbOjVZK4vIjxxgOlK~tH9Jm-IC2Q7HLF3RMk-ybt7lZx10-GwJE9sZOg0Zg7B3PFV2ZpCaVz847OHGPI2HFGA6NNndoANEcTTtTPWSL~pVXg__"
                alt="Logo Image"
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
            </div>
          </div>
        </div>
  
        <div className="absolute top-1/2 right-4 sm:right-8 lg:right-14 transform -translate-y-1/2 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-8">
          <div className="flex flex-col space-y-4">
            <a href="#link1" className="text-white text-sm sm:text-lg hover:underline">
              Link 1
            </a>
            <a href="#link2" className="text-white text-sm sm:text-lg hover:underline">
              Link 2
            </a>
            <a href="#link3" className="text-white text-sm sm:text-lg hover:underline">
              Link 3
            </a>
            <a href="#link4" className="text-white text-sm sm:text-lg hover:underline">
              Link 4
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#link5" className="text-white text-sm sm:text-lg hover:underline">
              Link 5
            </a>
            <a href="#link6" className="text-white text-sm sm:text-lg hover:underline">
              Link 6
            </a>
            <a href="#link7" className="text-white text-sm sm:text-lg hover:underline">
              Link 7
            </a>
            <a href="#link8" className="text-white text-sm sm:text-lg hover:underline">
              Link 8
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  