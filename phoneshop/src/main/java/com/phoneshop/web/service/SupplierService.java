package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.SupplierDTO;

@Component
public interface SupplierService {
	public void createSupplier(SupplierDTO sup);
	public List<SupplierDTO> findAllSupplier(HashMap<String,Object> map);
	public List<SupplierDTO> findSomeSuppliers(HashMap<String,Object> map);
	public SupplierDTO findOneSupplier(SupplierDTO sup);
	public int countSuppliers();
	public void uploadSupplier(SupplierDTO sup);
	public void removeSupplier(SupplierDTO sup);
}
