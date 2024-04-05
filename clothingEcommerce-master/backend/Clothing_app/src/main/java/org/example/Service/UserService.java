package org.example.Service;
import org.example.Model.User;
import org.example.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;

    }

    public User saveuser(User obj) {
        User userfinal = userRepo.save(obj);
        return userfinal;
    }

    public List<User> findAll(){return userRepo.findAll();}

    public User userLogin(String email, String password) {
        if (email == null || password == null) {
            return null;
        }

        User user = userRepo.getUserByEmail(email);
        if (user != null && user.getPassword1() != null && user.getPassword1().equals(password)) {
            return user;
        }

        return null;
    }






}

