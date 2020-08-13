package com.example.groupproject.bcrypt;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptApplication {

    public static void main(String[] args) {
        if (args.length > 0) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
            System.out.println(encoder.encode(args[0]));
        }
    }

}
