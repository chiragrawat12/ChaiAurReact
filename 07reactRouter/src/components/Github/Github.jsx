import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

function Github() {
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/chiragrawat12")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers:{data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/chiragrawat12");
  return response.json();
};
