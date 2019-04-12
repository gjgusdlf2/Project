package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.ProductDTO;

@Repository
public interface ProductMapper {
	public void insertProduct(ProductDTO prd);
	public List<ProductDTO> selectProductList(HashMap<String,Object> map);
	public List<ProductDTO> selectProducts(HashMap<String,Object> map);
	public ProductDTO selectProduct(ProductDTO prd);
	public int countProducts();
	public void updateProduct(ProductDTO prd);
	public void deleteProduct(ProductDTO prd);
}
