import React, { useEffect, useState } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css'

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

function LogDetail(){
  const [formType, setType] = useState('INSERT');
  const [logList, setLists] = useState([]);

  const [selectRow, setSelectRow]= useState([{
    USR_IDX:'',
    userId:'',
    userName:'',
    loginDate:'',
    loginIp:'',
    loginMethod:'' }]);                                       // 목록에서 선택된 로우데이터 저장할 변수

  const addList = () => {
    const resetRow ={
      USR_IDX:'',
      userId:'',
      userName:'',
      loginDate:'',
      loginIp:'',
      loginMethod:''
    }
    setSelectRow(resetRow);
    setType('INSERT');
  }

  useEffect(()=>{
    fetch("http://localhost:8080/log/loginData/")
      .then(response => response.json())
      .then(data => setLists(data))
    return () =>{
      console.log('cleanUp');
    }
  }, [])

  function onSelectRow(row, isSelected, e){
      setSelectRow(row);
      setType('UPDATE');
  }
  const selectRowProp = {
    mode: 'radio',
    clickToSelect: true,
    selected: [],
    onSelect: onSelectRow,
    hideSelectColumn: true,
    bgColor: 'gold'
  };


  return (
    <div className="row mx-0">
      <div className="col-sm-6">
        <div className="text-right pr-3">
           <button type="button" className="btn btn-lg btn-light"
                   onClick={addList}>추가
           </button>

        </div>
        <BootstrapTable
                        colums={columns}
                        pagination={true}
                        hover={true}
                        search={true}
                        searchPlaceholder="Search"
                        selectRow={selectRowProp} >
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
                             dataAlign='center'
                             width='180'>
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

      </div>
      <div className="col-sm-6">
        <div className="text-right pr-3">
          {formType === 'UPDATE' ?
          <button type="button" className="btn btn-lg btn-light"
                  >삭제
          </button>
          :<div></div>}

          <button type="button" className="btn btn-lg btn-light"
                  >저장
          </button>

        </div>
        <div className="row mx-0 mt-2 pt-3">
        <div className="col-12 px-0">
          <div className="card-body p-0 pb-3">

            <div className="row mx-0">
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
    </div>
    </div>
  );
}

export default LogDetail;