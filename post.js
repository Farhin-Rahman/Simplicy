const apiUrl =
  'https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io/auth/api/login/';

const requestData = {
  email: 'cmed@cmed.com',
  password: 'cmed',
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Response data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
