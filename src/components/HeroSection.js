import React from "react";
import { Col, Divider, Row, Card } from "antd";
import { useState, useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const style: React.CSSProperties = {
  background: "#FFFFFF",
  padding: "8px 50px",
};

const { Meta } = Card;

const LocalizedModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Open"
        cancelText="Close"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};

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

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Bla bla ...",
      okText: "Open",
      cancelText: "Close",
    });
  };

  return (
    <div>
      {contextHolder}
      <Divider orientation="left"></Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style} onClick={confirm}>
            >
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
          <div style={style} onClick={confirm}>
            >
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
          <div style={style} onClick={confirm}>
            >
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
          <div style={style} onClick={confirm}>
            >
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
