package com.home.rpg;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

import java.util.Map;
import java.util.HashMap;

@Entity
public class Ability {
    private @Id @GeneratedValue Integer id;
    private String realName; // "real world" ability name
    private String abilityName; // "rpg" ability name
    private String url; // picture of ability

    // https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/column
    @Column(length=8160)
	private String description; // description of skill

    public Ability() {}

    public Ability(String realName, String abilityName, String url, String description) {
        this.realName = realName;
        this.abilityName = abilityName;
        this.url = url;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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