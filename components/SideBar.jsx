import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-orange-500  shadow-sm flex flex-col z-index 10">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/logo.png"
            alt="logo placa mae"
          />
        </picture>
      </div>

      <Link href="/">
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/"
              ? "bg-orange-100 text-orange-500"
              : "text-white hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Pagina Inicial</p>
          </div>
        </div>
      </Link>
      <Link href="/quiz">
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/quiz"
              ? "bg-orange-100 text-orange-500"
              : "text-white hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          <div className="mr-2">
            <CreditCardIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Quiz</p>
          </div>
        </div>
      </Link>
      <Link href="/pagIndicacoes/indicacoes">
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/indicacoes"
              ? "bg-orange-100 text-orange-500"
              : "text-white hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          <div className="mr-2">
            <BookOpenIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Indicações</p>
          </div>
        </div>
      </Link>
      <Link href="/pagSaibaMais/saibamais">
        <div
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/saibamais"
              ? "bg-orange-100 text-orange-500"
              : "text-white hover:bg-orange-100 hover:text-orange-500"
          }`}
        >
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Saiba mais</p>
          </div>
        </div>
      </Link>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
