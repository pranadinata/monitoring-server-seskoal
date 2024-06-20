import BreadcrumbItem from "@common/BreadcrumbItem";

import { affiliateWidget, affiliateData, topVisitorData } from "@data/index";
import {
  Card,
  Col,
  Dropdown,
  Row,
  Button,
  ModalTitleProps,
  Modal,
  Form,
} from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Arduino from "@assets/images/application/img-user-cover-1.jpg";
import avatar1 from "@assets/images/user/avatar-1.jpg";
import Link from "next/link";
import getDataService from "@services/setting/get-data.module";
import Arduino from "@assets/images/arduino/arduino.png";

interface SensorDetailData {
  updatedAt: Date;
  id: number;
  nama_sensor: string;
  description: string;
}
const sensorDetail = () => {
  const [SensorDetail, setSensorDetail] = useState<SensorDetailData[]>([]);
  const [show, setShow] = useState(false);

  const [NamaSensor, setNamaSensor] = useState("");
  const [DeskripsiSensor, setDeskripsiSensor] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    // console.log(item)
    setDeskripsiSensor(item.description);
    setNamaSensor(item.nama_sensor);
    setShow(true);
  };

  const handleInputChange = (event: any) =>{
      console.log(event.target.value)
  }

  const convertDate = (waktu: Date) => {
    const date = new Date(waktu);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Jakarta',
            hour12: false  // Use 24-hour format
        };
        const formattedDateAndTime = date.toLocaleString('en-US', options);

        // Reformat to desired "DD - MM - YYYY and HH:MM:SS" format
        const [formattedDate, time] = formattedDateAndTime.split(', ');
        const [month, day, year] = formattedDate.split('/');
        return `${day}/${month}/${year} ${time}`;
  };
  useEffect(() => {
    getDataService.getSensorDetail().then((result) => {
      setSensorDetail(result.data);
    });
  }, []);

     

  return (
    <>
      <Row>
        {SensorDetail?.map((item, index) => {
          return (
            <Col key={index} md={6} xl={4}>
              <Card className="user-card">
                <Card.Body>
                  <div className="user-cover-bg">
                    <img src={Arduino.src} alt="image" className="img-fluid" />
                    <div className="cover-data">
                      <div className="d-inline-flex align-items-center"></div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex flex-wrap gap-2">
                    <div className="flex-grow-1">
                      <h4 className="mb-1">{item?.nama_sensor}</h4>
                      <p className="text-muted text-md mb-0">
                        Terakhir di update :
                        <Link href="#" className="text-primary"> { convertDate(item?.updatedAt) }</Link>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => {
                          handleShow(item);
                        }}
                        className="btn btn-secondary btns-sm ms-1"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="saprator my-3">
                    <span>Deskripsi</span>
                  </div>
                  <p>{item?.description}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Deskripsi {NamaSensor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col}>
            <Form.Label>
              <strong>
                Deskripsi <span>*</span>
              </strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              required
              placeholder="Deskripsi"
              name="deskripsi"
              value={ DeskripsiSensor }
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
           Perbaharui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default sensorDetail;
