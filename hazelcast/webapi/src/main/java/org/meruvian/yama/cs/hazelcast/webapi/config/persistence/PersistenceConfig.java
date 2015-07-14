
package org.meruvian.yama.cs.hazelcast.webapi.config.persistence;

import org.springframework.boot.autoconfigure.orm.jpa.JpaProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EntityScan({ "org.meruvian.yama", "org.meruvian.yama.cs.hazelcast" })
@EnableJpaRepositories({ "org.meruvian.yama", "org.meruvian.yama.cs.hazelcast" })
public class PersistenceConfig {
	@Bean(name = "spring.jpa.CONFIGURATION_PROPERTIES")
	@ConfigurationProperties(prefix = "jpa")
	public JpaProperties jpaProperties() {
		return new JpaProperties();
	}
}
