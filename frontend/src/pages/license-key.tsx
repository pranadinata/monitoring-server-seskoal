import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

//import Components
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";

// import PhoneBook from "@views/form-input/phone-book";
// import SetNotif from "@views/form-input/set-notif";
// import SensorDetail from "@views/form-input/sensor-detail";

const LicenseKey = () => {
  return (
    <>
      {/* <BreadcrumbItem mainTitle="License" subTitle="License Key" /> */}
      <Row>
        <Col sm={12}>
          <Card>
            <div className="card-header text-center">
              <h1>Whatsapp Notify License</h1>
            </div>
            <Card.Body>
                <p className="text-center">
                    WhatsApp notifications are an effective way to send short
                    messages, alerts, or status updates directly to users'
                    cellphones via the WhatsApp application. This feature utilizes
                    the WhatsApp Business API, allowing organizations and
                    applications to integrate their systems and send automatic
                    notifications or be triggered by certain events. These
                    notifications are very useful for real-time communication with
                    customers or teams, providing important information such as
                    order confirmations, security alerts, logistics updates, or
                    appointment reminders. This feature increases user engagement
                    and satisfaction due to its ease of access and responsiveness.
                </p >
              <p className="text-center">
               
              </p>
              <br />
              <h3 className="text-center">
              License : <b>ABC12-23CGH-76HQP-92ARY-11123</b>
               
              </h3>
              <p className="text-center">
             
                Product guid is use for Verifying a License Key in Your
                Application
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

LicenseKey.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default LicenseKey;
