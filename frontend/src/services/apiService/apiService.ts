
export const getAuth = async (data: any) => {
  fetch('http://45.132.19.89/api/post_user', {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
    },
    redirect: 'follow',
    // referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      email: data.userEmail,
      roles: {
        0: "ROLE_ADMIN",
      },
      password: data.userPassword,
    })
  });
}
