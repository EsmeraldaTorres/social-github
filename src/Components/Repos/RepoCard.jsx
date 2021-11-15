import React from "react";
import "./RepoCard.styles.css"

const RepoCard = ({repoName, urlRepo, description})=>{
    return(
      <>
      <div className="border transform hover:scale-110 motion-reduce:transform-none 
      rounded-xl
       backg-black text-gray-200 p-4 basis m-4 flex flex-col">
            <div className="font-bold pt-2">{repoName}</div>
            <div className="text-xs">{description}</div>
            <div className="text-xs py-2 pr-3">
            <a target="_blank" rel="noopener" className="hover:text-purple-200" href={urlRepo}>{urlRepo}</a>
            </div>
      </div> 
      </>
    )
}

export default RepoCard