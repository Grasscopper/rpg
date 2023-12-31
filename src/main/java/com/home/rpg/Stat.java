package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Map;
import java.util.HashMap;

@Entity
public class Stat {

	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	private int level;
	private float exp;
	private float goal;

	public Stat() {}

	public Stat(String name, String description, int level, float exp, float goal) {
		this.name = name;
		this.description = description;
		this.level = level;
		this.exp = exp;
		this.goal = goal;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public float getExp() {
		return exp;
	}

	public void setExp(float exp) {
		this.exp = exp;
	}

	public float getGoal() {
		return goal;
	}

	public void setGoal(float goal) {
		this.goal = goal;
	}

	@Override
	public String toString() {
		return "Stat{" +
			"id=" + id +
			", name='" + name + '\'' +
			", description='" + description + '\'' +
			", level='" + level + '\'' +
			", exp='" + exp + '\'' +
			", goal='" + goal + '\'' +
			'}';
	}
}