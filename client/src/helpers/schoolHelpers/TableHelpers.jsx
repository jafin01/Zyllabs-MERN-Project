/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
  GridRowModes,
  GridToolbarContainer,
} from '@mui/x-data-grid-pro';
import {
  randomId,
} from '@mui/x-data-grid-generator';

// export const initialRows = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 25,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 28,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 23,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
// ];

export const initialRows = [
  {
    id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,
  },
  {
    id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,
  },
  {
    id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,
  },
  {
    id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,
  },
  {
    id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,
  },
  {
    id: 6, lastName: 'Melisandre', firstName: null, age: 150,
  },
  {
    id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,
  },
  {
    id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,
  },
  {
    id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,
  },
];

export function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, {
      id, firstName: '', lastName: '', age: 0, fullName: '', isNew: true,
    }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'firstName' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};
