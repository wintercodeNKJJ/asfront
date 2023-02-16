import Menu from "../components/Menu";
import ASL from "../assets/ASL.png"

const Header = () => {
  return (
    <div>
      {/* // Header Component begine */}
      <div className="hidden md:visible md:grid grid-cols-5 w-full bg-green-700 h-10 px-11 lg:px-40">
        {/* // top links */}
        <div className="col-span-1"></div>
        <div className="col-span-3 min-w-max">
          <ul className="flex text-sm font-extralight text-white h-full justify-center items-center">
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black"><a className="bordered border-r-2 px-2"
              href="test.html">Investors
              relations</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black"><a className="bordered border-r-2 px-2"
              href="/News">Latest news</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black"><a className="bordered border-r-2 px-2"
              href="/Aboutus">Who we are</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black"><a className="px-2" href="test.html">English</a>
            </li>
          </ul>
        </div>
        {/* // search bar */}
        <div className="flex justify-center items-center col-span-1">
          <input className=" bg-white p-1 w-48 h-6" placeholder="search" type="text" />
        </div>
      </div>
      <div className="hidden md:visible w-full h-28 bg-green-200 lg:px-40 px-8 md:grid grid-cols-4">
        {/* // logo */}
        <div className="flex justify-center items-center col-span-1">
          <a href="/">
            <img src={ASL} alt="As Logo" className="h-24" />
          </a>
        </div>

        <div className="col-span-3 ">
          <ul className="flex items-end h-full pb-6 gap-12 font-serif">
            <li className=" border-b-4 border-green-200 hover:border-b-4 hover:border-green-700"><a href="/">Home</a></li>

            <Menu title="Industries" />
            <Menu title="Servicies" />
            <Menu title="Products" />

            <li className="border-b-4 border-green-200 hover:border-b-4 hover:border-green-700"><a href="test.html">Research &
              Development</a></li>
          </ul>
        </div>
      </div>

      <div className="h-12 bg-green-200 visible md:hidden flex px-8 justify-between">
        <div className="flex justify-center items-center col-span-1">
          <img src="../assets/ASL.png" alt="As Logo" className="h-10" />
        </div>

        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            className="inline-block w-12 h-8 stroke-current text-black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h20M4 12h20M4 18h20"></path>
          </svg>
        </div>
      </div>
      {/* //  Header Component End */}
    </div>
  );
}

export default Header;