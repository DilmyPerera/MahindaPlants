package lk.ac.vau.fas.entity;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Data
@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String description;
	private String imageUrl;
	private BigDecimal price;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;
	
	@Column(name = "created_at")
	private final LocalDateTime createdAt = LocalDateTime.now();
}
