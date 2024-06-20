import NonLayout from "@layout/NonLayout";
import React, { ReactElement, useEffect, useState } from "react";
// import "@assets/css/google-button.css"

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";


// img
import authlogin from "@assets/images/infolahta.png";
import AuthService from '@services/auth/auth.module';

import Swal from 'sweetalert2'

import Link from "next/link";
import { Card, Row } from "react-bootstrap";
import { error } from "console";

const Loginv1 = () => {
    const router = useRouter();
    const cookie = getCookie("monitoring-server-infolahta");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if(cookie){
            router.push("/dashboard");
        }
      }, []); 

      function handleInputUsername(event: any) {
        setUsername(event.target.value);
      }
      function handleInputPassword(event: any) {
        setPassword(event.target.value);
      }
      
    const processLogin = async () =>{
            await AuthService.Login(username, password).then((response)=>{
                router.push("/dashboard");
            }).catch((error)=>{
                if (error?.response?.status === 429) {
                    // setIsRequredCaptcha(error?.response?.data?.data?.isRequiredCaptcha);
                    Swal.fire({
                      icon: 'error',
                      title: 'Maaf...',
                      text: error?.response?.data?.message,
                    })
                  }
                  if (error?.response?.status === 400) {
                    // setIsRequredCaptcha(error?.response?.data?.data?.isRequiredCaptcha);
                    Swal.fire({
                      icon: 'error',
                      title: 'Maaf...',
                      text: error?.response?.data?.data?.message,
                    })
                  }
                  if (error?.response?.status === 422) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Maaf...',
                      text: error?.response?.data?.message ?? 'Username atau password harus diisi',
                    })
                  }
            });
    }
return (
<React.Fragment>
    <div className="auth-main v1">
        <div className="auth-wrapper">
            <div className="auth-form">
                <Card className="my-5">
                    <Card.Body>
                    <div className="text-center">
                            <img src={authlogin.src} alt="images" width={200} height={200} className="img-fluid mb-3" />
                            {/* <h4 className="f-w-500 mb-1">Login with your email</h4> */}
                            {/* <p className="mb-3">Don&apos;t have an Account? <a href="/pages/register-v1"
                                    className="link-primary ms-1">Create Account</a></p> */}
                        </div>
                        <br />
                        <div className="form-group mb-3">
                            <input type="text" onChange={handleInputUsername} className="form-control" id="floatingInput"
                                placeholder="Username" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" onChange={handleInputPassword} className="form-control" id="floatingInput1"
                                placeholder="Password" />
                        </div>
                        <div className="d-flex mt-1 justify-content-between align-items-center">
                            {/* <div className="form-check">
                                <input className="form-check-input input-primary" type="checkbox" id="customCheckc1"
                                    defaultChecked />
                                <label className="form-check-label text-muted" htmlFor="customCheckc1">Remember
                                    me?</label>
                            </div> */}
                            {/* <Link href="../pages/forgot-password-v1">
                            <h6 className="f-w-400 mb-0">Forgot Password?</h6>
                            </Link> */}
                        </div>
                        <div className="d-grid mt-4">
                            <button type="button" onClick={processLogin} className="btn btn-primary btn-lg">Login</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="auth-sidefooter">
                {/* <img src={logodark.src} alt="images" className="img-brand img-fluid" /> */}
                <hr className="mb-3 mt-4" />
                <Row>
                    <div className="col my-1 text-center">
                        <p className="m-0">crafted by Team <a href="#" target="_blank"> YP & CRP</a></p>
                    </div>
                </Row>
            </div>
        </div>
    </div>
</React.Fragment>
);
}


Loginv1.getLayout = (page: ReactElement) => {
    return <NonLayout>{page}</NonLayout>;
};

export default Loginv1;