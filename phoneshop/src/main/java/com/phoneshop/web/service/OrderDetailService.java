package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.OrderDetailDTO;

@Component
public interface OrderDetailService {
	public void createOrderDetail(OrderDetailDTO tail);
	public List<OrderDetailDTO> findAllOrderDetail(HashMap<String,Object> map);
	public List<OrderDetailDTO> findSomeOrderDetails(HashMap<String,Object> map);
	public OrderDetailDTO findOneOrderDetail(OrderDetailDTO tail);
	public int countOrderDetail();
	public void uploadOrderDetail(OrderDetailDTO tail);
	public void removeOrderDetail(OrderDetailDTO tail);
}
