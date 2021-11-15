import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserInformation.css"

const userInformation = ({avatar,github,github_name,name,
public_repos, followers,following}) =>{


    return(
        <>
          <div className="md:w-1/2 flex flex-col 
          justify-center 
          items-center p-4 bg-gray-100
          rounded-l-3xl group
          group-hover:bg-gray-300">
            <h2 className="font-extrabold text-center text-2xl">{name}</h2>
            <img src={avatar} alt="userPicture" className="rounded-full
            border-gray-200 avatar border-img" />
          </div>

          <div className="md:w-1/2 p-4 bg-gray-100 rounded-r-3xl flex flex-col 
          items-center 
          group-hover:bg-gray-300 justify-center text-center">

            <div className="flex hover:text-gray-600 justify-center text-center">
              
              <Link className="flex justify-center text-center" to={`/repositories/${github_name}`}> 
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
              <span>Repositories: {public_repos}</span>
              </Link>
              <span className="font-bold md:hidden"> · </span>
            
            </div>

            <div className="flex hover:text-gray-600 justify-center text-center">

              <Link className="flex justify-center text-center " to={`/followers/${github_name}`}>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>{followers} followers</span>
              </Link> 
              <span className="font-bold md:hidden"> · </span>
              
            </div>

            <div className="flex justify-center 
            hover:text-gray-600 text-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>{following} following</span>  
            </div>
            
            <div className="flex hover:text-white justify-center">
              <div>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <div className="hover:text-white">
              <a target="_blank" href={github}>{github_name}</a>
              </div>
            </div>
          </div>
        </>
    )
}

export default userInformation