import ajax from './ajax'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情<br/>
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表<br/>
export const reqFoodcategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表<br/>
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', { latitude, longitude })
// 4、根据经纬度和关键字搜索商铺列表<br/>
export const reqKeyShopS = (geohash, keyword) => ajax(BASE_URL + '/search_shops', { geohash, keyword })
// 5、获取一次性验证码<br/>
export const reqKeyword = () => ajax(BASE_URL + '/captcha')
// 6、用户名密码登陆<br/>
export const reqLoginPwd = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'post')
// 7、发送短信验证码<br/>
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
// 8、手机号验证码登陆<br/>
export const reqLoginSms = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'post')
// 9、根据会话获取用户信息<br/>
export const reqUserinfo = () => ajax(BASE_URL + '/userinfo')
// 10、用户登出<br/>
export const reqLogout = () => ajax(BASE_URL + '/userinfo')
// 11.获取info
export const reqInfo = () => ajax('/info')
// 12. 获取ratings
export const reqRatings = () => ajax('/ratings')
// 13. 获取goods
export const reqGoods = () => ajax('/goods')
