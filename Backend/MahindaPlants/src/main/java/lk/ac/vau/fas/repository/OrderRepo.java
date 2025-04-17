package lk.ac.vau.fas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.Order;

public interface OrderRepo extends JpaRepository<Order, Long>{

}
