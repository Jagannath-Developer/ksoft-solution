import { Input, Row, Col, Flex, Typography } from "antd";
import { FaGooglePlusG } from "react-icons/fa";
import { Divider } from "@mui/material";
import { Button } from "../../components";
import { useAppSelector } from "../../context/store";
import { IButton, ILables } from "./constant";
import { selectAuth } from "./redux/selectors";
import styles from "./index.module.scss";

function Auth() {
  const { auth } = useAppSelector(selectAuth);

  console.log(auth);
  const SignIn = () => {
    return (
      <Row className={`animate-none shadow-2xl lg:w-3/12 ${styles.container}`}>
        {auth ? (
          <Col span={24}>
            <Typography
              className="font-bold text-2xl mt-2"
              children={ILables.SIGNUP}
            />
          </Col>
        ) : (
          <Col span={24}>
            <Typography
              className="font-bold text-2xl mt-2"
              children={ILables.LOGIN}
            />
          </Col>
        )}
        {auth && (
          <Col span={24} className="mt-4">
            <label className="font-semibold" children={ILables.NAME} />
            <Input
              className="mt-2"
              type="text"
              placeholder="Enter your name"
              variant="filled"
            />
          </Col>
        )}
        <Col span={24} className="mt-4">
          <label className="font-semibold" children={ILables.PHONE} />
          <Input
            className="mt-2"
            type="text"
            placeholder="Enter your number or email"
            variant="filled"
          />
        </Col>
        {auth && (
          <Col span={24} className="mt-4">
            <label className="font-semibold" children={ILables.PASSWORD} />
            <Input
              className="mt-2"
              type="text"
              placeholder="Enter your password"
              variant="filled"
            />
          </Col>
        )}
        <Col span={24} className="mt-6">
          <Flex justify="end">
            <Typography
              className="text-green-600 font-semibold"
              children={ILables.TROUBLE}
            />
          </Flex>
        </Col>

        {auth ? (
          <Col span={24} className="mt-6">
            <Button
              block={true}
              size="large"
              children={IButton.SIGNUP}
              className="bg-green-900 text-white"
            />
          </Col>
        ) : (
          <Col span={24} className="mt-6">
            <Button
              block={true}
              size="large"
              children={IButton.LOGIN}
              className="bg-green-900 text-white"
            />
          </Col>
        )}

        <Col span={24} className="mt-6">
          <Divider children={ILables.METH0DS} />
        </Col>
        <Col span={24} className="my-6">
          <Button
            block={true}
            size="large"
            children={
              <Flex justify="center" align="center" gap={10}>
                <FaGooglePlusG color="red" />
                {IButton.GOOGLE}
              </Flex>
            }
            className=" text-blck"
          />
        </Col>
      </Row>
    );
  };

  return <SignIn />;
}

export default Auth;
