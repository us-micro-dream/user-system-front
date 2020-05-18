// @ts-ignore
import request from "@/utils/request";

// 微信配置
export const weChatJssdk = async (params: any) => {
  return request(`/api/wechat/bj/jssdk?url=${params}`, {
    method: "GET",
  });
};

// /**
//  * 获取用户信息
//  */
// export const getUserInfo = async () => {
//   return request(`/api/mother/info`, {
//     method: 'GET'
//   })
// }

// /**
//  * 获取奖品列表
//  */
// export const getGiftList = async () => {
//   return request(`/api/mother/drawList`, {
//     method: 'GET'
//   })
// }

// /**
//  * 更新奖品列表
//  */
// export const addressAsync = async (data: any) => {
//   return request(`/api/mother/saveAddress`, {
//     method: 'POST',
//     data
//   })
// }

// /**
//  * 获取奖品列表
//  */
// export const addressInfo = async () => {
//   return request(`/api/mother/address`, {
//     method: 'GET',
//   })
// }

// /**
//  * 抽奖
//  */
// export const award = async (data: any) => {
//   return request(`/api/mother/draw`, {
//     method: 'POST',
//     data
//   })
// }


