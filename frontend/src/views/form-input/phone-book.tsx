"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import Image from "next/image";

import avatar1 from "@assets/images/user/avatar-1.jpg";

import getDataService from "@services/setting/get-data.module";
import PrivateCRUD from "@services/setting/private-crud.module";

import Swal from 'sweetalert2';

import internal from "stream";
interface PhoneContact {
  id: number;
  nama: string;
  no_hp: string;
  status: boolean;
}
const PhoneBook = () => {


  const [IdPhoneBook, setIdPhoneBook] = useState(null);

  const [NomerHp, setNomerHp] = useState(null);
  const [NamaLengkap, setNamaLengkap] = useState(null);
  const [StatusNotif, setStatusNotif] = useState(false);

  
  const [show, setShow] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [PhoneBook, setPhoneBook] = useState<PhoneContact[]>([]);

  useEffect(() => {
    getAllData();
  }, []);

 
  const handleClose = () => setShow(false);
  const handleShow = (_item: any) => {
    setShow(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleShowUpdateModal = (_item: any) => {
    setShowUpdateModal(true);
  };
  const handleInputChange = (event: any) => {
    if(event.target.id == "nama_lengkap") {
      setNamaLengkap(event.target.value);
    }
    if(event.target.id == "nomer_hp") {
      setNomerHp(event.target.value);
    }
    if(event.target.id == "status_notif"){
      setStatusNotif(event.target.checked);
    }
  }
  const getAllData = () => {
    getDataService.getPhoneBook().then((result) => {
      setPhoneBook(result.data);
    });
  }
  const simpanData = () => {

        let data_input = {
          nama: NamaLengkap,
          no_hp: NomerHp
        }
        PrivateCRUD.PhoneBookCreate(data_input).then((result)=>{
              if(result.data.data.code == 200){
                Swal.fire({
                  icon: 'success',
                  title: 'Berhasil',
                  text: result.data.data.message,
                  timer: 1500,
                  showConfirmButton: false
                }).then(() => {
                    getAllData();
                    setShow(false);
                });
              }
        });
  }
  const deleteData = (item: any) => {
      let data_input = {
        id: item.id,
      }
      
      Swal.fire({
          title: "Apakah anda yakin?",
          // text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result)=>{
          if(result.isConfirmed){
            PrivateCRUD.PhoneBookDelete(data_input).then((result)=> {
              if(result.data.data.code == 200){
                Swal.fire({
                  icon: 'success',
                  title: 'Berhasil',
                  text: result.data.data.message,
                  timer: 1500,
                  showConfirmButton: false
                }).then(() => {
                    getAllData();
                    setShow(false);
                });
              }
            });
          }
      });
  }

  const editData = (item: any) =>{
      setShowUpdateModal(true);
      setIdPhoneBook(item.id);
      setNamaLengkap(item.nama);
      setNomerHp(item.no_hp);
      setStatusNotif(item.status)
  } 

  const updateData = () => {
      let data_input = {
        id: IdPhoneBook,
        nama: NamaLengkap,
        no_hp: NomerHp,
        status_notif: StatusNotif
      }
      PrivateCRUD.PhoneBookUpdate(data_input).then((result)=>{
          // console.log(result)
          if(result.data.data.code == 200){
            Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: result.data.data.message,
              timer: 1500,
              showConfirmButton: false
            }).then(() => {
                getAllData();
                setShowUpdateModal(false);
            });
          }
      });
  }

  return (
    <>
    <Row>
    <Col md={12} xl={12}>
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
                          <button onClick={()=>{ deleteData(item); }} className="btn avtar avtar-xs btn-light-danger me-1">
                            <i className="ti ti-trash"></i>
                          </button>
                          <button onClick={()=>{ editData(item) }} className="btn avtar avtar-xs btn-light-info">
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
    </Row>
      
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
              id="nama_lengkap"
              required
              type="text"
              placeholder="Nama Lengkap"
              onChange={handleInputChange}
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
              id="nomer_hp"
              required
              type="number"
              placeholder="62872xxxxxxx"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
            simpanData();
          }}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data Kontak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Nama Lengkap<span>*</span>
              </strong>
            </Form.Label>
            <Form.Control
              id="nama_lengkap"
              required
              type="text"
              placeholder="Nama Lengkap"
              value={NamaLengkap !== null ? NamaLengkap : ''}
              onChange={handleInputChange}
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
              id="nomer_hp"
              required
              type="number"
              placeholder="62872xxxxxxx"
              value={NomerHp !== null ? NomerHp : ''}

              onChange={handleInputChange}
            />
          </Form.Group>
          <br />
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Status Notif <span>*</span>
              </strong>
            </Form.Label>
            <Form.Check 
                  id="status_notif" 
                  type="checkbox" 
                  checked={StatusNotif == true ? true : false}                   
                  onChange={handleInputChange} 
                  label={StatusNotif == true ? 'Aktif Notifikasi' : 'Tidak Aktif Notifikasi'} />

          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
            updateData();
          }}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhoneBook;
