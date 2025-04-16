package lk.ac.vau.fas.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "payments")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private BigDecimal amount;
	private String method;
	private String status;
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id")
	private Order order;
	
	@Column(name = "created_at")
	private final LocalDateTime createdAt = LocalDateTime.now();
	
	

}
