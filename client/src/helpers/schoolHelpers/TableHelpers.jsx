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

export const initialRows = [
  {
    id: 1, slno: 1, name: 'Jafin Jahfar', admn: 1001, email: 'jafinjahfar@gmail.com', class: 10, div: 'C', dob: '12-12-2000',
  },
];

export function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  // const handleClick = () => {
  //   const _id = randomId();
  //   setRows((oldRows) => [...oldRows, {
  //     _id, name: '', admnNo: 0, email: '', class: 0, div: '', dob: '01-01-2023', isNew: true,
  //   }]);
  //   setRowModesModel((oldModel) => ({
  //     ...oldModel,
  //     [_id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
  //   }));
  // };

  const handleClick = () => {
    const _id = randomId();
    const newRow = {
      _id, name: '', admnNo: 0, email: '', class: 0, div: '', dob: '01-01-2023', isNew: true,
    };
    setRows((oldRows) => [...oldRows, newRow]);
    if (newRow.isNew) {
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [_id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
      }));
    }
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
