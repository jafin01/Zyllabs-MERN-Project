/* eslint-disable consistent-return */

import React, {
  useEffect,
  useState,
} from 'react';
import { Box } from '@mui/system';
import {
  getAllStudents, saveNewStudent, deleteStudent, updateStudent,
} from '../../service/school/student';
import DataGridTable from '../../components/DataGridTable/DataGridTable';
import studentColumns from '../../components/DataGridTable/constants/studentConstants';
import CustomSnackbar from '../../components/Snackbar/CustomSnackbar';

function Students() {
  const [rows, setRows] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStudentData = async () => {
      const students = await getAllStudents();
      setRows(students);
      setIsLoading(false);
    };
    getStudentData();
  }, [isLoading]);

  const handleSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarOpen(!snackbarOpen);
    setSnackbarSeverity(severity);
  };

  const deleteOneStudent = async (id) => {
    await deleteStudent(id);
    setIsLoading(true);
    handleSnackbar('Student deleted successfully !!', 'warning');
  };

  const handleCancel = () => {
    handleSnackbar('Changes are not saved !!', 'error');
  };

  const handleProcessRowUpdateError = (error) => {
    handleSnackbar(error.message, 'error');
  };

  // Create a student
  const createNewStudent = async (newRow) => {
    try {
      const newStudent = await saveNewStudent(newRow);
      if (newStudent.message) {
        throw new Error(newStudent.message);
      }
      handleSnackbar('Student successfully saved!!', 'success');
      setIsLoading(true);
      setRows(rows.map((row) => {
        if (row._id === newRow._id) {
          return { ...newStudent, _id: newStudent._id, isNew: false };
        }
        return row;
      }));
    } catch (error) {
      handleProcessRowUpdateError(error);
    }
  };

  const updateExistingStudent = async (changedRow) => {
    try {
      const updatedStudent = await updateStudent(changedRow);
      if (updatedStudent.message) {
        throw new Error(updatedStudent.message);
      }
      handleSnackbar('Student updated successfully !!', 'success');
      return updatedStudent;
    } catch (error) {
      handleProcessRowUpdateError(error.message);
    }
  };

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGridTable
        records={rows}
        columns={studentColumns}
        handleDelete={deleteOneStudent}
        handleCancel={handleCancel}
        isLoading={isLoading}
        createNew={createNewStudent}
        updateExisting={updateExistingStudent}
        handleProcessRowUpdateError={handleProcessRowUpdateError}
      />
      { snackbarOpen && (
        <CustomSnackbar
          open={snackbarOpen}
          handleClose={handleSnackbar}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
      )}
    </Box>

  );
}

export default Students;
