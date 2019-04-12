package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.OrderDetailDTO;
import com.phoneshop.web.mapper.OrderDetailMapper;

@Service
public class OrderDetailServiceImpl implements OrderDetailService{
	@Autowired OrderDetailMapper tail;
	@Override
	public void createOrderDetail(OrderDetailDTO tail) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrderDetailDTO> findAllOrderDetail(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDetailDTO> findSomeOrderDetails(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderDetailDTO findOneOrderDetail(OrderDetailDTO tail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countOrderDetail() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadOrderDetail(OrderDetailDTO tail) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeOrderDetail(OrderDetailDTO tail) {
		// TODO Auto-generated method stub
		
	}

}
