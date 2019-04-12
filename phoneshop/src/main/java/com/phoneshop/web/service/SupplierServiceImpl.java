package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.SupplierDTO;
import com.phoneshop.web.mapper.SupplierMapper;

@Service
public class SupplierServiceImpl implements SupplierService{
	@Autowired SupplierMapper sup;
	@Override
	public void createSupplier(SupplierDTO sup) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<SupplierDTO> findAllSupplier(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SupplierDTO> findSomeSuppliers(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SupplierDTO findOneSupplier(SupplierDTO sup) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countSuppliers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadSupplier(SupplierDTO sup) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeSupplier(SupplierDTO sup) {
		// TODO Auto-generated method stub
		
	}

}
