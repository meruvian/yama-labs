package org.meruvian.yama.cs.hazelcast.webapi;

import java.util.Map;

import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.ExpiringSession;
import org.springframework.session.MapSessionRepository;
import org.springframework.session.SessionRepository;
import org.springframework.session.web.http.SessionRepositoryFilter;

import com.hazelcast.core.HazelcastInstance;

@Configuration
public class HttpSessionConfig {
	public static final String SESSION_MAP_NAME = "YAMA_SESSION";
	
	@Bean
	public SessionRepository<ExpiringSession> sessionRepository(HazelcastInstance instance) {
		Map<String, ExpiringSession> sessions = instance.getMap(SESSION_MAP_NAME);
		
		return new MapSessionRepository(sessions);
	}
	
	@Bean
	public FilterRegistrationBean sessionRepositoryFilter(SessionRepository<ExpiringSession> sessionRepository) {
		SessionRepositoryFilter<ExpiringSession> filter = new SessionRepositoryFilter<ExpiringSession>(sessionRepository);
		
		return new FilterRegistrationBean(filter);
	}
}
