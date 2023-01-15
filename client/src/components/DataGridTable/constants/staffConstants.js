import moment from 'moment';

const staffColumns = [
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
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: true,
  },
  {
    field: 'contact',
    headerName: 'Contact',
    width: 100,
    editable: true,
  },
  {
    field: 'headOf',
    headerName: 'Head Of',
    width: 70,
    editable: true,
  },
  {
    field: 'allocatedClasses',
    headerName: 'Allocated Class',
    width: 140,
    editable: true,
  },
  {
    field: 'subjects',
    headerName: 'Subjects',
    width: 180,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 100,
    editable: true,
  },
  {
    field: 'joiningDate',
    headerName: 'Joining Date',
    type: 'date',
    width: 180,
    renderCell: (params) => moment(params.row.dob).format('YYYY-MM-DD'),
    editable: true,
  },
];

export default staffColumns;
