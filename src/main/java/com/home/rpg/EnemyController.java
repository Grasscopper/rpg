package com.home.rpg;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.LinkedList;

import com.home.rpg.Enemy;
import com.home.rpg.Ability;
import com.home.rpg.AbilityRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EnemyController {
	private final EnemyRepository repository;
	private final AbilityRepository abilityRepository;

	@Autowired // Annotation needed to access AbilityRepository
	public EnemyController(EnemyRepository repository, AbilityRepository abilityRepository) {
		this.repository = repository;
		this.abilityRepository = abilityRepository;
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

	// new
	@RequestMapping(value = "/api/enemies/{enemyId}/{abilityId}", method = RequestMethod.PUT)
	@ResponseBody
	public Enemy addAbilityToEnemy(@RequestBody Enemy foundEnemy, @PathVariable Integer enemyId, @PathVariable Integer abilityId) {
		Enemy enemy = repository.findById(enemyId.longValue()).orElseThrow();
		Ability ability = abilityRepository.findById(abilityId.longValue()).orElseThrow();
		// enemy.addAbility(ability);
		enemy.addAbility(ability);
		return repository.save(enemy);

		// foundEnemy.addAbility(ability);
		// repository.save(enemy);
		// System.out.println("WORKED UP TO HERE");
		// repository.save(enemy);
		// System.out.println("CHECK BELOW:");
		// System.out.printf("%s\n", enemy.getAbilities())
		// for (Ability ab : enemy.getAbilities()) {
			// System.out.printf("%s\n", ab.getRealName());
		// }

		// System.out.printf("Payload: %s\n", foundEnemy);
		// System.out.printf("Enemy ID: %s\n", enemyId);
		// System.out.printf("Ability ID: %s\n", abilityId);
		// Enemy enemy = new Enemy("A", "B", "C", 5, "D");
		// repository.save(enemy);
		// return repository.save(foundEnemy);
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