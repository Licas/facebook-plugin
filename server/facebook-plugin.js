var STATE = {
    "STARTING":"STARTING",
    "STOPPING":"STOPPING",
    "RUNNING":"RUNNING",
    "STOPPED":"STOPPED",
    "WAITING":"WAITING"
};

var status = STATE.STOPPED;

PluginMethods = {
    start:function() {
        logUtils.log("[" + moment().format() + "] start method called.");
        status = STATE.STARTING;
        // do something to init..
        status = STATE.STARTED;
        //start publishing

        return status;
    },
    stop: function () {
        logUtils.log("[" + moment().format() + "] stop method called.");
        if(status == STATE.RUNNING) {
            status = STATE.STOPPING;

            //Try to stop publishing
            status = STATE.STOPPED;
        }

        return status;
    },
    status: function() {
        logUtils.log("["+moment().format() + "] status method called.");
        return status;
    },
    setOptions: function(opts) {
        logUtils.log("["+moment().format() + "] setOptions method called.");
        return status;
    }
}


Meteor.methods({

    start: function () {
        return PluginMethods.start();
    },
    stop: function () {
        return PluginMethods.stop();
    },
    status: function() {
        return PluginMethods.status();
    },
    setOptions: function(options) {
        return PluginMethods.setOptions(options);
    }

});
