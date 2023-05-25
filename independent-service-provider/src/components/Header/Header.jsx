import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleMobileNav = () => {
    setNavOpen(!navOpen);
    console.log(navOpen ? "True" : "False");
  };
  const handleCloseBtn = () => {
    setNavOpen(navOpen === false);
  };

  return (
    <>
      <header className="py-4 bg-gray-100">
        <div className="container">
          <div className="header-inner flex justify-between items-center">
            <div className="site-logo">
              <a href="/" className="font-bold text-2xl">
                eCare
              </a>
            </div>
            <div className="navigation-part ml-auto">
              {/* Start Hamburger button */}
              <button
                onClick={handleMobileNav}
                className="hamburger flex lg:hidden no-underline h-full items-center pl-0 pr-0 sm:pr-2 xl:px-5 text-grey hover:text-white hover:bg-grey-darkest"
              >
                <span className="open">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1525 1.66667H0.847458C0.381356 1.66667 0 1.29167 0 0.833333C0 0.375 0.381356 0 0.847458 0H19.1525C19.6186 0 20 0.375 20 0.833333C20 1.29167 19.6186 1.66667 19.1525 1.66667Z"
                      fill="#231F20"
                    ></path>
                    <path
                      d="M11.7119 8.33333H0.847458C0.381356 8.33333 0 7.95833 0 7.5C0 7.04167 0.381356 6.66667 0.847458 6.66667H11.7119C12.178 6.66667 12.5593 7.04167 12.5593 7.5C12.5593 7.95833 12.178 8.33333 11.7119 8.33333Z"
                      fill="#231F20"
                    ></path>
                    <path
                      d="M19.1525 15H0.847458C0.381356 15 0 14.625 0 14.1667C0 13.7083 0.381356 13.3333 0.847458 13.3333H19.1525C19.6186 13.3333 20 13.7083 20 14.1667C20 14.625 19.6186 15 19.1525 15Z"
                      fill="#231F20"
                    ></path>
                  </svg>
                </span>
              </button>
              {/* End Hamburger button */}

              <div
                className={`${
                  navOpen ? "left-0" : "-left-full"
                } navigation absolute top-0 w-4/5 md:w-full h-full bg-gray-300 lg:bg-transparent lg:static transition-all duration-300`}
              >
                <div
                  onClick={handleCloseBtn}
                  id="nav-close-btn"
                  className="mt-2 cursor-pointer lg:hidden absolute right-8 top-4"
                >
                  <button type="button" className="hamburger-menu">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.74761 7.50012L14.7413 1.50637C15.0862 1.16137 15.0862 0.603743 14.7413 0.258747C14.3963 -0.086249 13.8386 -0.086249 13.4937 0.258747L7.50001 6.2525L1.50634 0.258747C1.16135 -0.086249 0.603732 -0.086249 0.258742 0.258747C-0.0862475 0.603743 -0.0862475 1.16137 0.258742 1.50637L6.25239 7.50012L0.258742 13.4939C-0.0862475 13.8389 -0.0862475 14.3965 0.258742 14.7415C0.430798 14.9135 0.65667 15 0.882542 15C1.10841 15 1.33429 14.9135 1.50634 14.7415L7.49998 8.74774L13.4936 14.7415C13.6657 14.9135 13.8916 15 14.1174 15C14.3433 15 14.5692 14.9135 14.7412 14.7415C15.0862 14.3965 15.0862 13.8389 14.7412 13.4939L8.74761 7.50012Z"
                        fill="#231F20"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 px-8 lg:px-0 py-8 lg:py-0">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    {user?.uid && 
                      <NavLink
                        to="/addservice"
                        className={({ isActive }) =>
                        isActive ? "text-red-600 font-bold" : "font-bold"
                      }
                      >
                        Add Service
                      </NavLink>
                    }
                  </li>
                  <li>
                    {user?.uid ? (
                      <NavLink
                        onClick={async () => await signOut()}
                        className="font-bold bg-sky-400 px-4 py-2 text-white rounded-lg"
                      >
                        Logout
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/login"
                        className="no-underline h-full flex margin_mobile lg:mr-0 items-center px-2 text-black transition ease-in-out duration-500 hover:text-orenge-100 hover:transition hover:ease-in-out hover:duration-500 user-menu font-Gotham font-semibold uppercase md:text-font14 xl:text-font15"
                      >
                        <svg
                          className="transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500"
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.587891 18.1364C0.587891 18.6133 0.974165 19 1.45153 19C1.92889 19 2.31516 18.6133 2.31516 18.1364C2.31516 15.0888 4.06964 12.3907 6.8044 11.1148C7.75084 11.7298 8.87678 12.0909 10.087 12.0909C11.3019 12.0909 12.4322 11.7274 13.3808 11.108C14.1972 11.4934 14.9538 12.0119 15.5835 12.6412C17.0518 14.11 17.8606 16.0616 17.8606 18.1364C17.8606 18.6133 18.2469 19 18.7243 19C19.2016 19 19.5879 18.6133 19.5879 18.1364C19.5879 15.6003 18.5994 13.2152 16.8047 11.42C16.2041 10.8191 15.5062 10.3039 14.7573 9.87916C15.616 8.83509 16.1325 7.49957 16.1325 6.04545C16.1325 2.71194 13.4201 0 10.087 0C6.75395 0 4.04159 2.71194 4.04159 6.04545C4.04159 7.49604 4.55601 8.82829 5.41084 9.87125C2.44615 11.5404 0.587891 14.6592 0.587891 18.1364ZM10.087 1.72727C12.468 1.72727 14.4052 3.66455 14.4052 6.04545C14.4052 8.42636 12.468 10.3636 10.087 10.3636C7.70614 10.3636 5.76887 8.42636 5.76887 6.04545C5.76887 3.66455 7.70614 1.72727 10.087 1.72727Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="sr-only">My Account</span>
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
