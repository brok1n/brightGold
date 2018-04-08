package com.brok1n.brightgold.route

import com.brok1n.brightgold.controller.DeviceApi
import com.brok1n.brightgold.controller.UserApi
import spark.Route
import spark.Spark.*


class Router {

    val userApi = UserApi()
    val deviceApi = DeviceApi()

    fun init(){


        get("/", Route { request, response -> "index" })
        post("/", Route { request, response -> "index" })


        path("/api", {
            path("/user", {
                post("/login.go", Route { request, response -> userApi.login(request, response) })
            })
            path("/device", {
                post("/deviceList.go", Route { request, response -> deviceApi.deviceList(request, response ) })
            })
        })



    }



}