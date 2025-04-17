package lk.ac.vau.fas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.User;

public interface UserRepo extends JpaRepository<User, Long>{

	//optional<User> findByEmail(String email);
}
