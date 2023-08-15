import winston from "winston";

export default winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(i => `[${i.timestamp}] ${i.message}`)
    ),
    transports: [new winston.transports.Console()]
});