package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.OrderDetailDTO;

@Repository
public interface OrderDetailMapper {
	public void insertOrderDetail(OrderDetailDTO tail);
	public List<OrderDetailDTO> selectOrderDetailList(HashMap<String,Object> map);
	public List<OrderDetailDTO> selectOrderDetails(HashMap<String,Object> map);
	public OrderDetailDTO selectOrderDetail(OrderDetailDTO tail);
	public int countOrderDetails();
	public void updateOrderDetail(OrderDetailDTO tail);
	public void deleteOrderDetail(OrderDetailDTO tail);
}
