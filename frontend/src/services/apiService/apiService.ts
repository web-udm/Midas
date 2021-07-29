import {
  ICreateUserParams,
  ICreateUserResponse,
} from './apiService.types';


export const getMockAuth = async (userParams: ICreateUserParams) => {
  return new Promise<ICreateUserResponse>(((resolve, reject) => {
    if (Math.random() < 0.3) {
      reject(new Error('Server is down'));
    }
    resolve({
      status: 201,
      message: `user ${userParams.name} created`,
      id: '1',
      name: 'Alon',
    });
  }))
}

// пока реализация нормально не заработает

// export const getAuth = async (userParams: ICreateUserParams) => {
//   fetch('http://45.132.19.89/api/post_user', {
//     method: 'POST',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     body: JSON.stringify({
//       email: data.userEmail,
//       roles: {
//         0: "ROLE_ADMIN",
//       },
//       password: data.userPassword,
//     })
//   });
