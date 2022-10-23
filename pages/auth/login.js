import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div>
        <p className="flex flex-row items-center justify-center font-semibold tracking-tighter">
          {" "}
          Welcome &nbsp; {session.user.name}
        </p>
        <button
          onClick={() => signOut()}
          className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p className="flex flex-row items-center justify-center font-semibold tracking-tighter">
          Not Signed in
        </p>

        <button
          onClick={() => signIn()}
          className="block uppercase mx-auto shadow bg-indigo-400 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        >
          Sign in
        </button>
      </div>
    );
  }
}

export default login;
