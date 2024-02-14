package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

import java.util.Map;
import java.util.HashMap;

@Entity
public class Enemy {

	private @Id @GeneratedValue Integer id;
	private String name; // "rpg enemy" name
    private String url; // "rpg enemy" picture
    private String title; // "real world" name
	private int difficulty; // difficulty of real world challenge

    // https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/column
    @Column(length=8160)
	private String description; // descripton of real world challenge

	public Enemy() {}

    public Enemy(String name, String url, String title, int difficulty, String description) {
        this.name = name;
        this.url = url;
        this.title = title;
        this.difficulty = difficulty;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

	@Override
	public String toString() {
		return "Enemy{" +
			"id=" + id +
			", name='" + name + '\'' +
            ", title='" + title + '\'' +
			", difficulty='" + difficulty + '\'' +
			", description='" + description + '\'' +
			'}';
	}
}