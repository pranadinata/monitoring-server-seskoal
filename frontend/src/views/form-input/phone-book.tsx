"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import Image from "next/image";

import avatar1 from "@assets/images/user/avatar-1.jpg";

import getDataService from "@services/setting/get-data.module";

import internal from "stream";
interface PhoneContact {
  id: number;
  nama: string;
  no_hp: string;
  status: boolean;
}
const PhoneBook = () => {
  const [show, setShow] = useState(false);
  const [PhoneBook, setPhoneBook] = useState<PhoneContact[]>([]);
  useEffect(() => {
    getDataService.getPhoneBook().then((result) => {
      setPhoneBook(result.data);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {

    setShow(true);
  };
  return (
    <>
      <Col md={6} xl={8}>
        <Card className="table-card">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <h4>Daftar Penerima Notif</h4>
            <Dropdown>
              <Dropdown.Toggle
                as="a"
                className="avtar avtar-xs btn-link-secondary arrow-none"
                href="#!"
              >
                <i className="material-icons-two-tone f-18">more_vert</i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item href="#" onClick={handleShow}>
                  Tambah Data
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body className="py-2 px-0">
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-sm mb-0">
                <tbody>
                  {PhoneBook?.map((item, index) => {
                    return (
                      <tr key={index}>
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
                          <div
                            role="alert"
                            className={
                              item?.status == true
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                          >
                            <span>+ {item?.no_hp} </span>
                          </div>
                        </td>
                        <td className="text-end">
                          <button className="btn avtar avtar-xs btn-light-danger me-1">
                            <i className="ti ti-trash"></i>
                          </button>
                          <button className="btn avtar avtar-xs btn-light-info">
                            <i className="ti ti-pencil"></i>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Kontak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Nama Lengkap<span>*</span>
              </strong>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nama Lengkap"
              name="nama_lengkap"
              // value={inputs.namaAppClient}
              // onChange={handleInputChange}
            />
          </Form.Group>
          <br />
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Nomer HP <span>*</span>
              </strong>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="62872xxxxxxx"
              name="nama_lengkap"
              // value={inputs.namaAppClient}
              // onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Keluar
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhoneBook;
