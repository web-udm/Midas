
export const getAuth = async (data: any) => {
  fetch('http://45.132.19.89/api/post_user', {
    method: 'POST',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    // mode: 'no-cors',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // redirect: 'follow',
    body: JSON.stringify({
      email: data.userEmail,
      roles: {
        0: "ROLE_ADMIN",
      },
      password: data.userPassword,
    })
  });
}
