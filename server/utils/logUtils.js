var fs = Npm.require('fs');
var os = Npm.require('os');
var logName = "facebook-plugin.log";
var logDir = "logs";

function getLogFile(version) {
    var logFileName;
    var dir = process.env.PWD;
//    var files = fs.readdirSync(dir);

    if(!version) {
        logFileName = logName;
    } else {
        logFileName = logName + "." + version;
    }
    var fileContent = fs.readFileSync(dir + "/" + logDir + "/" + logFileName);

    console.log(fileContent);

    return fileContent;
}

function getLogFullName() {
    var dir = process.env.PWD;
    var logNameFull = dir + "/" + logDir + "/" + logName;

    return logNameFull;
}

function initLog() {
    var fullName = getLogFullName()
    if(!fs.existsSync(fullName)) {
        fs.createWriteStream(fullName);
    }
}

function log(message) {
    //Svecchia file di log se necessario, poi scrivi

    var logNameFull = getLogFullName();

    if(!fs.existsSync(logNameFull)) {
        fs.createWriteStream(logNameFull);
    }

    fs.appendFile  (logNameFull, message + "\n", function (err) {
      if (err) throw err;
      console.log('Log has been written.');
    });

}


logUtils = {
    initLog: function() {
        initLog();
    },
    getLogFile : function(version){
        return getLogFile(version);
    },
    log: function(logMessage) {
        console.log("logging a message: " + logMessage);
        log(logMessage);
    }
}
