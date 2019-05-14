package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.OrdereDTO;

@Repository
public interface OrdereMapper {
	public void insertShipper(OrdereDTO ordes);
	public List<OrdereDTO> selectOrderesList(HashMap<String,Object> map);
	public List<OrdereDTO> selectOrderess(HashMap<String,Object> map);
	public OrdereDTO selectOrderes(OrdereDTO ordes);
	public int countOrderess();
	public void updateOrderes(OrdereDTO ordes);
	public void deleteOrderes(OrdereDTO ordes);
}
