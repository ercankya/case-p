package myproject.casep.service;

import myproject.casep.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<User> getAllUsers();

    Optional<User> getUserById(Long id);

    User createUser(User product);

    Optional<User> updateUser(Long id, User updatedUser);

    boolean deleteUser(Long id);
}
