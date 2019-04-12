package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.CustomerDTO;
@Repository
public interface CustomerMapper {
	public void insertCustomer(CustomerDTO cust);
	public List<CustomerDTO> selectCustomerList(HashMap<String,Object> map);
	public List<CustomerDTO> selectCustomers(HashMap<String,Object> map);
	public CustomerDTO selectCustomer(CustomerDTO cust);
	public int countCustomers();
	public void updateCustomer(CustomerDTO cust);
	public void deleteCustomer(CustomerDTO cust);
}
