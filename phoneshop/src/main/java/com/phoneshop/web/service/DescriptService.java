package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.DescriptDTO;

@Component
public interface DescriptService {
	public void createDescript(DescriptDTO des);
	public List<DescriptDTO> findAllDescript(HashMap<String,Object> map);
	public List<DescriptDTO> findSomeDescripts(HashMap<String,Object> map);
	public DescriptDTO findOneDescript(DescriptDTO des);
	public int countDescripts();
	public void uploadDescript(DescriptDTO des);
	public void removeDescript(DescriptDTO des);
}
