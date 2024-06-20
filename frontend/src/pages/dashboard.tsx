import React, { ReactElement } from "react";
import { Alert, Row } from "react-bootstrap";

//import Components
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";

import PhoneBook from "@views/form-input/phone-book";
import SetNotif from "@views/form-input/set-notif";
import SensorDetail from "@views/form-input/sensor-detail";
import Style from "styled-jsx/style";

const Dashboard = () => {
  return (
    <>
      <Style></Style>
      <BreadcrumbItem mainTitle="Dashboard" subTitle="Home" />
      <Row>
        <Alert key="success" variant="success">
          Alert whatsapp sedang mode ON !
        </Alert>

        <React.Fragment>
          <SensorDetail></SensorDetail>
          <Row>
            <PhoneBook></PhoneBook>
            <SetNotif></SetNotif>
          </Row>
        
        </React.Fragment>
      </Row>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
