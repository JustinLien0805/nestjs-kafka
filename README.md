## Description
Learning about the basic of nestjs with kafka
## Installation
download kafka:(https://kafka.apache.org/quickstart)
```bash
$ npm install
```

## Running the app

```bash
# start zookeeper service
$ cd kafka_2.13-3.4.0
$ bin/zookeeper-server-start.sh config/zookeeper.properties

# start kafka broker service
$ cd kafka_2.13-3.4.0
$ bin/kafka-server-start.sh config/server.properties

# start nest js
$ npm run start:dev


```
