
Restivus.addRoute('start', {authRequired: false}, {
    get: function () {
      return PluginMethods.start();
    }
});

Restivus.addRoute('stop', {authRequired: false}, {
    get: function () {
        return PluginMethods.stop();
    }
});


Restivus.addRoute('status', {authRequired: false}, {
    get: function () {
        return PluginMethods.getStatus();
    }
});

Restivus.addRoute('setOptions', {authRequired: false}, {
    post: function () {

        console.log("Body:" + this.bodyParams);

        return {
            body: {
                status: "success",
                message:"options set"
            },
            statusCode:200
        }
    }
});

