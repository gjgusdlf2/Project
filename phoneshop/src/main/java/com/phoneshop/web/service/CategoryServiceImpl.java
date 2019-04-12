package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.CategoryDTO;
import com.phoneshop.web.mapper.CategoryMapper;

@Service
public class CategoryServiceImpl implements CategoryService{
	@Autowired CategoryMapper cate;
	@Override
	public void createCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CategoryDTO> findAllCategory(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryDTO> findSomeCategorys(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CategoryDTO findOneCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCategorys() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCategory(CategoryDTO cate) {
		// TODO Auto-generated method stub
		
	}

}
