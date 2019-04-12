package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.OrderDTO;

@Repository
public interface OrderMapper {
	public void insertOrder(OrderDTO ord);
	public List<OrderDTO> selectOrderList(HashMap<String,Object> map);
	public List<OrderDTO> selectOrders(HashMap<String,Object> map);
	public OrderDTO selectOrder(OrderDTO ord);
	public int countOrders();
	public void updateOrder(OrderDTO ord);
	public void deleteOrder(OrderDTO ord);
}
