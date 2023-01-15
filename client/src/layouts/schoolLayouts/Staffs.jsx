/* eslint-disable consistent-return */

import React, {
  useEffect,
  useState,
} from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import {
  getAllStaffs, saveNewStaff, deleteStaff, updateStaff,
} from '../../service/school/staff';
import DataGridTable from '../../components/DataGridTable/DataGridTable';
import staffColumns from '../../components/DataGridTable/constants/staffConstants';
import CustomSnackbar from '../../components/Snackbar/CustomSnackbar';

function Staffs() {
  const [rows, setRows] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.school.token);

  const handleSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarOpen(!snackbarOpen);
    setSnackbarSeverity(severity);
  };

  useEffect(() => {
    const getStaffsData = async () => {
      try {
        const staffs = await getAllStaffs(token);
        if (staffs.length > 0) {
          setRows(staffs.map((staff) => ({
            ...staff,
            allocatedClasses: staff.allocatedClasses.join(' | '),
            subjects: staff.subjects.join(' | '),
          })));
        }
        if (staffs.message) {
          throw new Error(staffs.message);
        }
        setIsLoading(false);
      } catch (error) {
        handleSnackbar(error.message, 'error');
      }
    };
    getStaffsData();
  }, [isLoading]);

  const formatStaffData = (staff) => {
    const formattedStaff = { ...staff };
    if (!Array.isArray(formattedStaff.allocatedClasses) && formattedStaff.allocatedClasses) {
      formattedStaff.allocatedClasses = staff
        .allocatedClasses
        .split(/[,|]/)
        .map((std) => (std.trim()));
    }
    if (!Array.isArray(formattedStaff.subjects) && formattedStaff.subjects) {
      formattedStaff.subjects = staff
        .subjects
        .split(/[,|]/)
        .map((subject) => (subject.trim()));
    }

    return formattedStaff;
  };

  const deleteOneStaff = async (id) => {
    await deleteStaff(id, token);
    setIsLoading(true);
    handleSnackbar('Staff deleted successfully !!', 'warning');
  };

  const handleCancel = () => {
    handleSnackbar('Changes are not saved !!', 'error');
  };

  const handleProcessRowUpdateError = (error) => {
    handleSnackbar(error.message, 'error');
  };

  // Create a staff
  const createNewStaff = async (newRow) => {
    const formattedStaff = formatStaffData(newRow);

    try {
      const newStaff = await saveNewStaff(formattedStaff, token);
      if (newStaff.message) {
        throw new Error(newStaff.message);
      }
      handleSnackbar('Staff successfully saved!!', 'success');
      setIsLoading(true);
      setRows(rows.map((row) => {
        if (row._id === newRow._id) {
          return { ...newStaff, _id: newStaff._id, isNew: false };
        }
        return row;
      }));
    } catch (error) {
      handleProcessRowUpdateError(error);
    }
  };

  const updateExistingStaff = async (changedRow) => {
    const formattedStaff = formatStaffData(changedRow);
    try {
      const updatedStaff = await updateStaff(formattedStaff, token);
      if (updatedStaff.message) {
        throw new Error(updatedStaff.message);
      }
      handleSnackbar('Staff updated successfully !!', 'success');
      return updatedStaff;
    } catch (error) {
      handleProcessRowUpdateError(error.message);
    }
  };

  return (
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGridTable
        records={rows}
        columns={staffColumns}
        handleDelete={deleteOneStaff}
        handleCancel={handleCancel}
        isLoading={isLoading}
        createNew={createNewStaff}
        updateExisting={updateExistingStaff}
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

export default Staffs;
