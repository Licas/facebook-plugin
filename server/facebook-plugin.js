var STATE = Object.freeze({
    STARTING:"STARTING",
    STOPPING:"STOPPING",
    RUNNING:"RUNNING",
    STOPPED:"STOPPED",
    WAITING:"WAITING"
});

var status = "no";

PluginMethods = {
    start:function() {
        logUtils.log("[" + moment().format() + "] start method called.");
        console.log("status " + PluginMethods.status);
        PluginMethods.status = STATE.STARTING;
        // do something to init..
        PluginMethods.status = STATE.STARTED;
        //start publishing

        return PluginMethods.status;
    },
    stop: function () {
        logUtils.log("[" + moment().format() + "] stop method called.");
        console.log("status " + PluginMethods.status);
        if(PluginMethods.status == STATE.RUNNING) {
            PluginMethods.status = STATE.STOPPING;
            logUtils.log("[" + moment().format() + "] status " + STATE.STOPPING);
            //Try to stop publishing
            PluginMethods.status = STATE.STOPPED;
            logUtils.log("[" + moment().format() + "] status " + STATE.STOPPED);
        }

        return PluginMethods.status;
    },
    getStatus: function() {
        logUtils.log("["+moment().format() + "] status method called.");
        return PluginMethods.status;
    },
    setOptions: function(opts) {
        logUtils.log("["+moment().format() + "] setOptions method called.");
        return PluginMethods.status;
    }
}


Meteor.methods({

    start: function () {
        return PluginMethods.start();
    },
    stop: function () {
        return PluginMethods.stop();
    },
    getStatus: function() {
        return PluginMethods.getStatus();
    },
    setOptions: function(options) {
        return PluginMethods.setOptions(options);
    }

});
