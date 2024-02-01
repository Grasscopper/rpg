package com.home.rpg;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping(value = "/api/enemies/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Enemy editEnemy(@RequestBody Enemy newEnemy, @PathVariable Integer id) {
		return repository.findById(id.longValue())
			.map((enemy) -> {
				enemy.setName(newEnemy.getName());
				enemy.setUrl(newEnemy.getUrl());
				enemy.setTitle(newEnemy.getTitle());
				enemy.setDifficulty(newEnemy.getDifficulty());
				enemy.setDescription(newEnemy.getDescription());
        		return repository.save(enemy);
      		})
      		.orElseGet(() -> { // could not find enemy to edit -- creating new enemy
				newEnemy.setId(id);
        		return repository.save(newEnemy);
      		});
	}

	@RequestMapping(value = "/api/enemies/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteEnemy(@PathVariable Integer id) {
		repository.deleteById(id.longValue());
	}
}

//  @PutMapping("/employees/{id}")
//   Employee replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Long id) {
    
//     return repository.findById(id)
//       .map(employee -> {
//         employee.setName(newEmployee.getName());
//         employee.setRole(newEmployee.getRole());
//         return repository.save(employee);
//       })
//       .orElseGet(() -> {
//         newEmployee.setId(id);
//         return repository.save(newEmployee);
//       });
//   }