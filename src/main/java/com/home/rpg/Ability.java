package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

@Entity
public class Ability {
    private @Id @GeneratedValue Integer id;
    private String realName; // "real world" ability name
    private String abilityName; // "rpg" ability name
    private String url; // picture of ability
    private int strength; // how strong this Ability is against an Enemy

    // https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/column
    @Column(length=8160)
	private String description; // description of skill

    // https://www.baeldung.com/jpa-hibernate-associations
    @ManyToMany(mappedBy = "abilities")
    private List<Enemy> enemies;

    public Ability() {}

    public Ability(String realName, String abilityName, String url, int strength, String description) {
        this.realName = realName;
        this.abilityName = abilityName;
        this.url = url;
        this.strength = strength;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getAbilityName() {
        return abilityName;
    }

    public void setAbilityName(String abilityName) {
        this.abilityName = abilityName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Ability never directly calls addEnemy; instead, Enemy calls this method
    public void addEnemy(Enemy enemy) {
        this.enemies.add(enemy);
    }

    @Override
	public String toString() {
		return "Ability{" +
			"id=" + id +
			", realName='" + realName + '\'' +
            ", abilityName='" + abilityName + '\'' +
			", url='" + url + '\'' +
			", description='" + description + '\'' +
			'}';
	}
}