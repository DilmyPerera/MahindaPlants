package lk.ac.vau.fas.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.User;

public interface UserRepo extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);
}
