import { Row, Col } from "antd";

const Container = ({ children }) => {
  return (
    <Row justify="center">
      <Col
        span={24}
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 20 }}
        lg={{ span: 18 }}
        xl={{ span: 16 }}
        xxl={{ span: 14 }}
      >
        {children}
      </Col>
    </Row>
  );
};

export default Container;