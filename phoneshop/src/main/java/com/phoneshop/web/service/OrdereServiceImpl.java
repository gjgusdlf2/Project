package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.OrdereDTO;
import com.phoneshop.web.mapper.OrdereMapper;

@Service
public class OrdereServiceImpl implements OrdereService{
	@Autowired OrdereMapper ordesmap;
	@Override
	public void createShipper(OrdereDTO ordes) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<OrdereDTO> findAllShipper(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrdereDTO> findSomeShippers(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OrdereDTO findOneShipper(OrdereDTO ordes) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countShippers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadShipper(OrdereDTO ordes) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeShipper(OrdereDTO ordes) {
		// TODO Auto-generated method stub
		
	}

}
