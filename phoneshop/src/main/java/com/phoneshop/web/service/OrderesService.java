package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.OrderesDTO;

@Component
public interface OrderesService {
	public void createShipper(OrderesDTO ordes);
	public List<OrderesDTO> findAllShipper(HashMap<String,Object> map);
	public List<OrderesDTO> findSomeShippers(HashMap<String,Object> map);
	public OrderesDTO findOneShipper(OrderesDTO ordes);
	public int countShippers();
	public void uploadShipper(OrderesDTO ordes);
	public void removeShipper(OrderesDTO ordes);
}
