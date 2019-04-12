package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.SupplierDTO;

@Repository
public interface SupplierMapper {
	public void insertSupplier(SupplierDTO supp);
	public List<SupplierDTO> selectSupplierList(HashMap<String,Object> map);
	public List<SupplierDTO> selectSuppliers(HashMap<String,Object> map);
	public SupplierDTO selectSupplier(SupplierDTO supp);
	public int countSuppliers();
	public void updateSupplier(SupplierDTO supp);
	public void deleteSupplier(SupplierDTO supp);
}
