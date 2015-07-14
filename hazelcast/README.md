# Yama Hazelcast Integration
Hazelcast is used for session storage and hibernate 2nd level cache.

To test the session storage you can run 2 instance of Yama on different port. 
Login on one of Yama, the other one will automatically logged in, since the session storage is shared.

### Running sample
To run Yama on specific port you can type the following command:
```mvn test -Pwebapi -Dserver.port=<port>```

### Monitor Session
To make sure the session are stored in the hazelcast cluster you can access via REST interface.
The REST url shown below:

```http://<node IP address>:<port>/hazelcast/rest/maps/YAMA_SESSION/<sessionId>```

where the ```sessionId``` is cookies named **```SESSION```**

Assume that your cluster member are shown below.

```
Members [4] {
	Member [172.17.42.1]:5701
	Member [172.17.42.1]:5703
	Member [172.17.42.1]:5702 this
	Member [172.17.42.1]:5704
}
```
