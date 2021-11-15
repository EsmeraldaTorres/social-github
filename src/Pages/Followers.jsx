import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
//Components
import FollowersInfo from "../Components/Followers/FollowerInfo"
 import Loader from "../Components/Loader";

const Followers = () => {

  //Hooks
  const { user } = useParams();
  const history = useHistory();
  //State
  const [followers, setFollowers] = useState([]);
  const [loader, setLoader] = useState(false);

const handleHistory = () => {
  console.log(history);
  history.goBack();
};

  useEffect(() => {
    setFollowers([]);
    setLoader(true);
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const result = await response.json();
      setFollowers(result);
      console.log(result);
    };
    handleUserFollowers();
    setLoader(false);
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/4 justify-center">
        <div>
          <div className="flex justify-between font-extrabold pt-8">
          <button onClick={handleHistory} className="font-bold transform hover:scale-110 motion-reduce:transform-none">Back</button>
          <h2 className="text-center text-3xl">{user}</h2>
          <p className="font-bold transform hover:scale-110 motion-reduce:transform-none ">Home</p>
          </div>
      <h2 className="text-center font-extrabold text-3xl">Followers</h2>
      </div>
    <div className="flex flex-wrap justify-center my-4 ">
      {followers && followers.length > 0 
       && !loader
       ? (
        followers.map((follower, key) => (
          <FollowersInfo
            user={follower.login}
            />
        ))
      ) : (
        <Loader />
      )}
      </div>
      <div className="flex justify-center p-4 rounded-xl bg-black">
        <div className="flex justify-evenly text-white 
        font-bold w-1/2 text-center text-xl">
          <div className="flex">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          <h2 className="text-center text-xl">{user}</h2>
          </div>
        <Link to={`/repositories/${user}`}>
          repositories
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Followers;
