package com.brok1n.brightgold.dao.impl

import com.brok1n.brightgold.bean.User
import com.brok1n.brightgold.dao.IUserDao

class UserDaoImpl: IUserDao {

    override fun login(user: User) {

        println("保存数据")
    }

}