package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.ShipperDTO;
import com.phoneshop.web.mapper.ShipperMapper;

@Service
public class ShipperServiceImpl implements ShipperService{
	@Autowired ShipperMapper shi;
	@Override
	public void createShipper(ShipperDTO shi) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ShipperDTO> findAllShipper(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ShipperDTO> findSomeShippers(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ShipperDTO findOneShipper(ShipperDTO shi) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countShippers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadShipper(ShipperDTO shi) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeShipper(ShipperDTO shi) {
		// TODO Auto-generated method stub
		
	}

}
