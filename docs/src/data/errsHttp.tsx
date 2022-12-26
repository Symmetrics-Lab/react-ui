export const errsHttp = [
    {
        code: 200,
        message: 'Success',
      },
      {
        code: 400,
        message: 'Bad Request',
      },
      {
        code: 403,
        message: 'Forbidden',
      },
      {
        code: 404,
        message: 'Not Found',
      },
      {
        code: 500,
        message: 'Internal Server Error',
      },
];


export const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Developer' },
  { id: 3, name: 'Ux' },
];

export const user = {
  name: 'Debbie',
  lastname: 'Lebbie',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  about: 'Developer',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
  organization: 3,
  role: 2,
};
