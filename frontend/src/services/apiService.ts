
const api = 'https://api.nasa.gov/planetary/apod';
const apiKeyRequest = '?api_key=wzJzSS7YskK0lWQNiIrXA7HUAeQzNf4G0jQUtBim';

export const getData = async () => {
  const response = fetch(`${api}${apiKeyRequest}&date=2021-01-01`);
  const text = await response.then((res) => res.json());

  console.log(text);
}


export const getAuth = async () => {
  const response = fetch('http://45.132.19.89/test/ыtest', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify({
      email : "test@test.test4",
      roles : {
        "0" : "ROLE_ADMIN"
      },
      password : "password"
    }) // body data type must match "Content-Type" header
  });
  const text = await response.then((res) => res.json());

  console.log(text);
}
