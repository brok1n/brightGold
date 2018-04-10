package com.brok1n.brightgold.controller

import com.brok1n.brightgold.bean.User
import com.brok1n.brightgold.dao.impl.UserDaoImpl
import com.google.gson.Gson
import com.google.gson.JsonParser
import okhttp3.OkHttpClient
import spark.Request
import spark.Response



class UserApi {

    private val gson = Gson()
    private val jsonParse = JsonParser()
    private val userDao = UserDaoImpl()
    private val okHttpClient = OkHttpClient()

    private val requestOpenIdUrl = "https://api.weixin.qq.com/sns/jscode2session?appid=wx61e635b23a533ff6&secret=be484b1c3ab390943a88aa4a359e8dd3&js_code=JSCODE&grant_type=authorization_code"

    fun login(req: Request, res: Response): String {

        return "login api"
    }

    fun loginPost(req: Request, res: Response): String {

        try {
            var obj = jsonParse.parse( req.body()).asJsonObject

            if ( obj.has("code")) {
                var code = obj.get("code").asString
                println("request login by code:$code")
                var opendIdStr = requestOpenId( code )
                println(opendIdStr)
                if ( opendIdStr.length > 10 ){
                    var openIdObj = jsonParse.parse( opendIdStr ).asJsonObject
                    println( openIdObj.get("openid"))
                }

            } else if (obj.has("session")){
                var session = obj.get("session").asString
                println("request login by session:$session")
            } else {
                println("request error")
            }
        }catch (e:Exception){
            println(e)
        }

        return "login api post"
    }

    fun requestOpenId( code:String ):String {
        println("request OpenId by code")
        var url = requestOpenIdUrl.replace("JSCODE", code)
        val request = okhttp3.Request.Builder()
                .url(url)
                .build()
        var body = okHttpClient.newCall(request).execute().body()
        body?.let {
            return body.string()
        }
        return ""
    }


    fun register(req: Request, res: Response): String {

        return "register api"
    }

    fun registerPost(req: Request, res: Response): String {

        var user = gson.fromJson<User>( req.body(), User::class.java)
        println( user )

        return "register api post"
    }

}