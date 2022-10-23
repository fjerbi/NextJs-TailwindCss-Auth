import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { data: session, status } = useSession();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <Link href="/">Welcome</Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <div className="ml-2">
                    {session ? (
                      <div className="cursor-pointer hover:translate-x-0">
                        <Link href="/auth/profile">
                          <div className="flex flex-row">
                            <p className="font-semibold p-3">
                              {session.user.name}
                            </p>
                            <Image
                              className="rounded-xl"
                              src={session.user.image}
                              alt=""
                              width="45"
                              height="45"
                            />
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/auth/login">Login</Link>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
