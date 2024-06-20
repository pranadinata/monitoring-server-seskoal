import React, { ReactElement, useEffect, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import Image from "next/image";

import avatar1 from "@assets/images/user/avatar-1.jpg";

import getDataService from "@services/setting/get-data.module";
interface PhoneContact {
  nama: string;
  no_hp: string;
  status: boolean;
}
const PhoneContact = () => {
  const [PhoneBook, setPhoneBook] = useState<PhoneContact[]>([]);
  useEffect(() => {
    getDataService.getPhoneBook().then((result) => {
      setPhoneBook(result.data);
    });
  }, []);
  return (
    <>
      <Col sm={6} xl={4}>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Max Suhu</p>
              <button className="btn btn-secondary">Edit</button>
            </div>
            <h5 className="mb-0">80 °C</h5>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0">Max Kelembapan</p>
              <button className="btn btn-secondary">Edit</button>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="mb-0">50 %H</h5>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PhoneContact;
