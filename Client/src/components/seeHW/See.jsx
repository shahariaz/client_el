import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
const SeeHomeworkButton = () => {
  const { user } = useAuth();
  console.log(`See ${user} name is ${user._id}`);
  // Use the useParams hook to get the parameters from the URL

  return (
    <div className="flex justify-center items-center h-screen">
      <Link
        to={`/homework/${user._id}`}
        className="bg-blue-500 text-white p-6 rounded-md"
      >
        See Student Homework
      </Link>
    </div>
  );
};

export default SeeHomeworkButton;
