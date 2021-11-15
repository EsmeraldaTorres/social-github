import React from "react";

const SearchForm = ({ handleUserName, handleSearchUser }) => {
  return (
    <form
      action=""
      className="w-5/6 tablet:w-1/2  m-auto mt-10 text-center"
      onSubmit={e => handleSearchUser(e)}
    >
      <input
        type="text"
        placeholder="Enter user name"
        className="p-2 w-2/3 tablet:w-3/4 search-input border border-gray-400"
        onChange={({ target }) => handleUserName(target)}
      />
      <input
        type="submit"
        value="Search !"
        className="rounded-r-2xl border border-gray-400 p-2 w-1/3 tablet:w-1/4 bg-black hover:bg-yellow text-white hover:text-black search-input_button"
      />
    </form>
  );
};

export default SearchForm;
