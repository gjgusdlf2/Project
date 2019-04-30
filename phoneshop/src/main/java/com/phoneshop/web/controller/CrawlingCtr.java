package com.phoneshop.web.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phoneshop.web.domain.ProductDTO;

@RestController
public class CrawlingCtr {
	@Autowired Map<String,Object> map;

	@GetMapping("/products/price")
	public Map<String,Object> price() throws Exception{
		String url = "http://prod.danawa.com/info/?pcode=4925627&cate=12315778";
		Document doc = Jsoup.connect(url).get();
		Elements elements = doc.select("em.prc_t");
		String s81 = elements.text();
		List<ProductDTO> list = new ArrayList<>();
		map.clear();
		list.clear();
		for(int i=0;i<4;i++) {
			ProductDTO prod = new ProductDTO();
			String s8 = s81.split(" ")[i];
			prod.setPrice(s8);
			System.out.println(s8);
			list.add(prod);
		}
		map.put("list", list);
		System.out.println("맵에 들어있는 값"+map.toString());
		return map;
	}
}
