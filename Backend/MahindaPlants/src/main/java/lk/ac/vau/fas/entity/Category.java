package lk.ac.vau.fas.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;

@Data
@Entity
@Table(name="categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String name;
	
	@ManyToMany(mappedBy = "category", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Product> productList;
	
	@Column(name = "created_at")
	private final LocalDateTime createdAt = LocalDateTime.now();
}
