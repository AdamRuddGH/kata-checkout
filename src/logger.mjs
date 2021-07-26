
// logger Class

export class Logger {
    //the decoupled logger 

    log(logContent) {
        let timeStamp = new Date.now;
        let logContent = logContent.toString();

        console.log( { timeStamp: timeStamp, logContent: logContent })
    }

}
