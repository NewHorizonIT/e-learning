import dbConnect from "@/lib/mongoose";
import React from "react";

const Home = async () => {
  await dbConnect();
  return <div>Home</div>;
};

export default Home;
