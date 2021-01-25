import React from "react";

const useUser = () => {
  const [user, setUser] = React.useState({ uid: "123456" });
  return { user };
};

export default useUser;
