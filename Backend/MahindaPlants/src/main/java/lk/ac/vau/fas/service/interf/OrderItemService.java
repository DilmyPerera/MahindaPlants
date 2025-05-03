package lk.ac.vau.fas.service.interf;

import java.time.LocalDateTime;

import org.springframework.data.domain.Pageable;

import lk.ac.vau.fas.dto.OrderRquest;
import lk.ac.vau.fas.dto.Response;
import lk.ac.vau.fas.enums.OrderStatus;

public interface OrderItemService {
    Response placeOrder(OrderRquest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}

