import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

function profile() {
  const { data: session, status } = useSession({ required: true });
  console.log(session);

  if (status === "authenticated") {
    return (
      <div className="flex justify-center items-center">
        
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src={session.user.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{session.user.name}</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="text-grey-darker text-base font-semibold">
              Email : {session.user.name}
            </p>
            <div className="flex item-center justify-center p-5">
              <button
                onClick={() => signOut()}
                className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Not Signed In</div>;
  }
}

export default profile;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }
  return {
    props: { session },
  };
};
