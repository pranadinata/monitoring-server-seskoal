import React, { ReactElement } from "react";
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";

import { Row } from "react-bootstrap";

import PhoneBook from "@views/form-input/phone-book"
import SetNotif from "@views/form-input/set-notif"
import SensorDetail from "@views/form-input/sensor-detail"

const PhoneContact = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Setting" subTitle="Setting Apps" />
      <SensorDetail></SensorDetail>
      <Row>
        <PhoneBook></PhoneBook>
        {/* <SetNotif></SetNotif> */}
      </Row>
      
    </React.Fragment>
  );
};

PhoneContact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PhoneContact;
