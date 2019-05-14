package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.OrdereDTO;

@Component
public interface OrdereService {
	public void createShipper(OrdereDTO ordes);
	public List<OrdereDTO> findAllShipper(HashMap<String,Object> map);
	public List<OrdereDTO> findSomeShippers(HashMap<String,Object> map);
	public OrdereDTO findOneShipper(OrdereDTO ordes);
	public int countShippers();
	public void uploadShipper(OrdereDTO ordes);
	public void removeShipper(OrdereDTO ordes);
}
