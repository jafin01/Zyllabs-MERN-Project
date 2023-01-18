import baseUrl from '../../constants/baseUrl';

const createPost = async (post, token) => {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });

  try {
    const response = await fetch(`${baseUrl}/api/student/createPost/`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(post),
    });

    if (response.message) {
      throw new Error(response.message);
    }

    const newStudent = await response.json();
    return newStudent;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createPost;
