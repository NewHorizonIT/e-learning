import React from "react";

const layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default layout;
