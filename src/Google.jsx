import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const Google = () => {
  const responseGoogle = async (authResult) => {
    try {
        if (authResult['code']){
            
        }
    } catch (error) {
      console.log(error);
    }
  };

  const Googlelogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <>
      <button onClick={Googlelogin}>Login With Google</button>
    </>
  );
};

export default Google;
