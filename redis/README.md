# Yama Redis Integration
Redis is used for session storage and hibernate 2nd level cache.

To test the session storage you can run 2 instance of Yama on different port. Login on one of Yama, the other one will automatically logged in, since the session storage is shared.

### Running sample
To run Yama on specific port you can type the following command:
```mvn test -Pwebapi -Dserver.port=<port>```

### Monitor Redis
To make sure the session storage and hibernate 2nd level cahce is working you can type ```redis-cli monitor``` on your console.
