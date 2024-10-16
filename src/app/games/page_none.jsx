import Link from "next/link";
import React from "react";

function Games() {
  return (
    <div className="w-screen h-[calc(100vh-120px)] flex justify-start items-center flex-col">
      <div className="my-20">
        <h3 className="text-4xl bold text-center">Spiele</h3>
        <p className="text-sm text-center">
          Werden allmählich erweitert
        </p>
      </div>
      <div className="w-full">
        <h4 className="text-2xl bold">Auswahl:</h4>
        <ul className="list my-5">
          <li className="ml-5 my-2">
            {" "}
            <Link
              className="hover:text-orange-600 text-cyan-600 break-words"
              href={"/games/blox-game"}
            >
              Blox-Game
            </Link>
          </li>
          <li className="ml-5 my-2">
            {" "}
            <Link
              className="hover:text-orange-600 text-cyan-600 break-words"
              href={"/games/ar-demo"}
            >
              AR-Demo (Noch im Testlauf)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Games;
