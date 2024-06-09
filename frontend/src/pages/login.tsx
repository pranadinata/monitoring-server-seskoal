import NonLayout from "@layout/NonLayout";
import React, { ReactElement, useEffect } from "react";
// import "@assets/css/google-button.css"

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";


// img
import authlogin from "@assets/images/seskoal.png";
// import AuthService from '@services/auth/auth.service';

import Link from "next/link";
import { Card, Row } from "react-bootstrap";

const Loginv1 = () => {
    const router = useRouter();
    const cookie = getCookie("diba-magang");

    useEffect(() => {
        if(cookie){
            router.push("/portal/dashboard");
        }
      }, []); 
    const processLogin = async () =>{
            // await AuthService.Login().then((response)=>{
            //     console.log(response)
            // });
    }
return (
<React.Fragment>
    <div className="auth-main v1">
        <div className="auth-wrapper">
            <div className="auth-form">
                <Card className="my-5">
                    <Card.Body>
                        <div className="text-center">
                            <img src={authlogin.src} alt="images" className="img-fluid mb-3" />
                            {/* <h4 className="f-w-500 mb-1">Login with your email</h4> */}
                            {/* <p className="mb-3">Don&apos;t have an Account? <a href="/pages/register-v1"
                                    className="link-primary ms-1">Create Account</a></p> */}
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                placeholder="Username" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" id="floatingInput1"
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
                            <button type="button" className="btn btn-primary btn-lg">Login</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="auth-sidefooter">
                {/* <img src={logodark.src} alt="images" className="img-brand img-fluid" /> */}
                <hr className="mb-3 mt-4" />
                <Row>
                    <div className="col my-1 text-center">
                        <p className="m-0">Light Able ♥ crafted by Team <a href="#" target="_blank"> YP & CRP</a></p>
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