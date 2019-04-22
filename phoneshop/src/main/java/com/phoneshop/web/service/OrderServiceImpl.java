package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.OrderDTO;
import com.phoneshop.web.mapper.OrderMapper;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired OrderMapper ordamp;
	@Override
	public void createOrder(OrderDTO ord) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrderDTO> findAllOrder(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderDTO> findSomeOrders(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderDTO findOneOrder(OrderDTO ord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countOrders() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadOrder(OrderDTO ord) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeOrder(OrderDTO ord) {
		// TODO Auto-generated method stub
		
	}

}
