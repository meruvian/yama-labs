package org.meruvian.yama.cs.hazelcast.webapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.hazelcast.config.Config;
import com.hazelcast.core.Hazelcast;
import com.hazelcast.core.HazelcastInstance;

@Configuration
public class HazelcastConfig {
	public static final String HAZELCAST_INSTANCE_NAME = "YAMA";
	
	@Bean(destroyMethod = "shutdown")
	public HazelcastInstance hazelcastInstance() {
		return Hazelcast.getOrCreateHazelcastInstance(new Config(HAZELCAST_INSTANCE_NAME));
	}
}
