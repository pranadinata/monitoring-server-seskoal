import React, { ReactElement } from "react";
import Layout from "@layout/index"
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import axios from 'axios';

const GenerateQr = () => {
    const RestartService = async ()=>{
            const AxiosInstance = await axios.post("http://127.0.0.1:3001/run-script");
            console.log(AxiosInstance)
            
    }
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Chat" subTitle="Generate Qr" />
            <button onClick={()=>{ RestartService() }} className="btn btn-secondary">Restart Service WhatsApp</button>
            <br /><br />
            <iframe src={process.env.NEXT_PUBLIC_BASE_API + 'auth/qrHtml'}height={300} width={300} frameBorder="0"></iframe>
        

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