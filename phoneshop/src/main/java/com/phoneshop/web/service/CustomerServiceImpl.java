package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.cmm.Proxy;
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
	public List<CustomerDTO> findSomeCustomers(Proxy pxy) {
		System.out.println("서비스에서 본 리스트: "+custmap.selectCustomers(pxy));
		return custmap.selectCustomers(pxy);
	}

	@Override
	public CustomerDTO findOneCustomer(CustomerDTO cust) {
		return custmap.selectCustomer(cust);
	}

	@Override
	public int countCustomers() {
		return custmap.countAllCustomers();
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
