/* eslint-disable consistent-return */
import baseUrl from '../../constants/baseUrl';

// Get all students
export const getAllStudents = async (token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/students`, {
      method: 'GET',
      headers: myHeaders,
    });

    const students = await response.json();
    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a student
export const saveNewStudent = async (student, token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  try {
    const response = await fetch(`${baseUrl}/api/school/students/add-student`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(student),
    });

    const newStudent = await response.json();
    return newStudent;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a student
export const updateStudent = async (student, token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${baseUrl}/api/school/students/${student.id}`, {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(student),
  });

  const updatedStudent = await response.json();
  return updatedStudent;
};

// Delete a student
export const deleteStudent = async (id, token) => {
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${baseUrl}/api/school/students/${id}`, {
    method: 'DELETE',
    headers: myHeaders,
  });

  const deletedStudent = await response.json();
  return deletedStudent;
};
