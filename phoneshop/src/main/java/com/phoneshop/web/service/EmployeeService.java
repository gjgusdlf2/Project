package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.EmployeeDTO;

@Component
public interface EmployeeService {
	public void createEmployee(EmployeeDTO cmp);
	public List<EmployeeDTO> findAllEmployee(HashMap<String,Object> map);
	public List<EmployeeDTO> findSomeEmployees(HashMap<String,Object> map);
	public EmployeeDTO findOneEmployee(EmployeeDTO emp);
	public int countEmployees();
	public void uploadEmployee(EmployeeDTO emp);
	public void removeEmployee(EmployeeDTO emp);
}
