package com.coding.challenge.configuration;

import org.jooq.impl.DataSourceConnectionProvider;
import org.jooq.impl.DefaultConfiguration;
import org.jooq.impl.DefaultDSLContext;
import org.jooq.impl.DefaultExecuteListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.TransactionAwareDataSourceProxy;

import javax.sql.DataSource;

@Configuration
public class JooqConfiguration {

    @Bean
    public DataSourceConnectionProvider connectionProvider(DataSource dataSource) {
        return new DataSourceConnectionProvider(new TransactionAwareDataSourceProxy(dataSource));
    }

    @Bean
    public DefaultDSLContext defaultDSLContext(DefaultConfiguration defaultConfiguration) {
        return new DefaultDSLContext(defaultConfiguration);
    }

    @Bean
    public DefaultConfiguration defaultConfiguration(DataSourceConnectionProvider connectionProvider) {
        DefaultConfiguration configuration = new DefaultConfiguration();
        configuration.set(connectionProvider).set(new DefaultExecuteListener());
        return configuration;
    }
}
