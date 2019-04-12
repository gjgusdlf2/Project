package com.phoneshop.web.service;


import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.CustomerDTO;


@Component
public interface CustomerService {
	public void createCustomer(CustomerDTO cust);
	public List<CustomerDTO> findAllCustomer(HashMap<String,Object> map);
	public List<CustomerDTO> findSomeCustomers(HashMap<String,Object> map);
	public CustomerDTO findOneCustomer(CustomerDTO cust);
	public int countCustomers();
	public void uploadCustomer(CustomerDTO cust);
	public void removeCustomer(CustomerDTO cust);
}
