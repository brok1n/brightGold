
const requestObj = {

    init: function( log, config){
        this.log = log
        this.config = config
    },
    /**
     * register user
     * avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/lcj2q1SRibql8CJwvyTZh9ewUAa2shzUDKRodUibUPyon4gBhUSZGia43PW6YPbFdu27vibEMwRedEryQT6dt0EN0A/0"
     city:"Chaoyang"
     country:"China"
     gender:1
     language:"zh_CN"
     nickName:"认真的傻子"
     province:"Beijing"
     * */
    register: function ( code, headPortrait, city, country, gender, language, nickName, province, success, failed, completed ) {
        const data = {
            b_nickName: nickName,
            b_country: country,
            b_province: province,
            b_city: city,
            b_language: language,
            b_gender: gender,
            b_head_portrait: headPortrait,
            b_code: code
        }
        this.req( this.config.URL_REGISTER, data, success, failed, completed)
    },
    loginBySession: function( session, success, failed, completed ){
        this.log("loginBySession")
        this.req( this.config.URL_LOGIN, {
            session: session
        }, success, failed, completed)
    },
    loginByCode: function( code, success, failed, completed ){
        this.log("loginByCode")
        this.req( this.config.URL_LOGIN, {
            code: code
        }, success, failed, completed)
    },
    req: function (url, data, success, failed, complete) {
        wx.showLoading({
            title: '请稍侯...',
        })
        requestObj.log("req url:" + url )
        requestObj.log("post data:" + JSON.stringify(data) )
        wx.request({
            url: url,
            method: 'POST',
            dataType: 'json',
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                wx.hideLoading()
                requestObj.log(res)
                if(res.statusCode == 200 && res.data.resultCode){
                    if (res.data.code == 200 ) {
                        success(res.data.responseData)
                    } else {
                        failed(res.data.resultMsg)
                    }
                } else {
                    failed('网络请求失败')
                }
            },
            fail: function () {
                wx.hideLoading()
                failed('网络请求失败')
            },
            complete: complete
        })

    }

}

module.exports =  requestObj;
