package com.phoneshop.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class OrderDTO {
	private String orderID,customerID,orderData,phoneID;
}
