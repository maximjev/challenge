package com.coding.challenge.configuration;

import org.jooq.impl.DataSourceConnectionProvider;
import org.jooq.impl.DefaultConfiguration;
import org.jooq.impl.DefaultDSLContext;
import org.jooq.impl.DefaultExecuteListener;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.NameTokenizers;
import org.modelmapper.jooq.RecordValueReader;
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

        configuration.set(connectionProvider);
        configuration.set(new DefaultExecuteListener());

        return configuration;
    }

    @Bean
    public ModelMapper modelMapper() {
        var mapper = new ModelMapper();
        mapper.getConfiguration().addValueReader(new RecordValueReader());
        mapper.getConfiguration().setSourceNameTokenizer(NameTokenizers.UNDERSCORE);
        return mapper;
    }
}
