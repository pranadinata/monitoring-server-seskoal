import React, { ReactElement, useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";

import getDataService from "@services/setting/get-data.module";
import PrivateCrud from "@services/setting/private-crud.module";
import Swal from 'sweetalert2';

interface SuhuHumadity {
  nama: string;
  value: number;
}
const SuhuHumadity = () => {
  const [Suhu_Humadity, setSuhu_Humadity] = useState<SuhuHumadity[]>([]);
  const [ShowTemperatureModal, setShowTemperatureModal] = useState(false);

  const [IdSuhuHumadity, setIdSuhuHumadity] = useState(null);
  const [NamaSuhuHumadity, setNamaSuhuHumadity] = useState('');

  const [ValueSuhuHumadity, setValueSuhuHumadity] = useState(null);

  const [ValueNotifikasi, setValueNotifikasi] = useState(0);


  const handleClose = () => setShowTemperatureModal(false);
  const handleShow = (item: any) => {
    setIdSuhuHumadity(item.id)
    setValueSuhuHumadity(item.value)
    setNamaSuhuHumadity(item.nama);
    setShowTemperatureModal(true);
  };


  useEffect(() => {
    getAllData();
    getCountDataNotif();
  }, []);

  const getAllData = () =>{
    getDataService.getSuhuHumadity().then((result) => {
      setSuhu_Humadity(result.data);
    });
  }
  const getCountDataNotif = () =>{
      getDataService.getCountNotif().then((result)=>{
        setValueNotifikasi(result.data);
      });
  }

  const handleInputChange = (event: any) => {
    setValueSuhuHumadity(event.target.value);
  }
  const updateData = () => {
      let data_input = {
          id: IdSuhuHumadity,
          value: ValueSuhuHumadity
      }
      PrivateCrud.SuhuHumadityUpdate(data_input).then((result)=>{
        if(result.data.data.code == 200){
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: result.data.data.message,
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
              getAllData();
              setShowTemperatureModal(false);
          });
        }
      });

  }
  return (
    <>
      <Row>
        { ValueNotifikasi >= 1000 ? <Alert variant="danger" style={{ color: "white"}}>Batas maximum notifikasi telah lebih dari 1000, harap hubungi admin</Alert> : '' }
        
        <Col sm={4} xl={4}>
          <Card style={{  height: '150px' }}>
            <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0">Jumlah Notifikasi Whatsapp</p>
              </div>
              <h5>
              <Alert variant={
                ValueNotifikasi <= 300 ? 'success' : ValueNotifikasi <= 700 ? 'warning' : 'danger'
              }> {ValueNotifikasi} / 1000 </Alert>
             
              </h5>

            </Card.Body>

          </Card>
        </Col>
        <Col sm={4} xl={4}>
          <Card style={{  height: '150px' }}>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0">Minimum Suhu</p>
                <button
                  onClick={() => {
                    handleShow(Suhu_Humadity[0]);
                  }}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
              </div>
              <h5 className="mb-0">
                {Suhu_Humadity[0] !== undefined ? Suhu_Humadity[0].value : 0} °C
              </h5>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} xl={4}>
          <Card style={{  height: '150px' }}>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0">Minimum Kelembapan</p>
                <button
                  onClick={() => {
                    handleShow(Suhu_Humadity[1]);
                  }}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
              </div>
              <div className="d-flex align-items-center">
                <h5 className="mb-0">
                  {Suhu_Humadity[1] !== undefined ? Suhu_Humadity[1].value : 0}{" "}
                  %H
                </h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col sm={4} xl={4}>
        <Card bg="success">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="mb-0 text-black">Notifikasi</p>
              <button onClick={()=>{ handleShow(Suhu_Humadity[1]) }} className="btn btn-secondary">Edit</button>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-black">
                {ValueNotifikasi} / 1000
              </h5>
            </div>
          </Card.Body>
        </Card>
      </Col> */}
      </Row>

      <Modal show={ShowTemperatureModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah {NamaSuhuHumadity} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Maximal Notif <span>*</span>
              </strong>
            </Form.Label>
            <Form.Control
              id={IdSuhuHumadity != null ? "temperature" : "kelembapan"}
              type="number"
              required
              name="value_suhu_humadity"
              value={ValueSuhuHumadity !== null ? ValueSuhuHumadity : 0}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              updateData();
            }}
          >
            Perbaharui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuhuHumadity;
