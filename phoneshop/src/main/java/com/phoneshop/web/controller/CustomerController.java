package com.phoneshop.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.phoneshop.web.domain.CustomerDTO;
import com.phoneshop.web.mapper.CustomerMapper;
import com.phoneshop.web.service.CustomerServiceImpl;


@RestController
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
@Autowired CustomerDTO cust;
@Autowired CustomerServiceImpl service;
@Autowired CustomerMapper custMap;

	@PostMapping("/customers/{userid}")
	public @ResponseBody CustomerDTO login(@RequestBody CustomerDTO dto,
			@PathVariable String userid) {
		logger.info("========login=======");
		custMap.selectCustomer(dto);
		System.out.println("들어오는 정보 :"+dto.toString());
		return dto;
	}
	
	

}
