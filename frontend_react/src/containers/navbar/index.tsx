import { Col, Flex, Row, Typography } from "antd";
import React from "react";
import { ILable } from "./constant";

function NavBar() {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={4}>
            <Flex justify="center">
              <Typography className="font-bold text-2xl" children={ILable.TITLE} />
            </Flex>
          </Col>
          <Col span={16}>
            <Flex justify="center">search bar</Flex>
          </Col>
          <Col span={4}>cart</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NavBar;
