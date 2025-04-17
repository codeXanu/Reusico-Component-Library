import React from "react";

export default function Footer() {
    return(
        <footer className="w-full bg-gray-100 shadow-inner p-6 pl-72 text-gray-600 text-center">
        © {new Date().getFullYear()} Reusico. All rights reserved.
      </footer>
    )
}