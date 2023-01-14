/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditToolbar from './EditToolbar';

function DataGridTable({
  records,
  columns,
  handleDelete,
  handleCancel,
  isLoading,
  createNew,
  updateExisting,
  handleProcessRowUpdateError,
}) {
  const [rowModesModel, setRowModesModel] = useState({});
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(records.map((row) => ({ ...row, id: row._id })));
  }, [records]);

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

  const handleDeleteClick = (id) => async () => {
    handleDelete(id);
    setRows(rows.filter((row) => row._id !== id));
  };

  const handleCancelClick = (id) => () => {
    handleCancel();
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== id));
    }
  };

  const processRowUpdate = async (changedRow) => {
    const editedRow = rows.find((row) => row._id === changedRow._id);
    if (editedRow.isNew) {
      // Make the HTTP request to save the new student in the backend
      createNew(changedRow);
    } else {
    // Make the HTTP request to update student in the backend
      const updatedData = await updateExisting(changedRow, handleSaveClick);
      setRows(rows.map((row) => {
        if (row._id === changedRow.id) {
          return { ...updatedData, id: updatedData._id };
        }
        return row;
      }));
      return updatedData;
    }
  };

  const updatedRows = useMemo(() => rows.map((row) => ({ ...row, id: row._id })), [rows]);

  const fields = [
    ...columns,
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
            <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
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
    <>
      <DataGrid
        sx={{ padding: '1rem' }}
        rows={updatedRows}
        columns={fields}
        loading={isLoading}
        getRowId={(row) => row._id}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </>
  );
}

export default DataGridTable;
