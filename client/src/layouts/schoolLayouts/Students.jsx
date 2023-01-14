/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, {
  useEffect,
  useState,
  // useCallback,
  useMemo,
  useCallback,
} from 'react';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
// import { useCallback } from 'react';
import moment from 'moment';
import { EditToolbar } from '../../helpers/schoolHelpers/TableHelpers';
import {
  getAllStudents, saveNewStudent, deleteStudent, updateStudent,
} from '../../service/school/student';

function Students() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  // const [newRecordAdded, setNewRecordAdded] = useState(false);

  useEffect(() => {
    const getStudentData = async () => {
      const students = await getAllStudents();
      setRows(students);
    };
    getStudentData();
  }, []);

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
    console.log('hoi');
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    await deleteStudent(id);
    setRows(rows.filter((row) => row._id !== id));
  };

  const handleCancelClick = (id) => () => {
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
      const newStudent = await saveNewStudent(changedRow);
      setRows(rows.map((row) => {
        if (row._id === changedRow._id) {
          return { ...newStudent, _id: newStudent._id, isNew: false };
        }
        return row;
      }));
      return newStudent;
    }
    // Make the HTTP request to update student in the backend
    const updatedStudent = await updateStudent(changedRow);
    setRows(rows.map((row) => {
      if (row._id === changedRow.id) {
        return { ...updatedStudent, id: updatedStudent._id };
      }
      return row;
    }));
    return updatedStudent;
  };

  const handleProcessRowUpdateError = useCallback((error) => {
    console.log(error);
  }, []);

  const updatedRows = useMemo(
    () => rows.map((row) => ({ ...row, id: row._id })),
    [rows],
  );

  const columns = [
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
          rows={updatedRows}
          columns={columns}
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
      </Box>
    </Box>

  );
}

export default Students;
