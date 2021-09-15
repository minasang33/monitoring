import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from 'devextreme-react/tree-view';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
// import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import { DataGrid } from '@material-ui/data-grid';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

const dataSource = new DataSource({
  store: new ODataStore({
    url: 'http://localhost:8080/treeview'
  })
});
// data = {
//   id: 'root',
//   name: '아아크래프트',
//   children: [
//     {
//       id: '1',
//       name: 'SP사업본부',
//     },
//     {
//       id: '3',
//       name: '엔터프라이즈사업본부',
//
//     },
//     {
//       id: '4',
//       name: '경영기획본부',
//       // children: [
//       //   {
//       //     id: '5',
//       //     name: '인재경영팀',
//       //   },
//       //   {
//       //     id: '6',
//       //     name: '재무전략팀',
//       //   },
//       //   {
//       //     id: '7',
//       //     name: '사업기획팀',
//       //   },
//       // ],
//     }
//   ],
// };

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});
const columns = [
  { field: 'idx', headerName: 'userIdx', hide:true },
  {
    field: 'id',
    headerName: 'ID',
    width:150,
    align: 'center',
    editable: true,
  },
  {
    field: 'name',
    headerName: '성명',
    width: 150,
    align: 'center',
    editable: true,
  },
  {
    field: 'position',
    headerName: '직급',
    //type: 'number',
    align: 'center',
    width: 150,
    editable: true,
  },
  {
    field: 'department',
    headerName: '소속부서',
    align: 'center',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
];

const rows = [
  { id: 1, name: 'Snow', position: 'SM', department: 'MS팀' },
  { id: 2, name: 'Lannister', position: 'SM', department: 'MS팀' },
  { id: 3, name: 'Lannister', position: 'SM', department: '클라우드팀' },
  { id: 4, name: 'Stark', position: 'AM', department: '클라우드팀' },
  { id: 5, name: 'Targaryen', position: 'AM', department: null },
  { id: 6, name: 'Melisandre', position: null, department: '클라우드팀' },
  { id: 7, name: 'Clifford', position: 'AM', department: '클라우드팀' },
  { id: 8, name: 'Frances', position: 'AM', department: '클라우드팀' },
  { id: 9, name: 'Roxie', position: 'AM', department: '클라우드팀' },
];
const data = {
  id: 'root',
  name: '아아크래프트',
  children: [
    {
      id: '1',
      name: 'SP사업본부',
    },
    {
      id: '3',
      name: '엔터프라이즈사업본부',
    },
    {
      id: '4',
      name: '경영기획본부',
      // children: [
      //   {
      //     id: '5',
      //     name: '인재경영팀',
      //   },
      //   {
      //     id: '6',
      //     name: '재무전략팀',
      //   },
      //   {
      //     id: '7',
      //     name: '사업기획팀',
      //   },
      // ],
    }
  ],
}
function GroupMng() {
  const ttdata = data;
  //const [ttdata, setData] = useState([data]);
  const [refresh, setRefresh] = useState(false);
  const classes = useStyles();
  const [userList, setLists] = useState([]);         // api로 부른 데이터값을 저장할 변수

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  const handleToggle = (event, nodeIds) => {
    let i = ttdata;

  };

  const handleSelect = (event, nodeIds) => {

    let i = ttdata;

    let data = [
        {
          id: '5',
          name: '인재경영팀',
        },
        {
          id: '6',
          name: '재무전략팀',
        },
        {
          id: '7',
          name: '사업기획팀',
        },
    ];
    let e = this._treeView;
    event.target.expanded = !event.target.expanded;
    ttdata.children[2].children = data;
    setRefresh(true);
    ;
  };

  useEffect(()=>{
    fetch("http://localhost:8081/log/loginData/")
      .then(response => response.json())
      .then(data => setLists(data))
  }, [])

  return (
    <div className="row mt-3">
      <div className="col-6 row">
        <div className="col-12">
          <TreeView
            // className={classes.root}
            // defaultCollapseIcon={<ExpandMoreIcon/>}
            // defaultExpanded={['root']}
            // defaultExpandIcon={<ChevronRightIcon/>}
            // onNodeToggle={handleToggle}
            // onNodeSelect={handleSelect}
            // virtualModeEnabled={true}
            dataSource={dataSource}
            dataStructure="plain"
            keyExpr="cd_Id"
            displayExpr="cd_Nm"
            parentIdExpr="parent_cd_Id"
            hasItemsExpr="IsGroup"
            virtualModeEnabled={true}
          >

          </TreeView>
        </div>
        <div className="col-12 row">
          <div className="col-sm-4">
            상위부서
          </div>
          <div className="col-sm-8">
            <input/>
          </div>
          <div className="col-sm-4">
            부서코드
          </div>
          <div className="col-sm-8">
            <input/>
          </div>
          <div className="col-sm-4">
            부서명
          </div>
          <div className="col-sm-8">
            <input/>
          </div>
          <div className="col-sm-4">
            부서장/팀장
          </div>
          <div className="col-sm-8">
            <input/>
          </div>
          <div className="col-sm-4">
            구성인원(명)
          </div>
          <div className="col-sm-8">
            <input/>
          </div>
        </div>
      </div>

      <div className="col-6" style={{ height: 520 , width:'100%'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>


  );
}export default GroupMng;