import React from "react";
import styles from "./index.module.scss";
import { Input } from "antd";
import { Button, Divider, Typography, styled } from "@mui/material";
function Auth() {
  const SignInButton = styled(Button)`
    width: 100%;
    margin-top: 20px;
  `;
  const GoogleButton = styled(Button)`
    margin-top: 20px;
    width: 100%;
  `;
  return (
    <div className={`${styles.container} shadow-lg w-full  lg:w-3/12`}>
      <div>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
      </div>
      <div className={styles.marginTop}>
        <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
          Phone Number or Email
        </Typography>
        <Input
          placeholder="Enter your phone number or email"
          variant="filled"
          className="mt-3"
        />
      </div>
      <div className="flex justify-end mt-5">
        <Typography>Getting Trouble?</Typography>
      </div>
      <SignInButton variant="contained">Sign In</SignInButton>
      <div className="mt-6">
        <Divider>
          <Typography>Or using other method</Typography>
        </Divider>
      </div>
      <div>
        <GoogleButton variant="outlined">Sign In with Google</GoogleButton>
      </div>
    </div>
  );
}

export default Auth;
