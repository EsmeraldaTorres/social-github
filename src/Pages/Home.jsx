import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchForm from "../Components/Home/SearchForm.jsx"
import UserInformation from "../Components/Home/UserInformation.jsx";
import NotFound from "../Pages/NotFound"
import Loader from "../Components/Loader.jsx";

const Home = () =>{
    const [userName, setUserName]=useState("")
    const [userInformation, setUserInformation] =useState(null)
    const [error, setError]= useState(false)
    const [loader,setLoader] = useState(false)
    
    const handleUserName = ({value}) => {
        setUserName(value)
    }

    const handleSearchUser = async e =>{
        e.preventDefault();
        setUserInformation(null)
        setLoader(true)
        setError(false)
        try{
        const API = `https://api.github.com/users/${userName}`;
        const response = await fetch(API);
        const result = await response.json();
        console.log(result);
        // setUserInformation(result);
        if(result.message){
            setError(true);
          }else{;
            setUserInformation(result)
            setLoader(false)
          }
      }   catch(e){
          setLoader(false)
          console.log(e)
      }
    }
console.log(userInformation)


    return(
      <>
        <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 md:w-7/12 ">
        <h1 className="font-extrabold text-3xl text-center pt-6">Github Network</h1>
        <SearchForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
        />
        { loader ? <Loader/> :
        error ? <NotFound/> :
        userInformation ? (
          <div className="flex p-4 my-8 bg-gray-100 rounded-2xl flex-col 
          md:flex-row justify-between items-center border">
        <UserInformation 
        avatar={userInformation?.avatar_url}
        github={userInformation?.html_url}
        github_name={userInformation?.login}
        name={userInformation?.name}
        public_repos={userInformation?.public_repos}
        followers={userInformation?.followers}
        following={userInformation?.following}
        />        </div>) : null
       }

        </div>
        </div>
        </>
    )
}

export default Home