import React, { ReactElement } from "react";
import Layout from "@layout/index"
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import axios from 'axios';

const GenerateQr = () => {
    const RestartService = async ()=>{
            // const AxiosInstance = await axios.post(process.env.NEXT_PUBLIC_SERVICE_API + "run-script");
    }
    const CheckConnection = async () => {
        const AxiosInstance = await axios.get(process.env.NEXT_PUBLIC_BASE_API + "whatsapp/send-notify");
        console.log(AxiosInstance)

    }
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Chat" subTitle="Generate Qr" />
            <div>
                <div>
                    <button onClick={()=>{ RestartService() }} className="btn btn-secondary">Restart Service WhatsApp</button> &nbsp;
                    <button onClick={()=>{ CheckConnection() }} className="btn btn-secondary">Check Connection</button>

                </div>
                
            </div>
        
            
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