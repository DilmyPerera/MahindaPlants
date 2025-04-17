package lk.ac.vau.fas.dto;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lk.ac.vau.fas.entity.Payment;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderRquest {
	
	private BigDecimal totalPrice;
	private List<OrderItemRequest> items;
	private Payment paymentinfo;
}
