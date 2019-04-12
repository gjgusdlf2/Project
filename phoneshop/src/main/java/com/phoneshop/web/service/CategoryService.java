package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.CategoryDTO;

@Component
public interface CategoryService {
	public void createCategory(CategoryDTO cate);
	public List<CategoryDTO> findAllCategory(HashMap<String,Object> map);
	public List<CategoryDTO> findSomeCategorys(HashMap<String,Object> map);
	public CategoryDTO findOneCategory(CategoryDTO cate);
	public int countCategorys();
	public void uploadCategory(CategoryDTO cate);
	public void removeCategory(CategoryDTO cate);
}
