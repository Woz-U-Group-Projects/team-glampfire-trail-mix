package com.teamGlampfireTrailMix.wts.config;

import com.teamGlampfireTrailMix.wts.services.MongoUserDetailsService;
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
    private final MongoUserDetailsService mongoUserDetailsService;

    @Autowired
    public SecurityConfiguration(MongoUserDetailsService mongoUserDetailsService) {
        this.mongoUserDetailsService = mongoUserDetailsService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                // hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/images").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/messages").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/messages/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "messages/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "messages/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/posts").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/posts/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/posts/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/profileinfo").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/profileinfo").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/profileinfo/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/settings").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/settings").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/users").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/users/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/users/**").hasRole("ADMIN")
                // permitAll()
                .antMatchers(HttpMethod.POST, "/authenticate").permitAll()
                .antMatchers(HttpMethod.GET, "/images/**").permitAll()
                .antMatchers(HttpMethod.POST, "/messages").permitAll()
                .antMatchers(HttpMethod.GET, "/posts").permitAll()
                .antMatchers(HttpMethod.GET, "/posts/**").permitAll()
                .antMatchers(HttpMethod.GET, "/profileinfo").permitAll()
                .antMatchers(HttpMethod.POST, "/register").permitAll()
                .antMatchers(HttpMethod.GET, "/registered").permitAll()
                .antMatchers(HttpMethod.GET, "/settings").permitAll()
                .and().httpBasic()
                .and().sessionManagement().disable();
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder) throws Exception {
        builder.userDetailsService(mongoUserDetailsService);
    }
}
