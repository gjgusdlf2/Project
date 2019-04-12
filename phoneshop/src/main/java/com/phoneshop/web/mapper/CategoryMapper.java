package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.CategoryDTO;

@Repository
public interface CategoryMapper {
	public void insertCategory(CategoryDTO cate);
	public List<CategoryDTO> selectCategoryList(HashMap<String,Object> map);
	public List<CategoryDTO> selectCategorys(HashMap<String,Object> map);
	public CategoryDTO selectCategory(CategoryDTO cate);
	public int countCategorys();
	public void updateCategory(CategoryDTO cate);
	public void deleteCategory(CategoryDTO cate);
}
