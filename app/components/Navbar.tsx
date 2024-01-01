
"use client"
import { PATHS } from "@/core/paths";
import { deleteCookie } from "cookies-next";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";



const Navbar = () => {
  const auth = getAuth();
  const router = useRouter();

  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        deleteCookie("token");
        router.push(PATHS.HOME);
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  return (
    <nav className="absolute inset-x-2 sm:inset-x-5  z-20 w-[95vw]   bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-2xl  my-4 rounded-md">
      <div className="container px-6 py-3 mx-auto flex items-center justify-between">
        <div className="flex-1">
          <a href="/">
            <Image
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
              width={100}
              height={100}
            />
          </a>
        </div>
       
        <div className="bg-transparent mt-0 p-0 ">
          <div>
            <button
              onClick={logOut}
              className="text-white bg-indigo-900 hover:bg-indigo-600 border-0 outline-none text-md py-3 px-4 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
