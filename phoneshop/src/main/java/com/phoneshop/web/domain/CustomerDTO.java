package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class CustomerDTO {
	String customerID,customerName,phone,address,postalcode,city,position;
}
