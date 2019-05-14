package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class OrdereDTO {
	private String phoneID,supplierID;
}
