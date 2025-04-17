package lk.ac.vau.fas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.OrderItem;

public interface OrderItemRepo extends JpaRepository<OrderItem, Long>{

} 
