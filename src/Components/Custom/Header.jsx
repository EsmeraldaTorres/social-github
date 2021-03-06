import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-blue-300 flex justify-between items-center mi-clase">
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">Github API</h2>
      <p className="mr-10 text-white block tablet:hidden">Menu</p>
    </header>
  );
};

export default Header;