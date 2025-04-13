package com.home.rpg;

import com.home.rpg.Ability;
import com.home.rpg.AbilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AbilityLoader implements CommandLineRunner {

	private final AbilityRepository repository;

	@Autowired
	public AbilityLoader(AbilityRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
        
      //   this.repository.save(new Ability(
      //      "Radical Acceptance",
      //      "Super Guard",
      //      "https://thumbs.dreamstime.com/b/radical-acceptance-word-cloud-radical-acceptance-word-cloud-white-background-217998175.jpg",
      //      5,
      //      "To want is to suffer. Accept reality on reality terms instead of how you want it to be. Radical means total. Reality must be 100% accepted. Then, you will be free."
      //   ));
	//   this.repository.save(new Ability(
      //       "Push Ups",
      //       "Agidyne",
      //       "https://i0.wp.com/animefire.com/wp-content/uploads/2023/08/AF-wordpress-header-2-2.png",
      //       3,
      //       "Whenever I get stressed out, doing a few push ups helps me out. I get some dopamine and some energy exerted. It comes me down and builds confidence."
	// 	));
	}
}