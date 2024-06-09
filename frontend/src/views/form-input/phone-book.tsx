import React, { ReactElement, useEffect, useState } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from "next/image";

import avatar1 from "@assets/images/user/avatar-1.jpg";

import getDataService from "@services/setting/get-data.module";
interface PhoneContact {
  nama: string,
  no_hp: string,
  status: boolean
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
      <Col md={6} xl={8}>
        <Card className="table-card">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <h4>Phone Book</h4>
            <Dropdown>
              <Dropdown.Toggle
                as="a"
                className="avtar avtar-xs btn-link-secondary arrow-none"
                href="#!"
              >
                <i className="material-icons-two-tone f-18">more_vert</i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item href="#">View</Dropdown.Item>
                <Dropdown.Item href="#">Edit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body className="py-2 px-0">
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-sm mb-0">
                <tbody>
                  { PhoneBook?.map((item, index) => {
                    return (
                      <tr>
                        <td>
                          <div className="d-inline-block align-middle">
                            <Image
                              src={avatar1}
                              alt="user image"
                              className="img-radius align-top m-r-15"
                              width="40"
                            />
                            <div className="d-inline-block">
                              <h6 className="m-b-0">{item?.nama}</h6>
                              <p className="m-b-0">Tim IT Infolahta</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div role="alert" className={ item?.status == true ? 'alert alert-success' : 'alert alert-danger'}>
                            <span>+ {item?.no_hp} </span>
                          </div>
                        </td>
                        <td className="text-end">
                          <button className="btn avtar avtar-xs btn-light-danger me-1">
                            <i className="ti ti-x"></i>
                          </button>
                          <button className="btn avtar avtar-xs btn-light-success">
                            <i className="ti ti-check"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PhoneContact;
