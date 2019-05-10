package com.phoneshop.web.controller;

import java.io.File;
import java.util.Iterator;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.phoneshop.web.domain.DescriptDTO;
import com.phoneshop.web.mapper.DescriptMapper;
import com.phoneshop.web.service.DescriptServiceImpl;

@RestController
public class DescriptCtr {
	private static final Logger logger = LoggerFactory.getLogger(DescriptCtr.class);
	public static final String SAVED_FILES = "C:\\Users\\1027\\git\\repository\\phoneshop\\src\\main\\webapp\\resources\\desc\\";
	@Autowired DescriptDTO des;
	@Autowired DescriptServiceImpl service;
	@Autowired DescriptMapper desMap;
	@Autowired Map<String,Object> map;
	
	@PostMapping("/descriptName") 
	Map<String,Object> descripupload(
			MultipartHttpServletRequest request)throws Exception{
		logger.info("========Descript(){}=======","ENTER");
		String result = "";
		Iterator<String> it = request.getFileNames();
		if(it.hasNext()) {
			MultipartFile file = request.getFile(it.next());
			logger.info("file upload result:{}", "success");
			logger.info("upload file name:{}", file.getName());
			logger.info("upload file size:{}", file.getSize());
			logger.info("upload file exist:{}", file.isEmpty());
			logger.info("upload file original name:{}", file.getOriginalFilename());
			logger.info("upload file:{}", file.getOriginalFilename());
			String filename = file.getOriginalFilename();
			des.setDescriptName(filename);
			int rs = 1;
			if(rs==1) {
				logger.info("file upload insert:{}", "success");
				File dest = new File(SAVED_FILES + filename);
				file.transferTo(dest);
				result = "등록 성공";
			}else {
				logger.info("file upload insert:{}", "fail");
				result = "등록 실패";
			}
		}else {
			logger.info("file upload result:{}", "fail");
			result = "등록 실패";
		}
		map.clear();
		map.put("result", result);
		return map;
	}
}
