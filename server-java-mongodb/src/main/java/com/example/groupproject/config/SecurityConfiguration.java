package com.example.groupproject.config;


import com.example.groupproject.services.MongoUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableConfigurationProperties
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    MongoUserDetailsService mongoUserDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/images/add").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/posts").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/posts/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/posts/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/profileinfo").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/profileinfo/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/settings").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/settings").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/images/**").permitAll()
                .antMatchers(HttpMethod.POST, "/messages").permitAll()
                .antMatchers(HttpMethod.GET, "/posts").permitAll()
                .antMatchers(HttpMethod.GET, "/posts/**").permitAll()
                .antMatchers(HttpMethod.GET, "/profileinfo").permitAll()
                .antMatchers(HttpMethod.GET, "/settings").permitAll()
                .and().httpBasic()
                .and().sessionManagement().disable();
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder) throws Exception {
        builder.userDetailsService(mongoUserDetailsService);
    }
}

/*
import com.example.groupproject.auth.MongoUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private MongoUserDetailsService mongoUserDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }


    // Authentication : User --> Roles
    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(mongoUserDetailsService).passwordEncoder(passwordEncoder());
    }

    // Authorization : Role -> Access
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().and().authorizeRequests().antMatchers(HttpMethod.GET, "/settings")
                .hasRole("USER").antMatchers("/**").hasRole("ADMIN").and()
                .csrf().disable().headers().frameOptions().disable();
    }

}*/
