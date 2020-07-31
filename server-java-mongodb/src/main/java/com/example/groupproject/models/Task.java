package com.example.groupproject.models;

import org.springframework.data.annotation.Id;

public class Task {

	@Id
	private String id;
	private String name;
	private boolean complete;

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getComplete() {
		return this.complete;
	}

	public void setComplete(boolean complete) {
		this.complete = complete;
	}

}