package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.DescriptDTO;

@Repository
public interface DescriptMapper {
	public void insertDescript(DescriptDTO des);
	public List<DescriptDTO> selectDescriptList(HashMap<String,Object> map);
	public List<DescriptDTO> selectDescripts(HashMap<String,Object> map);
	public DescriptDTO selectDescript(DescriptDTO des);
	public int countDescripts();
	public void updateDescript(DescriptDTO des);
	public void deleteDescript(DescriptDTO des);
}
