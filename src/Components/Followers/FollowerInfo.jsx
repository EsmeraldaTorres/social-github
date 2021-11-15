import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserInformation from "../Home/UserInformation";
import NotFound from "../../Pages/NotFound";

const FollowerInfo = ({user}) =>{

  const[followerInfo,setFollowerInfo]=useState(null)
  const[error,setError]=useState(true);

  useEffect(()=>{
    const handleSearchFollower = async e =>{
    //   e.preventDefault();
      setFollowerInfo(null)
      setError(false)
      try{
      const API = `https://api.github.com/users/${user}`;
      const response = await fetch(API);
      const result = await response.json();
      console.log(result);
      // setUserInformation(result);
      if(result.message){
          setError(true);
        }else{;
          setFollowerInfo(result)
        }
    }   catch(e){
      //   setLoader(false)
        console.log(e)
    }} 
    handleSearchFollower()
  },[user])
console.log(followerInfo)

    return(
      <>
      <div className="flex md:w-1/2 lg:w-1/3  justify-center flex-col  items-center">
          <div className="group flex m-2 justify-center  text-xs">
          { error ? <NotFound/> : 
          followerInfo ? (
            <UserInformation 
            avatar={followerInfo?.avatar_url}
            github={followerInfo?.html_url}
            github_name={followerInfo?.login}
            name={followerInfo?.name}
            public_repos={followerInfo?.public_repos}
            followers={followerInfo?.followers}
            following={followerInfo?.following}
            /> ): null
          }
        </div>
       </div>
       </>
    )
}

export default FollowerInfo