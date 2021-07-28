
// CheckoutLogger Class

exports.CheckoutLogger = class CheckoutLogger {
    //the decoupled logger 

    log(logContent) {
        const timeStamp = Date.now();
        const logContentString = logContent.toString();

        console.log( { timeStamp: timeStamp, logContent: logContentString })
    }

}
