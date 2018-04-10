// const BASE_URL = 'https://api.brok1n.com/api'
const BASE_URL = 'http://127.0.0.1:8888/api'

//注册
module.exports.URL_REGISTER = BASE_URL + '/user/register.go'
//login
module.exports.URL_LOGIN = BASE_URL + '/user/login.go'
//get device list
module.exports.URL_GET_DEVICE_LIST = BASE_URL + '/device/deviceList.go'
//get device detail
module.exports.URL_GET_DEVICE_DETAIL = BASE_URL + '/device/deviceDetail.go'
//add a device
module.exports.URL_ADD_DEVICE = BASE_URL + '/device/addDevice.go'


module.exports.KEY_SESSION = "session_key"
module.exports.KEY_LOGIN_DATA = "login_data_key"

