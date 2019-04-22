package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class SupplierDTO {
	private String supplierID,supplierName;
}
