interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'lkasdklfdisfjisnernneiofdsknronflkasdnf',
        user: {
          name: 'Matheus',
          email: 'matheustark321@gmail.com',
        },
      });
    }, 2000);
  });
}
