/* eslint-disable consistent-return */
import baseUrl from '../../constants/baseUrl';

// Get all students
export const getAllStaffs = async (token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
export const saveNewStaff = async (staff, token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
export const updateStaff = async (staff, token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
export const deleteStaff = async (id, token) => {
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
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
