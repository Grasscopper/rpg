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

import com.home.rpg.Ability;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AbilityController {
	private final AbilityRepository repository;

	public AbilityController(AbilityRepository repository) {
		this.repository = repository;
  	}

	@RequestMapping(value = "/api/abilities", method = RequestMethod.GET)
	public List<Ability> getAbilities() {
		List<Ability> list = new LinkedList<Ability>();
		for (Ability e : repository.findAll()) {
			list.add(e);
		}
		return list;
	}

	@RequestMapping(value = "/api/abilities", method = RequestMethod.POST)
	@ResponseBody
	public Ability createAbility(@RequestBody Ability ability) { // JSON to an Ability object
		repository.save(ability);
		return ability; // Because of @ResponseBody, the Ability becomes JSON
	}

	@RequestMapping(value = "/api/abilities/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Ability editAbility(@RequestBody Ability newAbility, @PathVariable Integer id) {
		return repository.findById(id.longValue())
			.map((Ability) -> {
				Ability.setRealName(newAbility.getRealName());
				Ability.setAbilityName(newAbility.getAbilityName());
				Ability.setUrl(newAbility.getUrl());
				Ability.setStrength(newAbility.getStrength());
				Ability.setDescription(newAbility.getDescription());
        		return repository.save(Ability);
      		})
      		.orElseGet(() -> { // could not find Ability to edit -- creating new Ability
				newAbility.setId(id);
        		return repository.save(newAbility);
      		});
	}

	@RequestMapping(value = "/api/abilities/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteAbility(@PathVariable Integer id) {
		repository.deleteById(id.longValue());
	}
}