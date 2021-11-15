import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

//Components
import RepoCard from "../Components/Repos/RepoCard"
import Loader from "../Components/Loader";
import "../Components/Repos/RepoCard.styles.css"
const Repos = () => {
  const history = useHistory()
  //Hooks
  const { user } = useParams();
  //State
  const [repositories, setRepositories] = useState([]);
  const [loader, setLoader] = useState(false);

const handleHistory = () => {
  console.log(history);
  history.goBack();
};

  useEffect(() => {
    setRepositories([]);
    setLoader(true);
    const handleUserRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const result = await response.json();
      setRepositories(result);
      console.log(result);
    };
    handleUserRepos();
    setLoader(false);
  }, [user]);

  console.log(repositories)
  return (
    <>
    <div className="flex bg-gray-200 justify-center ">
    <div className="w-3/4 flex flex-col p-6">
      <div className="flex justify-between ">
      <button onClick={handleHistory} className="font-bold transform 
      hover:scale-110 motion-reduce:transform-none ">Back</button>
      <Link to="/"><button className="font-bold transform hover:scale-110 
      motion-reduce:transform-none ">Home</button></Link>
      </div>
      <h2 className="font-extrabold text-right text-3xl">{user} Repositories</h2>
      <div className="flex justify-around flex-wrap">
        
      {repositories && repositories.length > 0 
        && !loader 
      ? (
        repositories.map(repo => (
        <RepoCard
        repoName={repo.name}
        description={repo.description? repo.description : "no description"}
        urlRepo={repo.html_url}
        />
        ))
      ) : (
         <Loader />
      )}
      </div>
    </div>

    </div>
        </>
  );
};

export default Repos;
