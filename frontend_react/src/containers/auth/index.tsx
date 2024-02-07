import React from "react";
import styles from "./index.module.scss";
import { Input } from "antd";
import { Divider, Typography } from "@mui/material";
import { Button } from "../../components";
interface IAuthProps {
  setToggle: boolean;
}
function Auth() {
  const SignIn = () => {
    return (
      <div>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Sign In
        </Typography>

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
        <div className="text-right  mt-5">
          <Typography className="text-green-600" sx={{ fontSize: 14 }}>
            Getting Trouble?
          </Typography>
        </div>
        <Button
          className="mt-6  bg-green-900 text-white"
          size="large"
          block={true}
        >
          Sign In
        </Button>
        <div className="mt-6">
          <Divider>
            <Typography>Or using other method</Typography>
          </Divider>
        </div>

        <Button
          className="my-6"
          type="primary"
          ghost={true}
          block={true}
          size="large"
        >
          Sign In with Google
        </Button>
      </div>
    );
  };
  const SignUp = () => {
    return (
      <div>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
          Sign In
        </Typography>

        <div className={styles.marginTop}>
          <Typography sx={{ fontSize: 15, fontWeight: 500 }}>Name</Typography>
          <Input
            placeholder="Enter your name"
            variant="filled"
            className="mt-3"
          />
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
        <div className={styles.marginTop}>
          <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
            Password
          </Typography>
          <Input
            placeholder="Enter your password"
            variant="filled"
            className="mt-3"
          />
        </div>
        <div className="text-right  mt-5">
          <Typography className="text-green-600" sx={{ fontSize: 14 }}>
            Getting Trouble?
          </Typography>
        </div>
        <Button
          className="mt-6  bg-green-900 text-white"
          size="large"
          block={true}
        >
          Sign Up
        </Button>
        <div className="mt-6">
          <Divider>
            <Typography>Or using other method</Typography>
          </Divider>
        </div>

        <Button
          className="my-6"
          type="primary"
          ghost={true}
          block={true}
          size="large"
        >
          Sign In with Google
        </Button>
      </div>
    );
  };
  return (
    <div className={`${styles.container} border shadow-2xl w-full  lg:w-3/12`}>
      <SignIn />
    </div>
  );
}

export default Auth;
