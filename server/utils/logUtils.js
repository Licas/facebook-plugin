var fs = Npm.require('fs');
var os = Npm.require('os');
var logName = "facebook-plugin";

function getLogFile(version) {
    var logFile;
    var dir = process.env.PWD;
    var files = fs.readdirSync(dir);

    if(!version) {
        logFile = logName;
    } else {
        logFile = logName + "." + version;
    }
    console.log(files);
}


logUtils = {
    getLogFile : function(version){
        return getLogFile(version);
    },
    log: function(logMessage) {
        console.log("logging a message: " + logMessage);
    }
}
