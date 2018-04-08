package com.brok1n.brightgold.dao

import com.brok1n.brightgold.bean.User

interface IUserDao {

    fun login(user: User)

}