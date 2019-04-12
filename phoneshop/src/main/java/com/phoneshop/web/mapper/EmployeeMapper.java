package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.EmployeeDTO;

@Repository
public interface EmployeeMapper {
	public void insertEmployee(EmployeeDTO emp);
	public List<EmployeeDTO> selectEmployeeList(HashMap<String,Object> map);
	public List<EmployeeDTO> selectEmployees(HashMap<String,Object> map);
	public EmployeeDTO selectEmployee(EmployeeDTO emp);
	public int countEmployees();
	public void updateEmployee(EmployeeDTO emp);
	public void deleteEmployee(EmployeeDTO emp);
}
