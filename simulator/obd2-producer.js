import logger from "./infra/logger.js";

const provider = (port) => {
    const value = randomInt(50, 80);
    port.write("" + value, () => logger.info("wrote: " + value));
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const start = (port) => {
    setInterval(() => provider(port), 10000);
};

export default start;
