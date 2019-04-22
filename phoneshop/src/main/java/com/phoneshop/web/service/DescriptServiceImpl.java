package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.DescriptDTO;
import com.phoneshop.web.mapper.DescriptMapper;

@Service
public class DescriptServiceImpl implements DescriptService{
	@Autowired DescriptMapper desmap;
	@Override
	public void createDescript(DescriptDTO des) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<DescriptDTO> findAllDescript(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DescriptDTO> findSomeDescripts(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DescriptDTO findOneDescript(DescriptDTO des) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countDescripts() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadDescript(DescriptDTO des) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeDescript(DescriptDTO des) {
		// TODO Auto-generated method stub
		
	}

}
