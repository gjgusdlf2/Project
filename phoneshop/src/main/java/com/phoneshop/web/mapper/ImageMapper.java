package com.phoneshop.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.phoneshop.web.domain.ImageDTO;

@Repository
public interface ImageMapper {
	public void insertImage(ImageDTO img);
	public List<ImageDTO> selectImageList(HashMap<String,Object> map);
	public List<ImageDTO> selectImages(HashMap<String,Object> map);
	public ImageDTO selectImage(ImageDTO img);
	public int countImages();
	public void updateImage(ImageDTO img);
	public void deleteImage(ImageDTO img);
}
