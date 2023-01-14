import moment from 'moment';

const studentColumns = [
  {
    field: '_id',
    headerName: 'ID',
    width: 70,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    editable: true,
  },
  {
    field: 'admnNo',
    headerName: 'Admn No',
    width: 70,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: true,
  },
  {
    field: 'class',
    headerName: 'Class',
    width: 70,
    editable: true,
  },
  {
    field: 'div',
    headerName: 'Div',
    width: 70,
    editable: true,
  },
  {
    field: 'dob',
    headerName: 'DOB',
    type: 'date',
    width: 180,
    renderCell: (params) => moment(params.row.dob).format('YYYY-MM-DD'),
    editable: true,
  },
];

export default studentColumns;
