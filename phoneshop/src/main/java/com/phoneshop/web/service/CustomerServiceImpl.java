package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.CustomerDTO;
import com.phoneshop.web.mapper.CustomerMapper;

@Service

public class CustomerServiceImpl implements CustomerService{
	@Autowired CustomerMapper custmap;
	@Override
	public void createCustomer(CustomerDTO cust) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CustomerDTO> findAllCustomer(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CustomerDTO> findSomeCustomers(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CustomerDTO findOneCustomer(CustomerDTO cust) {
		return custmap.selectCustomer(cust);
	}

	@Override
	public int countCustomers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadCustomer(CustomerDTO cust) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCustomer(CustomerDTO cust) {
		// TODO Auto-generated method stub
		
	}
}
