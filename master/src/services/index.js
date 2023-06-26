//模拟用户登录
export const login = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve({
        code: 200,
        data: {
          name: "xiaoliu",
          gender: "female",
        },
      });
    }, 1000);
  });
};
