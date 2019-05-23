package com.phoneshop.web;

public class Test {
	public static void main(String [] args) {
		for(int i=2;i<=9;i++) {
			System.out.println("\t");
			}
		System.out.println();
		for(int i=2;i<=9;i++) {
			for(int j=1;j<=9;j++) {
				System.out.println(i+"*"+j+"="+i*j+"\t");
		}System.out.println();
		}
		String u = "";
		int sum = 0;
		for(int y=1;y<=100;y++) {
			sum += y;
		}
		System.out.println(sum);
	}
}

