package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class ProductDTO {
	private String productID,productName,color,price,imageNum,descriptNum;
}
