/* eslint-disable consistent-return */
import baseUrl from '../../constants/baseUrl';

// Get all students
export const getAllStaffs = async () => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/staffs`, {
      method: 'GET',
      headers: myHeaders,
    });

    const staffs = await response.json();
    return staffs;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a student
export const saveNewStaff = async (staff) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/staffs/add-staff`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(staff),
    });

    const newStaff = await response.json();
    return newStaff;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a staff
export const updateStaff = async (staff) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });
  try {
    const response = await fetch(`${baseUrl}/api/school/staffs/${staff.id}`, {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify(staff),
    });

    const updatedStaff = await response.json();
    return updatedStaff;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a staff
export const deleteStaff = async (id) => {
  const myHeaders = new Headers({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVjYjE1NmY1OGI1ODhjNzA1MWI4NiIsImlhdCI6MTY3MzYwMzUzOSwiZXhwIjoxNjc2MTk1NTM5fQ.CQYvHzQz377s4aZcqub62UGYOfxrNoFecLKxK_fPeHo',
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/staffs/${id}`, {
      method: 'DELETE',
      headers: myHeaders,
    });

    const deletedStaff = await response.json();
    return deletedStaff;
  } catch (error) {
    throw new Error(error.message);
  }
};
