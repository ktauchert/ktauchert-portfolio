import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
      <footer className="max-w-[1280px] lg:m-auto px-5 flex py-3 justify-between text-zinc-400">
          <span className="">Copyright 2024</span>
          <span className="hover:text-zinc-100">
              <Link href="/impressum">Impressum und Datenschutz</Link>
          </span>
          <span className="text-cyan-600 hover:text-orange-600">
              <Link
                  href={
                      "mailto:developer@ktauchert.de?subject=Nachricht%20vom%20Portfolio&body=Hallo%20Karsten%2C%0D%0A%0D%0A"
                  }
              >
                  developer@ktauchert.de
              </Link>
          </span>
      </footer>
  );
}

export default Footer