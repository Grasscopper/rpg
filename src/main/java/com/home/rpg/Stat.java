package com.home.rpg;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Map;
import java.util.HashMap;

@Entity
public class Stat {

	private @Id @GeneratedValue Long id;
	private String name;
	private String req;
	private int level;
	private float value;
	private float goal;

	private Stat() {}

	public Stat(String name, String req, int level, float value, float goal) {
		this.name = name;
		this.req = req;
		this.level = level;
		this.value = value;
		this.goal = goal;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReq() {
		return req;
	}

	public void setReq(String req) {
		this.req = req;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}

	public float getGoal() {
		return goal;
	}

	public void setGoal(float goal) {
		this.goal = goal;
	}

	@Override
	public String toString() {
		return "Employee{" +
			"id=" + id +
			", name='" + name + '\'' +
			", req='" + req + '\'' +
			", level='" + level + '\'' +
			", value='" + value + '\'' +
			", goal='" + goal + '\'' +
			'}';
	}
}