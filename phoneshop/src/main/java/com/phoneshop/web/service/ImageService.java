package com.phoneshop.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.phoneshop.web.domain.ImageDTO;

@Component
public interface ImageService {
	public void createImage(ImageDTO img);
	public List<ImageDTO> findAllImage(HashMap<String,Object> map);
	public List<ImageDTO> findSomeImages(HashMap<String,Object> map);
	public ImageDTO findOneImage(ImageDTO img);
	public int countImages();
	public void uploadImage(ImageDTO img);
	public void removeImage(ImageDTO img);
}
