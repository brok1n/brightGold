package com.brok1n.brightgold.route

import com.brok1n.brightgold.controller.DeviceApi
import com.brok1n.brightgold.controller.UserApi
import spark.Route
import spark.Spark.*


class Router {

    val userApi = UserApi()
    val deviceApi = DeviceApi()

    fun init(){


        get("/", Route { _,_ -> "index" })
        post("/", Route { _,_ -> "index" })


        path("/api", {
            path("/user", {
                get("/login.go", Route { request, response -> userApi.login(request, response) })
                post("/login.go", Route { request, response -> userApi.login(request, response) })
            })
            path("/device", {
                get("/deviceList.go", Route { request, response -> deviceApi.deviceList(request, response ) })
                post("/deviceList.go", Route { request, response -> deviceApi.deviceList(request, response ) })
            })
        })



    }



}