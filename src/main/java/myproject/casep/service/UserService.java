package myproject.casep.service;

import myproject.casep.entity.User;
import myproject.casep.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User createUser(User product) {
        return userRepository.save(product);
    }

    @Override
    public Optional<User> updateUser(Long id, User updatedUser) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setUsername(updatedUser.getUsername());
                    existingUser.setPassword(updatedUser.getPassword());
                    existingUser.setEmail(updatedUser.getEmail());
                    existingUser.setCity(updatedUser.getCity());
                    existingUser.setDistrict(updatedUser.getDistrict());
                    return userRepository.save(existingUser);
                });
    }

    @Override
    public boolean deleteUser(Long id) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    userRepository.delete(existingUser);
                    return true;
                })
                .orElse(false);
    }
}