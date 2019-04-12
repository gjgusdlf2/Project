package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.ShipperDTO;

@Component
public interface ShipperService {
	public void createShipper(ShipperDTO shi);
	public List<ShipperDTO> findAllShipper(HashMap<String,Object> map);
	public List<ShipperDTO> findSomeShippers(HashMap<String,Object> map);
	public ShipperDTO findOneShipper(ShipperDTO shi);
	public int countShippers();
	public void uploadShipper(ShipperDTO shi);
	public void removeShipper(ShipperDTO shi);
}
