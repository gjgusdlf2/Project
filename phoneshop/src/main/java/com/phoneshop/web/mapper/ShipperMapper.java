package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.ShipperDTO;

@Repository
public interface ShipperMapper {
	public void insertShipper(ShipperDTO shi);
	public List<ShipperDTO> selectShipperList(HashMap<String,Object> map);
	public List<ShipperDTO> selectShippers(HashMap<String,Object> map);
	public ShipperDTO selectShipper(ShipperDTO shi);
	public int countShippers();
	public void updateShipper(ShipperDTO shi);
	public void deleteShipper(ShipperDTO shi);
}
