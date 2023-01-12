/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { EditToolbar, initialRows } from '../../helpers/schoolHelpers/TableHelpers';

function Students() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const slno = rows.length;

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      editable: true,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 140,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 140,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: true,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box>

      <Box sx={{ height: 700, width: '100%' }}>
        <DataGrid
          sx={{ padding: '1rem' }}
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: { slno, setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>

  );
}

export default Students;
