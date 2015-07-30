
package org.meruvian.yama.cs.webapi.config.persistence;

import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EntityScan({ "org.meruvian.yama", "org.meruvian.yama.cs" })
@EnableJpaRepositories({ "org.meruvian.yama", "org.meruvian.yama.cs" })
public class PersistenceConfig {
}
