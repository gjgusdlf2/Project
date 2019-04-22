package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneshop.web.domain.ImageDTO;
import com.phoneshop.web.mapper.ImageMapper;

@Service
public class ImageServiceImpl implements ImageService{
	@Autowired ImageMapper imgmap;
	@Override
	public void createImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ImageDTO> findAllImage(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ImageDTO> findSomeImages(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ImageDTO findOneImage(ImageDTO img) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countImages() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void uploadImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeImage(ImageDTO img) {
		// TODO Auto-generated method stub
		
	}

}
