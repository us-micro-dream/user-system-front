import './global.less';
// import Vconsole from 'vconsole'
import { wxJssdk } from '@/utils/wx'
import { weChatJssdk } from '@/services/api'
// new Vconsole()
// 判断用户环境 是否为微信

const bgmusic = require('@/assets/audio/bgm.mp3');
const elAudio = new Audio();
// @ts-ignore
window.el_audio = elAudio;
elAudio.setAttribute('src', bgmusic);
elAudio.setAttribute('id', 'audio')
elAudio.loop = true;
elAudio.play()



// weChatJssdk(window.location.href).then(res => {
//   wxJssdk(res.data, {
//     title: '母亲节 | 这100件幸福小事，你记得多少?',
//     desc: '当妈再辛苦，在漫长疲惫的一天中，孩子们会给我们准备出人意料的惊喜。',
//     link: 'https://sc.peiyou.eaydu.com/api/wechat/motherOauth',
//     imgUrl: 'https://sckc-1256037416.cos.ap-beijing.myqcloud.com/static/share-logo.png',
//   }, elAudio)
// })

// function observeRoot() {
//   console.log('start')
//   const targetNode = document.body
//   const config = { childList: true, subtree: true, characterData: true }
//   const callback = () => {
//     let root = document.getElementById('root') || {}
//     if (NProgress.status && root.childElementCount) {
//       console.log('end')
//       NProgress.done()

//     }
//   }

//   let observer = new MutationObserver(callback)
//   observer.observe(targetNode, config)
// }

// observeRoot()


