/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
// import router from 'umi/router';

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };
/**
 * 异常处理程序
 */

const errorHandler = error => {
  const { response, data } = error;
  if (response && response.status) {
    Toast.fail(data.message, 2);
    return data
  }
  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  // 默认错误处理
  errorHandler,
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  const access_token = localStorage.getItem('m-token')
  // const access_token = 'eyJpdiI6IkZPekI5QlMzTGdkVmYrOG5YR1wvd2l3PT0iLCJ2YWx1ZSI6Im9hdDZmTERWV3J5Zk0yejk0M0hxcUhHak4xZUFFdTlNZ0tKUjAzRVVPOFRcL05lOFExd3RmWUlTOVR1UlBPdVMyV1ZIc1N5OWsxbmJXd1RCSDFGNVgwejViT0RmVjZsY09SbG9aYjBrUDRvWWpRVWR2b2Q2dWJleGN3dzZFZWVOZnUxdzVWY1EycXBBbUFza2Z4SVwvQVVyRUJDbVllQjV4YXVLMlo3bzQyM0RnNWh3XC9hTUt6QTlzVkV4MFVUaWt6cmF0MG1qRE9KWkJMN1JlVjVzOVlzeGJTYXZ1cVNyMXl0ejg2WURKTG1ORGVRUUw4d2tOdXZLQWs1dkNIZStoXC8wbWlISUV1UmxwTVwvMHlXTkgrSXNBXC82ZkdockxpZkJWVXlxVkY3WERIa3dzR1hsWmNLZHJWOVkyekV0bVFHdGY1a3J5czRmeVBWR0picTFka1QreUJ1aHdsOFNKZUwwRW8rbzUxK1liVEtwZkV6WFlYRFo2cEVZWHMzdjhnYVdqN29zUnhJTlByY09KSlNVWmdpQ3J0WEZwZ2ZQRFhQcGtSQnVpTWgwOUUwUFE2eVBFaFI3bjJkdWQ3bTRZK3VzQWJ3c2lKeitCOURcL2pQWGhlQVwvUCt4V01OY1Z1TE9SZytKdk10eUZDQnczOVdObm1BYnBza3NRYXIyVVVkdDdcL2t6QWpEdnNEY3FxNjZrbEh5K3JnbHo4bHRTeFpSTHExc0FPOTNmNWlISkFBNU96ZkVwQzBsdU15NTRYaGM3RXJGbVRvcFpRYTBNU1U2ZWRkNjUrVWVkYUZjWDBxNFJVd2xnMEF5enlFa01PNlRyUGhPSVlFN2ZOaHZwRGR3QzU4ajlHNFRZNXcrb1JmV2NSZm0wSkZxaG5OVnJLWkFQcUNLU1wvbGQrWUZaZkIwQkRwTFg4WkRWaFwveUUxOEZJdFwvSlZ2bUVjMFwvdUVjWStBcXkyTHVDemQ0aVlCWTRTUG5TNUhrcU1RZnBqUWZhKzY3TVJzbUlHM08yS3pFQXpYazY5ZndaNFpuNXdxbzJEWXN2ekZ4dDJocW9ZYVo5M0RONXRuZUc5SGluWVN3SURSRHR4bWc3YytsSG4xSHhpSWFkOG1idHpvRUNwQmxraWYzdThoOUp4SndtSnhlS2lOUE9ZcGljUHBJQmw2amtHdTkwd2YxUjNFbUhWZ09UVXZDc1hcL3ZpR1NNa0paMUpzUmFuV3hNbCttK2ZQeXdPNyt0dkVkeWNMZ1E0VCtaZlBwUFR4WjFnZDdQc2dRUFRCbEd0XC94UmxVWStOR3Z4RkRpbHZtTW9td0ZNR3c9PSIsIm1hYyI6IjIwNzlkMjJhMTdmOWViYWJjZDc1ZDliMTk5ZDZjZTRiZDIzNDExMTc0MzAwZmU1MjViZmNkOTcwZWRjNzU5OWUifQ=='

  options.headers = {
    'oauthCode': access_token
  }
  return (
    {
      url,
      options: { ...options },
    }
  );
});

request.interceptors.response.use((response) => {
  const { status } = response
  if (status === 401) {
    Toast.fail('请重新登录！', 2, () => {
      // window.location.href = 'https://sc.peiyou.eaydu.com/api/wechat/motherOauth'
    });
    // @HACK
    /* eslint-disable no-underscore-dangle */
    return;
  }

  return response;
})

export default request;
