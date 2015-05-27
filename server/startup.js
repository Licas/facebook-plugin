
Meteor.startup(function () {
    logUtils.initLog();

    PluginMethods.start();

    Restivus.configure({
      useAuth: true,
      prettyJson: true
    });
});
