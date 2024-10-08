import React, { ReactElement, useEffect, useState } from "react";
import Layout from "@layout/index"
import { Button, Card, Col, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import axios from 'axios';
import Swal from 'sweetalert2';

const GenerateQr = () => {
    const [isToggled, setIsToggled] = useState(false);
    

    useEffect(()=>{
        fetchData();
    },[]);
    const handleToggle = async () => {
        const set_notif = await axios.get(process.env.NEXT_PUBLIC_BASE_API + "apps/sync-notif/update");
        if(set_notif.data.data.code == 200){
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
               
                timer: 1500,
                showConfirmButton: false
              }).then(() => {
                fetchData();
              });
        }

    };
    const RestartService = async ()=>{
            // const AxiosInstance = await axios.post(process.env.NEXT_PUBLIC_SERVICE_API + "run-script");
    }

    const fetchData = async () => {
        const AxiosInstance = await axios.get(process.env.NEXT_PUBLIC_BASE_API + "apps/sync-notif");
        setIsToggled(AxiosInstance.data.data.data[0].notif);
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
              
                    <Button variant={isToggled ? 'primary' :  'danger'} onClick={handleToggle}>{ isToggled ? 'Notif Whatsapp Singkron' : 'Notif Whatsapp Tidak Singkron' }</Button> &nbsp;
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