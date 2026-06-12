"use client";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import { useEffect } from "react";
//import { useRouter } from "next/navigation";
import { GetStarted } from "@/components";
import { IconMenu2, IconX  } from "@tabler/icons-react";



export default function Navbar() {
  //  const router = useRouter();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

     useEffect(() => {
    const handleScroll = () => {
      setMobileDrawerOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="w-full flex py-6 px-5 lg:px-27.5 justify-between items-center 2xl:max-w-380 2xl:mx-auto">
      <div><Link href="/"> <Image src="/icons/PaeLogo.svg" alt="company-logo"  width={110} height={24} priority/> </Link></div>
      <div className="hidden lg:flex">
        <ul className="flex gap-12 font-body text-neutral-400">
          <li className=""><Link href="/features"> Features</Link></li>
          <li className=""><Link href="/pricing"> Pricing</Link></li>
          <li className=""><Link href="/about"> About</Link></li>
        </ul>
      </div>
      <div>
        <GetStarted 
          label="Get started"
          className="hidden lg:flex"
        />
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleNavbar} className=''> 
          {mobileDrawerOpen ?<IconX/> : <IconMenu2/>}
        </button>
      </div>

      <div
         className={ `lg:hidden absolute top-16 right-4 w-52 z-50 transition-all duration-300 bg-black p-3 rounded-xl  ${
            mobileDrawerOpen 
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4  pointer-events-none" 
            }`}
      >
        <div className="">
           <ul className="flex flex-col gap-5">
              <li> <Link  href="/features" onClick={() => setMobileDrawerOpen(false)}>Features</Link></li>
                           
              <li> <Link href="/pricing" onClick={() => setMobileDrawerOpen(false)}>Pricing</Link></li>

              <li> <Link href="/about" onClick={() => setMobileDrawerOpen(false)}>About</Link></li>
                            
            </ul>

        </div>

      </div>









    </nav>
  )
}

