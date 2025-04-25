package lk.ac.vau.fas.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.ac.vau.fas.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long>{

	List<Product> findByCategoryId(Long CategoryId);
	List<Product> findByNameContainingOrDescriptionContaining(String name, String description);
}
