import BreadcrumbItem from "@common/BreadcrumbItem";

import { affiliateWidget, affiliateData, topVisitorData } from "@data/index";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import userCover from "@assets/images/application/img-user-cover-1.jpg";
import avatar1 from "@assets/images/user/avatar-1.jpg";
import Link from "next/link";
import getDataService from "@services/setting/get-data.module";

interface SensorDetailData {
  nama_sensor: string;
  description: string;
}
const sensorDetail = () => {
  const [SensorDetail, setSensorDetail] = useState<SensorDetailData[]>([]);

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
            <>
              <Col md={6} xl={4}>
                <Card className="user-card">
                  <Card.Body>
                    <div className="user-cover-bg">
                      <Image
                        src={userCover}
                        alt="image"
                        className="img-fluid"
                      />
                      <div className="cover-data">
                        <div className="d-inline-flex align-items-center">
                          <i className="ph-duotone ph-star text-warning me-1"></i>
                          4.5{" "}
                          <small className="text-white text-opacity-50">
                            / 5
                          </small>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex flex-wrap gap-2">
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{ item?.nama_sensor }</h6>
                        <p className="text-muted text-sm mb-0">
                          Terakhir di update :
                          <Link href="#" className="text-primary"></Link>
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button className="btn btn-outline-secondary btn-sm ms-1">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="saprator my-3">
                      <span>Deskripsi</span>
                    </div>
                    <p>
                        { item?.description }
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default sensorDetail;
