package org.meruvian.yama.cs.webapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;

import redis.clients.jedis.JedisPool;

@Configuration
public class RedisConfig {
	@Bean
	@ConfigurationProperties(prefix = "redis")
	public JedisConnectionFactory jedisConnectionFactory() {
		return new JedisConnectionFactory();
	}
	
	@Bean
	public JedisPool jedisPool(JedisConnectionFactory f) {
		return new JedisPool(f.getHostName(), f.getPort());
	}
}
