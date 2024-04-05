package org.example.Repository;
import org.example.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query(value = "SELECT u FROM User u WHERE u.userName = :userName")
    User getUserByUsername(String userName);

    @Query(value = "SELECT u FROM User u WHERE u.email = :email")
    User getUserByEmail(String email);

}
