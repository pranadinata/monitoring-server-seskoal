import React, { ReactElement } from "react";
import Layout from "@layout/index"
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";

import QRGenerator from "@views/generate/qr";
const GenerateQr = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Chat" subTitle="Generate Qr" />
            <iframe src="http://127.0.0.1:3300/auth/qrHtml" height={300} width={300} frameBorder="0"></iframe>
            {/* <QRGenerator></QRGenerator> */}
        </React.Fragment>
        
    )
}

GenerateQr.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default GenerateQr;