package lk.ac.vau.fas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {
	
}
