
Meteor.startup(function () {
    logUtils.initLog();
    logUtils.getLogFile("");

    PluginMethods.start();
});
