import "./info.css";
import Welcome from "../../asssets/Welcome.png";
import Button from "../../components/Button/Button";
import CustomizedCard from "../../components/Card";
import { Col, Row } from "antd";
function InfoSection() {
  return (
    <>
      <div className="information">
        <div>
          <img src={Welcome} />

          <p className="welcome_sentence">
            Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan
            konsep kesehatan yang berkaitan dengan keadaan covid sekarang
          </p>
        </div>
      </div>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <CustomizedCard />
          </Col>
          <Col span={8}>
            <CustomizedCard />
          </Col>
          <Col span={8}>
            <CustomizedCard />
          </Col>
          <Col span={8}>
            <CustomizedCard />
          </Col>
          <Col span={8}>
            <CustomizedCard />
          </Col>
        </Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button content="Load more" />
      </div>
    </>
  );
}

export default InfoSection;
