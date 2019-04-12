package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.OrderDTO;

@Component
public interface OrderService {
	public void createOrder(OrderDTO ord);
	public List<OrderDTO> findAllOrder(HashMap<String,Object> map);
	public List<OrderDTO> findSomeOrders(HashMap<String,Object> map);
	public OrderDTO findOneOrder(OrderDTO ord);
	public int countOrders();
	public void uploadOrder(OrderDTO ord);
	public void removeOrder(OrderDTO ord);
}
