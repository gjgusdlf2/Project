package com.phoneshop.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.cmm.Proxy;
import com.phoneshop.web.domain.CustomerDTO;
@Repository
public interface CustomerMapper {
	public void insertCustomer(CustomerDTO cust);
	public List<CustomerDTO> selectCustomerList(Map<?,?> map);
	public List<CustomerDTO> selectCustomers(Proxy pxy);
	public CustomerDTO selectCustomer(CustomerDTO cust);
	public int countCustomers(Map<?,?> map);
	public int countAllCustomers();
	public void updateCustomer(CustomerDTO cust);
	public void deleteCustomer(CustomerDTO cust);
}
