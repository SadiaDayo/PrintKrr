import React from "react";
import { Col, Divider, Row, Card } from "antd";
import { useState, useEffect } from "react";

const style: React.CSSProperties = {
  background: "#FFFFFF",
  padding: "8px 50px",
};

const { Meta } = Card;

const HeroSection = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(1);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const idUpdater = () => {
    setLoading(true);
    setId(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products./${id}`);
      const response = await data.json();
      setData(response);
      setLoading(false);
    };
    setTimeout(fetchData, 2000);
  }, [id]);

  return (
    <div>
      <Divider orientation="left"></Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
