// apiRequest.js

export const makeApiRequest = (email, password) => {
  const apiUrl =
    'https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io/auth/api/login/';

  const requestData = {
    email: email,
    password: password,
  };

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
