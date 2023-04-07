import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={isOpen ? "sideBarOpen" : "sideBarClose"}>
      <h1 className={"user"}>
        {isOpen ? "Itokawa" : "I"} 
      </h1>
      <ul className={"nav"}>
        <li className={"navItem"}>
          <Link href={""} className={"navLink"}>
            <span className={"navIcon"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"iconBase"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>            
            </span>
            {isOpen ? 
            <p className={"navTitle"}>Home</p>
            :
            ""  
            }
          </Link>
        </li>
        <li className={"navItem"}>
          <Link href={""} className={"navLink"}>
            <span className={"navIcon"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"iconBase"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </span>
            {isOpen ? 
            <p className={"navTitle"}>Posts</p>
            :
            ""
            }
          </Link>
        </li>
      </ul>
      <button className={"signOutBtn"}>
        <span className={"signOutBtnIcon"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"iconSmall"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </span>
        {isOpen ? 
        <p className={"signOutBtnTitle"}>Log out</p> 
        : 
        ""
        }
      </button>
    </div>
  )
}

export default SideBar;