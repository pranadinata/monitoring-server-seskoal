
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
import { useEffect, useState } from "react";
import Link from "next/link";
import getDataService from "@services/setting/get-data.module";
import PrivateCrud from "@services/setting/private-crud.module";
import Arduino from "@assets/images/arduino/arduino.png";
import Swal from 'sweetalert2';

interface SensorDetailData {
  updated_at: Date;
  id: number;
  nama_sensor: string;
  description: string;
}
const sensorDetail = () => {
  const [SensorDetail, setSensorDetail] = useState<SensorDetailData[]>([]);
  const [show, setShow] = useState(false);

  const [IdSensorDetail, setIdSensorDetail] = useState(null);
  const [NamaSensor, setNamaSensor] = useState("");
  const [DeskripsiSensor, setDeskripsiSensor] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  
  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setDeskripsiSensor(item.description);
    setNamaSensor(item.nama_sensor);
    setIdSensorDetail(item.id);

    setShow(true);
  };

  const handleInputChange = (event: any) =>{
      setDeskripsiSensor(event.target.value);
  }

  const getAllData = () =>{
    getDataService.getSensorDetail().then((result) => {
      setSensorDetail(result.data);
    });
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

  const updateData = () => {
    let data_input = {
      id: IdSensorDetail,
      deskripsi: DeskripsiSensor,

    }
    PrivateCrud.SensorDetailUpdate(data_input).then((result)=> {
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

 


     

  return (
    <>
      <Row>
        {SensorDetail?.map((item, index) => {
          return (
            <Col key={index} md={6} xl={4}>
              <Card className="user-card">
                <Card.Body>
                  <div className="user-cover-bg">
                    {/* <img src={Arduino.src} alt="image" className="img-fluid" /> */}
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
                        <Link href="#" className="text-primary"> { convertDate(item?.updated_at) }</Link>
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
          
          <Button variant="primary" onClick={()=> {updateData()}}>
           Perbaharui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default sensorDetail;
