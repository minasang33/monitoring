
import React, {useContext, useState} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//import LogDetail from "./Log";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/styleguide.css';
import '../../assets/css/artboard.css';
import logoImg from '../../assets/images/logo-dark.png';
import {LayoutContext} from "../../Layout/LayoutContext";
import FlexLayout from "flexlayout-react";
import {layoutFactory} from "../../Layout/layoutfactory";

//import Confirm from "semantic-ui-react/dist/commonjs/addons/Confirm";



function validate({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "이메일이 입력되지 않앗습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "입력된 이메일이 유효하지 않습니다.";
  }

  if (!password) {
    errors.password = "비밀번호가 입력되지 않았습니다.";
  } else if (password.length < 8) {
    errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
  }

  return errors;
}


function Login( { location, history } ){
  const [values, setValues] = useState({ email: '', pwd: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

  };

  const handleSubmit = async (event) => {

    //setSubmitting(true);
    event.preventDefault();
    //await new Promise((r) => setTimeout(r, 1000));
    setErrors(validate(values));
    loginAjax();

  };

  const loginAjax = () => {

    if (Object.keys(errors).length === 0) {
      //const form = document.querySelector('.form');
      let email = values.email;
      let password = values.password;

      const data = {
        email :  email,
        password : password
      }
      debugger;
      axios.get("http://localhost:8082/users/"+data.email).then((response)=>{
        let responseOk = response && response.status === 200;
        if(responseOk){
          history.push('/main');
        }
      }).catch((error)=> {
            alert('아이디 또는 패스워드를 확인해 주세요.');
            window.location.reload();
      })

      // axios.post("http://localhost:8082/session", data)
      //   .then((response)=> {
      //     let responseOk = response && response.status === 201;
      //     //&& response.statusText === 'OK';
      //     if(responseOk){
      //         const token ='Bearer '.concat(response.data.accessToken);
      //         const config = {
      //           headers: { "Authorization": token },
      //         }
      //         axios.get("http://jarworker.doitcloud.co.kr:9001/users/email/".concat(email), config)
      //         .then((response)=>{
      //           let responseOk = response && response.status === 200;
      //           if(responseOk){
      //
      //             //history.replace('/logMng');
      //             history.push('/logmng');
      //
      //           }else{
      //             alert('아이디 또는 패스워드를 확인해 주세요.');
      //             window.location.reload();
      //           }
      //         })
      //         .catch((error)=> {
      //           alert('아이디 또는 패스워드를 확인해 주세요.');
      //           window.location.reload();
      //         })
      //     }else{
      //       alert('아이디 또는 패스워드를 확인해 주세요.');
      //       window.location.reload();
      //     }
      //
      //   })
      //   .catch((error)=> {
      //     alert('아이디 또는 패스워드를 확인해 주세요.');
      //     window.location.reload();
      //   })
    }
  }



  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-4">
          <div
            className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
            <div className="w-100">
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div>
          <div className="text-center">
            <div>
              <a className="logo">
                <img src={ logoImg } height="20" alt="logo" />
              </a>
            </div>

            <h4 className="font-size-18 mt-4"> 로그인 </h4>

          </div>

          <div className="p-2 mt-5">
            <form className="form-horizontal" id="loginForm" name="loginForm"
                  onSubmit={handleSubmit} className="frm-single" method="post" >
              <input type="hidden" id="msg" value="${msg}" />

                <div className="form-group auth-form-group-custom mb-4">
                  <i className="ri-user-2-line auti-custom-input-icon"></i>
                  <label htmlFor="id">이메일</label>
                  <input type="text" className="form-control" id="email" name="email"
                         placeholder="아이디를 입력하세요." onChange={handleChange} />
                </div>

                <div className="form-group auth-form-group-custom mb-4">
                  <i className="ri-lock-2-line auti-custom-input-icon"></i>
                  <label htmlFor="password">비밀번호</label>
                  <input type="password" className="form-control" id="password"
                         name="password" placeholder="비밀번호를 입력하세요." onChange={handleChange} />
                </div>

                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input"
                         id="rememberme" />
                    <label className="custom-control-label"
                           htmlFor="rememberme">아이디 저장하기
                    </label>
                </div>

                <div className="mt-4 text-center">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit">로그인
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <a href="auth-recoverpw.html" className="text-muted">
                    <i className="mdi mdi-lock mr-1"></i> 아이디/비밀번호 찾기
                  </a>
                </div>

            </form>
          </div>

          <div className="mt-5 text-center">

            <p>© <script> document.write(new
              Date().getFullYear()); </script> iCRAFT Corp. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;
