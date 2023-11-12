package com.home.rpg;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;
import java.util.LinkedList;

import com.home.rpg.Enemy;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EnemyController {
	private final EnemyRepository repository;

	public EnemyController(EnemyRepository repository) {
		this.repository = repository;
  	}

	@RequestMapping(value = "/api/enemies", method = RequestMethod.GET)
	public List<Enemy> getEnemies() {
		List<Enemy> list = new LinkedList<Enemy>();
		for (Enemy e : repository.findAll()) {
			list.add(e);
		}
		return list;
	}

	@RequestMapping(value = "/api/enemies", method = RequestMethod.POST)
	@ResponseBody
	public Enemy createEnemy(@RequestBody Enemy enemy) { // JSON to an Enemy object
		repository.save(enemy);
		return enemy; // Because of @ResponseBody, the Enemy becomes JSON
	}
}