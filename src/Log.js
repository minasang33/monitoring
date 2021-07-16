import React, { useState, useEffect } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
//import paginationFactory from 'react-bootstrap-table2-paginator';

function indexN(cell, row, enumObject, index) {
  return (<div>{index+1}</div>)
}

const columns = [{
  dataField: 'userid',
  text: '아이디'
}, {
  dataField: 'username',
  text: '이름'
}, {
  dataField: 'loginData',
  text: '로그인시각'
}];

function Log(){
  const [renderList, setRender] = useState(true);   // 목록 그릴지 디테일을 그릴지 결정하는 변수
  //const [_isMounted, setMounted] = useState(false); // api를 한번만 부르기위한 변수
  const [logList, setLists] = useState([]);         // api로 부른 데이터값을 저장할 변수
  const [selectRow, setSelectRow]= useState([{
    USR_IDX:'',
    userId:'',
    userName:'',
    loginDate:'',
    loginIp:'',
    loginMethod:'' }]);                                       // 목록에서 선택된 로우데이터 저장할 변수

  function onSelectRow(row, isSelected, e){
    if(isSelected){
      setRender(false);
      setSelectRow(row);
      debugger;
    }else{
      setRender(true);
    }
  }
  const selectRowProp = {
    mode: 'radio',
    clickToSelect: true,
    selected: [],
    onSelect: onSelectRow,
    hideSelectColumn: true,
    bgColor: 'gold'
  };
  function backToList(){
    setRender(true);
  }

  useEffect(()=>{
    fetch("http://localhost:8081/log/loginData/")
      .then(response => response.json())
      .then(data => setLists(data))
  }, [])

  return (


    renderList == true ?
        <BootstrapTable data={logList}
                        colums={columns}
                        pagination={true}
                        hover={true}
                        search={true}
                        searchPlaceholder="Search"
                        selectRow={selectRowProp}>
          <TableHeaderColumn dataField="any" dataFormat={indexN}
                             headerAlign='center' dataAlign='center' width='50'>
            번호
          </TableHeaderColumn>

          <TableHeaderColumn isKey dataField='USR_IDX' headerAlign='center'
                             dataAlign='center'
                             width='70' hidden={true}>
            idx
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginDate' headerAlign='center'
                             dataAlign='center'>
            로그인시각
          </TableHeaderColumn>
          <TableHeaderColumn dataField='userId' headerAlign='center'
                             dataAlign='center'>
            아이디
          </TableHeaderColumn>
          <TableHeaderColumn dataField='userName' headerAlign='center'
                             dataAlign='center'>
            이름
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginIp' headerAlign='center'
                             dataAlign='center'>
            IP
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginMethod' headerAlign='center'
                             dataAlign='center'>
            로그인방법
          </TableHeaderColumn>
        </BootstrapTable>
      : <div className="row mx-0 mt-2 pt-3"
             style={{borderTop:"1px solid #dcdcdc"}}>
          <div className="col-12 px-0">
            <div className="card-body p-0 pb-3">
              <div className="text-right pr-3">
                <button type="button" className="btn btn-lg btn-light"
                        onClick={backToList}>목록으로
                </button>

              </div>
              <div className="row mx-0">
                <div className="col-sm-6">

                  {/*<div className="form-group">*/}
                  {/*  <label htmlFor="loginDate" className="control-label"><font*/}
                  {/*    color="red">*</font>로그인시각  </label>*/}
                  {/*  <input type="text" className="form-control" id="loginDate"*/}
                  {/*         name="loginDate"*/}
                  {/*         maxLength="11" value={selectRow.loginDate} />*/}
                  {/*</div>*/}
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="loginDate" className="control-label"><font
                      color="red">*</font>로그인시각  </label>
                    <input type="text" className="form-control" id="loginDate"
                           name="loginDate"
                           maxLength="11" value={selectRow.loginDate} />
                  </div>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-sm-6">

                  <div className="form-group">
                    <label htmlFor="userId" className="control-label"><font
                      color="red">*</font>아이디 </label>
                    <input type="text" className="form-control" id="userId"
                           name="userId"
                           maxLength="11" value={selectRow.userId} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="userName" className="control-label"><font
                      color="red">*</font>이름  </label>
                    <input type="text" className="form-control" id="userName"
                           name="userName"
                           maxLength="15" value={selectRow.userName} />
                  </div>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-sm-6">

                  <div className="form-group">
                    <label htmlFor="loginIp" className="control-label"><font
                      color="red">*</font>IP </label>
                    <input type="text" className="form-control" id="loginIp"
                           name="loginIp"
                           maxLength="11" value={selectRow.loginIp} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="loginMethod" className="control-label"><font
                      color="red">*</font>로그인방법</label>
                    <input type="text" className="form-control" id="loginMethod"
                           name="loginMethod"
                           maxLength="15" value={selectRow.loginMethod} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




  );
}

export default Log;