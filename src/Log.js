import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
// import paginationFactory from 'react-bootstrap-table2-paginator';

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

function indexN(cell, row, enumObject, index) {
  return (<div>{index+1}</div>)
}

class Log extends Component {
  _isMounted = false;
  /* 컴포넌트 생성시 */
  /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
  constructor(props) {
    super(props);
    console.log('constructor !!');
    this.state = {
      logLists:[]
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this.getAllUsersLists();
  }

  componentWillUnmount() {
    this._isMounted =false;
  }

  getAllUsersLists = () => {
    const url = "http://localhost:8080/log/loginData/";
    const options = {
      method: "GET"
    };
    fetch(url, options)
      .then(results => results.json())
      .then(
        data => {
          if (data.status === "Failure") {
            if (this._isMounted) {
              this.setState({ logLists: [] });
            }
          } else {
            debugger;
            if (this._isMounted) {
              this.setState({
                logLists: data
              });

            }
          }
        },
        error => {
          if (this._isMounted) {
            this.setState({ logLists: [] });
          }
        }
      );
  };



  render() {
    return (

        <BootstrapTable data={this.state.logLists} colums={ columns}
                        pagination={true}
                        hover={true}
                        search={true}
                        searchPlaceholder="Search" >
          <TableHeaderColumn dataField="any" dataFormat={indexN}  headerAlign='center' dataAlign='center' width='50'>
            번호
          </TableHeaderColumn>

          <TableHeaderColumn isKey dataField='USR_IDX' headerAlign='center' dataAlign='center'
                             width='70' hidden={true}>
            idx
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginDate' headerAlign='center' dataAlign='center'>
            로그인시각
          </TableHeaderColumn>
          <TableHeaderColumn dataField='userId' headerAlign='center' dataAlign='center'>
            아이디
          </TableHeaderColumn>
          <TableHeaderColumn dataField='userName' headerAlign='center' dataAlign='center'>
            이름
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginIp' headerAlign='center' dataAlign='center'>
            IP
          </TableHeaderColumn>
          <TableHeaderColumn dataField='loginMethod' headerAlign='center' dataAlign='center'>
            로그인방법
          </TableHeaderColumn>
        </BootstrapTable>

    );
  }
}
export default Log;