export const API_BASE_URL = 'https://65ad85f8adbd5aa31be0e6e3.mockapi.io/mockapi/tontine-challenge';

export const fetchData = async (endpoint: string) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to add data: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

export const updateData = async (endpoint: string, id: string, data: any) => {
  const url = `${API_BASE_URL}/${endpoint}/${id}`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to update data: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (endpoint: string, id: string) => {
  const url = `${API_BASE_URL}/${endpoint}/${id}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete data: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};