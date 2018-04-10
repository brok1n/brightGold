package com.brok1n.brightgold.route

import com.brok1n.brightgold.controller.DeviceApi
import com.brok1n.brightgold.controller.UserApi
import spark.Route
import spark.Spark.*


class Router {

    private val userApi = UserApi()
    private val deviceApi = DeviceApi()

    fun init(){


        get("/", Route { _,_ -> "index" })
        post("/", Route { _,_ -> "index" })


        path("/api", {
            path("/user", {
                get("/register.go", Route { request, response -> userApi.register(request, response) })
                post("/register.go", Route { request, response -> userApi.registerPost(request, response) })
                get("/login.go", Route { request, response -> userApi.login(request, response) })
                post("/login.go", Route { request, response -> userApi.loginPost(request, response) })
            })
            path("/device", {
                get("/deviceList.go", Route { request, response -> deviceApi.deviceList(request, response ) })
                post("/deviceList.go", Route { request, response -> deviceApi.deviceList(request, response ) })
            })
        })



    }



}