package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class OrderesDTO {
	private String phoneID,supplierID;
}
