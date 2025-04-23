package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.LinkedList;
import java.util.Set;
import java.util.HashSet;

@Entity
public class Enemy {

	private @Id @GeneratedValue Integer id;
	private String name; // "rpg enemy" name
    private String url; // "rpg enemy" picture
    private String title; // "real world" name
	private int difficulty; // difficulty of real world challenge

    // https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/column
    @Column(length=8160)
	private String description; // description of real world challenge

    // https://www.baeldung.com/jpa-hibernate-associations
    @ManyToMany
    @JoinTable(name = "enemy_ability",
        joinColumns = @JoinColumn(name = "enemy_id"),
        inverseJoinColumns = @JoinColumn(name = "ability_id"))
    private Set<Ability> abilities = new HashSet<>();

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

    public Set<Ability> getAbilities() {
        return abilities;
    }

    public void addAbility(Ability ability) {
        this.abilities.add(ability);
        ability.getEnemies().add(this);
    }

    public void removeAbility(Ability ability) {
            this.abilities.remove(ability);
            ability.getEnemies().remove(this);
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