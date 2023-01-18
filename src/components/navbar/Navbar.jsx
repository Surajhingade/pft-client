import {  PlusCircleIcon, TemplateIcon } from "@heroicons/react/outline";
import { CashIcon } from "@heroicons/react/outline";
import React from "react";
import { useRecoilState } from "recoil";
import { ActiveTabState } from "../../atoms/ActiveTabState";
import {Link} from 'react-router-dom'
 
const Navbar = () => {
  const navLinks = [
    {
      id: 0,
      title: "Transaction",
      path:'/',
      icon: <CashIcon className="nav-icon" />,
    },
    {
      id: 1,
      title: "Transaction List",
      path:'/transactionlist',
      icon: <CashIcon className="nav-icon" />,
    },
    {
      id: 2,
      title: "Dashbord",
      path:'/dashbord',
      icon: <TemplateIcon className="nav-icon" />,
    },
    {
      id: 3,
      title: "Category",
      path:'/category',
      icon: <PlusCircleIcon className="nav-icon" />,
    }
   
  ];

  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[80vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between  "  >
      <div className="space-y-8 w-full">
        {navLinks.slice(0, 5).map((link) => {
          return <NavItem link={link} key={link.id} />;
        })}
        <div className="w-full border-t border-gray-200" />
        {navLinks.slice(5, 7).map((link) => {
          return <NavItem link={link} key={link.id} />;
        })}
      </div>

      <div className="xl:flex hidden flex-col items-center justify-center space-y-4 px-6 pb-5 font-small " > 
        <h1 className="text-xl w-full" >Transaction Make <br /> Easy!</h1>
        <p className="w-full font-medium" > <span>Developed By : </span>  <br /> <span className="underline" ><a className="decoration-none" href="https://www.prifabit.com" target="_blank" > PriFab It Solution</a></span> </p>
      </div>
    </nav>
  );
};



function NavItem({ link }) {
  const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);
  return (
    <div
      onClick={() => setActiveNavItem(link.id)}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${activeNavItem === link.id && "border-gray-900"} `}
    >

       <Link to={link.path}>
       <span>{link.icon}</span>
       </Link>
       <Link to={link.path}>
       <h1 className={`text-gray-600 group-hover:text-black xl:flex hidden ${activeNavItem == link.id && "text-black"} `}>
        {link.title}  
       </h1>
       </Link>
      
    </div>
  );
}

export default Navbar;
