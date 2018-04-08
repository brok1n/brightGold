package com.brok1n.brightgold.utils

import java.io.IOException
import org.apache.ibatis.io.Resources
import org.apache.ibatis.session.SqlSessionFactoryBuilder
import org.apache.ibatis.session.SqlSessionFactory


object DbUtils {

    @Volatile
    private var sqlSessionFactory: SqlSessionFactory? = null

    fun obtionSqlSessionFactory(): SqlSessionFactory? {
        if (sqlSessionFactory == null) {
            synchronized(DbUtils::class.java) {
                if (sqlSessionFactory == null) {
                    sqlSessionFactory = getSqlSessionFactory()
                }
            }
        }
        return sqlSessionFactory
    }

    private fun getSqlSessionFactory(): SqlSessionFactory? {
        val resource = "mybatis-config.xml"
        var sqlSessionFactory: SqlSessionFactory? = null
        try {
            val inputStream = Resources.getResourceAsStream(resource)
            sqlSessionFactory = SqlSessionFactoryBuilder().build(inputStream)
        } catch (e: IOException) {
            e.printStackTrace()
        }

        return sqlSessionFactory
    }


}
