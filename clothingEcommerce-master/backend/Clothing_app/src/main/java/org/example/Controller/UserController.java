package org.example.Controller;
import org.example.Model.User;
import org.example.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="*",allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/registration")
    public User save(@RequestBody User obj) {

        User savedUser = userService.saveuser(obj);
        return savedUser;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User temp) {
        if (temp.getEmail() == null || temp.getPassword1() == null) {
            return ResponseEntity.badRequest().body("Email or password cannot be null");
        }

        User user = userService.userLogin(temp.getEmail(), temp.getPassword1());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }


}




