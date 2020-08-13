#BCrypt Password Encoder

Use this to create passwords for app users. To make 
it easy, there is an included JAR file in this base
folder.

### Generate a Password
To generate a password, use the following command:

```java -jar bcrypt.jar 'password'```

This will generate something like:

```$2a$12$vgFrO2wuIF25plZZIwGxO.5Qy1xYo1Z/PZ6onTIINFwOfU.pcE5CG```

Trust me, your value will be different. That's the 
strength of BCrypt.

### Create a User
In MongoDB Atlas, in the `blog` database, there is a 
`users` collection. To add a user, click on the **Insert 
Document** button. The document should look something 
like:

```
{
    username: "glampfire",
    password: "$2a$12$FS7nh7EissgM9.EKRxp9vOXUp7H9nFLkHgRkG/j.YHXZVnf3DFZcC",
    role: "USER"
}
```

In the above example, the password is "trail mix". 
You'll note that it is different from the value in
the Atlas database. Again, this is okay.