import { FC, ReactElement } from "react";
import { Avatar, Badge, Col, Flex, Row, Divider, Typography } from "antd";
import { FiShoppingBag } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Box } from "@mui/material";
import { ILable } from "./constant";
import { MenuOutlined } from "@ant-design/icons";

const NavBar: FC = (): ReactElement => {
  return (
    <Row className="shadow-md py-3 bg-slate-50">
      <Col span={24}>
        <Row className="gap-8 md:gap-0">
          <Col span={6} className="hidden md:block">
            <Flex justify="center" align="center" gap={10}>
              <Box className="bg-green-900 p-2 rounded-md ">
                <FiShoppingBag color="white" size={20} />
              </Box>
              <Typography
                className="font-bold text-2xl"
                children={ILable.TITLE}
              />
            </Flex>
          </Col>
          <Col className="w-6/12 lg:w-6/12 ms-3 lg:mx-0">
            <Flex
              justify="space-around"
              align="center"
              className="bg-slate-100 p-2 rounded-md border"
            >
              <Typography
                children={ILable.CATEGORY}
                className="hidden md:block"
              />
              <Divider type="vertical" className="hidden md:block" />

              <input
                placeholder={ILable.PLACEHOLDER}
                className="w-9/12 border-none focus:outline-none bg-slate-100 h-7"
              />
              <CiSearch size={24} />
            </Flex>
          </Col>
          <Col span={6}>
            <Flex align="center" className="mt-2 gap-3 lg:gap-6 ms-0 md:ms-5 ">
              <Badge count={0} size="small" showZero>
                <FaCartArrowDown size={26} />
              </Badge>
              <Badge size="small" count={2}>
                <IoMdNotifications size={26} />
              </Badge>
              <Badge size="small" count={3}>
                <MdEmail size={26} />
              </Badge>
              <Col className="hidden lg:block">
                <Avatar size={44} children="j" className="text-center " />
              </Col>
              <MenuOutlined className="text-lg block md:hidden" />
            </Flex>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NavBar;
