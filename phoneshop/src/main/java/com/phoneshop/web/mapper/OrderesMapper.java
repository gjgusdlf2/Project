package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.OrderesDTO;

@Repository
public interface OrderesMapper {
	public void insertShipper(OrderesDTO ordes);
	public List<OrderesDTO> selectOrderesList(HashMap<String,Object> map);
	public List<OrderesDTO> selectOrderess(HashMap<String,Object> map);
	public OrderesDTO selectOrderes(OrderesDTO ordes);
	public int countOrderess();
	public void updateOrderes(OrderesDTO ordes);
	public void deleteOrderes(OrderesDTO ordes);
}
