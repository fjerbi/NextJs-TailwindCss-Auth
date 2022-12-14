import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { project_title } from "../utils/variables";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{project_title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="py-20 bg-white">
          <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
            <div className="relative">
              <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                {" "}
                Home Page
              </h2>
              <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                {" "}
              </div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                  Drag-n-drop design
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                  Design Made Easy
                </h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12"> </div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                  know your data
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                  Optimized For Conversions
                </h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last"></div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                  Easy to customize
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                  Make It Your Own
                </h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
