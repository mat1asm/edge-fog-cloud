import { SerialPort } from "serialport";
import { MockBinding } from "@serialport/binding-mock";
import logger from "./logger.js";
import config from "./config.js";

MockBinding.createPort(config.path, { echo: true, record: true });
const port = new SerialPort({ binding: MockBinding, path: config.path, baudRate: 14400 });
// Open and start producing
port.on('open', () => {
    logger.info('opened');
});

export default port; 
