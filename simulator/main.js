import producer from './obd2-producer.js';
import consumer from './obd2-consumer.js';
import port from './infra/serial-port.js';

producer(port);
consumer(port);