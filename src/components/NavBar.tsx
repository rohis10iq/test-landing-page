import { FaSearch, FaUser } from "react-icons/fa";

function NavBar() {
  return (
    <header className="text-gray-600 body-font bg-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/3d57/7c1c/d8f188998ee44d92a67d6df9822f9112?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h7Ir2DXpiR5kP54ZcAsFj0rrQMvvh0DnVIDoZMgfiqzRId7X8nsmG3DJtA7zsJ4PxNddNrdBmu8UYg-35Nh76wsrq~WPunC~wrSx9lfwTF8P19wDhPC8Nqlr7YQN-yMI3w5RCaMmffF87Fhu77sSxfVZ6TgBUbYqdjnAkHVN9I8LdttRsYekPdM~iWG6Jk3ee7OmQ9dn9NywetSoxC7~ETmlc5lyLWCw4fTV22db79bbOjVZK4vIjxxgOlK~tH9Jm-IC2Q7HLF3RMk-ybt7lZx10-GwJE9sZOg0Zg7B3PFV2ZpCaVz847OHGPI2HFGA6NNndoANEcTTtTPWSL~pVXg__"
            alt="Logo Image"
            className="w-12 h-12 p-2 rounded-full object-cover"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Home</a>
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Undergraduate</a>
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Graduate</a>
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Short Courses</a>
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Hostels</a>
          <a className="mr-5 cursor-pointer sm:mr-10 hover:text-gray-900">Internships Jobs</a>
        </nav>
        <div className="flex items-center mt-4 md:mt-0">
          <button className="inline-flex items-center justify-center bg-teal-500 p-2 rounded-full mr-3">
            <FaSearch className="text-white w-5 h-5" />
          </button>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-teal-500 rounded text-base">
            Sign In
          </button>
          <button>
            <FaUser className="w-4 h-4 ml-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
