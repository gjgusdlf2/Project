package com.phoneshop.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum,pageSize,blockSize,startRow, pageCount,
			endRow,startPage,endPage,prevBlock,nextBlock,totalCount;
	private String search;
	private boolean existPrev, existNext;
	
	public void carryOut(Map<?,?> paramMap) {
	
		String _pageNum = (String)paramMap.get("page_num");
		if(_pageNum == null) {
			pageNum = 1;
		}else {
			pageNum = Integer.parseInt(_pageNum);
		}
		
	
		String _pagesize = (String)paramMap.get("page_size");
		if(_pagesize == null) {
			pageSize = 10;
		}else {
			pageSize = Integer.parseInt(_pagesize);
		}
		
		
		String _blocksize = (String)paramMap.get("block_size");
			if(_blocksize == null) {
					blockSize = 5;
				}else {
					blockSize = Integer.parseInt(_blocksize);
				}
		
		totalCount = (int)paramMap.get("total_count");
		int nmg = totalCount % pageSize;
	
			if(nmg == 0) {
				pageCount = totalCount / pageSize;
			}else {
				pageCount = totalCount / pageSize + 1;
			}
		startRow = (pageNum -1) * pageSize;
		
			if(totalCount > pageNum * pageSize) {
				endRow = pageNum * pageSize;
				}else {
				endRow = totalCount;
			}
		int blockNum = (pageNum-1)/blockSize;
			if(existPrev) {
				startPage = blockNum/blockSize;
			}else {
				startPage = 1;
			}
		endPage = startPage + (blockSize-1);
		startPage = pageNum - ((pageNum-1) % blockSize);
		endPage = startPage + (blockSize - 1);
			if(endPage>pageCount) {
				endPage = pageCount;
			}
		existPrev = (startPage - pageSize) > 0;
		existNext = (startPage + pageSize) <= pageCount;
		prevBlock = startPage - pageSize;
		nextBlock = startPage + pageSize;
		search = (String)paramMap.get("search");
		System.out.println("스타트로우 :"+startRow);
		System.out.println("엔드로우 :"+endRow);
		System.out.println("토탈카운트 :"+totalCount);
		System.out.println("스타트페이즈 :"+startPage);
		System.out.println("엔드페이지 :"+endPage);
		System.out.println("프리블록 :"+prevBlock);
		System.out.println("넥스트블록 :"+nextBlock);
		System.out.println("페이지카운트 :"+pageCount);
		System.out.println("페이지넘 :"+pageNum);
		System.out.println("블록사이즈 :"+blockSize);
		System.out.println("페이지사이즈 :"+pageSize);
		System.out.println("existPrev :"+existPrev);
	}
}