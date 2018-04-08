package com.brok1n.brightgold

import com.brok1n.brightgold.route.Router
import spark.Spark.*


fun main( args: Array<String>){

    //初始化
    init()

    //配置路由
    Router().init()


}

fun init(){
    println("初始化")
    port(80)
}
