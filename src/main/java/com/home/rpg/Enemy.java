package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Map;
import java.util.HashMap;

@Entity
public class Enemy {

	private @Id @GeneratedValue Long id;
	private String name;
	private String type;
	private int difficulty;
	private String content;

	public Enemy() {}

    public Enemy(String name, String type, int difficulty, String content) {
        this.name = name;
        this.type = type;
        this.difficulty = difficulty;
        this.content = content;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

	@Override
	public String toString() {
		return "Enemy{" +
			"id=" + id +
			", name='" + name + '\'' +
			", type='" + type + '\'' +
			", difficulty='" + difficulty + '\'' +
			", content='" + content + '\'' +
			'}';
	}
}