package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.OrderesDTO;
import com.phoneshop.web.mapper.OrderesMapper;

@Service
public class OrderesServiceImpl implements OrderesService{
	@Autowired OrderesMapper ordesmap;
	@Override
	public void createShipper(OrderesDTO ordes) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrderesDTO> findAllShipper(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderesDTO> findSomeShippers(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrderesDTO findOneShipper(OrderesDTO ordes) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countShippers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadShipper(OrderesDTO ordes) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeShipper(OrderesDTO ordes) {
		// TODO Auto-generated method stub
		
	}

}
