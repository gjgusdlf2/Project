package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.EmployeeDTO;
import com.phoneshop.web.mapper.EmployeeMapper;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired EmployeeMapper emp;
	@Override
	public void createEmployee(EmployeeDTO cmp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<EmployeeDTO> findAllEmployee(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<EmployeeDTO> findSomeEmployees(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeDTO findOneEmployee(EmployeeDTO emp) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countEmployees() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadEmployee(EmployeeDTO emp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeEmployee(EmployeeDTO emp) {
		// TODO Auto-generated method stub
		
	}

}
