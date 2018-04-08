package com.brok1n.brightgold.controller

import com.brok1n.brightgold.dao.impl.UserDaoImpl
import spark.Request
import spark.Response

class UserApi {

    val userDao = UserDaoImpl()

    fun login(req: Request, res: Response): String {

        return "login api";
    }


}