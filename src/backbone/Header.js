import Menu from "../components/Menu";
import ASL from "../assets/ASL.png"
import MobileDropDown from "./mobiledropdown";
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  return (
    <div>

      <div className="hidden md:visible md:grid grid-cols-5 w-full bg-green-700 h-10 px-11 lg:px-40">

        <div className="col-span-1"></div>
        <div className="col-span-3 min-w-max">
          <ul className="flex text-sm font-extralight text-white h-full justify-center items-center">
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black duration-500"><a className="bordered border-r-2 px-2"
              href="https://ecomm-wintercodenkjj.vercel.app/">E Eommerce</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black duration-500"><a className="bordered border-r-2 px-2"
              href="/News">Latest news</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black duration-500"><a className="bordered border-r-2 px-2"
              href="/Aboutus">Who we are</a></li>
            <li className="h-full flex items-center hover:bg-green-300 hover:text-black duration-500"><a className="px-2" href="test.html">English</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center col-span-1">
          <input className=" bg-white p-1 w-40 h-6 border-none" placeholder="search..." type="text" />
          <div className=" w-6 h-6 bg-green-500 flex justify-center items-center text-white">
            <AiOutlineSearch size={20} />
          </div>
        </div>
      </div>
      <div className="hidden md:visible w-full h-28 bg-green-200 lg:px-40 px-8 md:grid grid-cols-4">

        <div className="flex justify-center items-center col-span-1">
          <a href="/">
            <img src={ASL} alt="As Logo" className="h-24" />
          </a>
        </div>

        <div className="col-span-3 ">
          <ul className="flex items-end h-full pb-6 gap-12 font-serif">
            <li className=" animunder after:w-0"><a href="/">Home</a></li>

            <Menu title="Industries" />
            <Menu title="Servicies" />
            <Menu title="Products" />

            <li className="animunder after:w-0"><a href="Research_&_Development">Research &
              Development</a></li>
          </ul>
        </div>
      </div>

      <div className="h-12 bg-green-200 visible md:hidden flex px-8 justify-between">
        <div className="flex justify-center items-center col-span-1">
          <img src={ASL} alt="As Logo" className="h-10" />
        </div>

        {/* 
the dropdown component is used to display links on the mobile adaptation of the website
*/}
        <MobileDropDown />
      </div>
      {/* //  Header Component End */}
    </div>
  );
}

export default Header;