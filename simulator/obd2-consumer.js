import logger from "./infra/logger.js";

export default (port, callback) => port.on('data', data => {
    logger.info("GOT => " + data);
    callback(data);
});

