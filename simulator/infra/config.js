export default {
    path: process.env.SERIAL_PATH || './tty0',
    edgex: {
        deviceName: 'car-1',
        url: 'http://127.0.0.1:59986'
    }
};