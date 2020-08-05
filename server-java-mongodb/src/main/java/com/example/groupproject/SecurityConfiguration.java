package com.example.groupproject;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

// This tells Spring that the class is a security configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    // This section specifies the authorized users
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Set configuration to auth objects
        auth.inMemoryAuthentication()
                .withUser("user")
                // Don't want password stored as clear text
                .password("password")
                .roles("USER")
                .and()
                .withUser("admin")
                .password("password")
                .roles("ADMIN");
    }

    // This section specifies permissioning for the roles
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Specify the mapping of the path to role
        http.authorizeRequests()
                // All admin roles should only be accessible by ADMIN role
                .antMatchers("/admin/**").hasRole("ADMIN")
                // Allow all users to access root URLs and blog posts
                .antMatchers("/","/post/**").permitAll()
                .and().formLogin();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
