package com.home.rpg;

import com.home.rpg.Enemy;
import com.home.rpg.EnemyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EnemyLoader implements CommandLineRunner {

	private final EnemyRepository repository;

	@Autowired
	public EnemyLoader(EnemyRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
        // this.repository.save(new Enemy(
        //     "The Winter Season",
        //     "https://nintendoeverything.com/wp-content/uploads/D7ypHCkU8AEnvKj.jpg",
        //     "Death Knight",
        //     3,
        //     "During the winter, I have increased anxiety and sadness. The sun sets early, there is more traffic from the holidays, and it is very cold. To me, this makes me afraid and scared of my environment..."
        // ));
		// this.repository.save(new Enemy(
		// 	"Going to the Gym Regularly",
		// 	"https://img.pokemondb.net/artwork/large/kyogre.jpg",
		// 	"Kyogre",
		// 	2,
		// 	"I used to go to the gym 7 days a week. But over time, I lost my focus and maybe my motivation too. Now, I go twice a month. I wish I could go back to my routine."
		// ));
		// this.repository.save(new Enemy(
		// 	"Sleep Schedule",
		// 	"https://static.wikia.nocookie.net/dimensional-heroes/images/3/37/Sleep.png",
		// 	"Sleepy Kirby",
		// 	2,
		// 	"I have trouble staying asleep. I always seem to wake up at the same time. So, I guess going to bed late is not an option. At least I can fall asleep quickly."
		// ));
		// this.repository.save(new Enemy(
		// 	"Paying Bills on Time",
		// 	"https://i.pinimg.com/736x/a9/f2/2c/a9f22c2d4735c9854f4c58e48bda3289.jpg",
		// 	"Perfect Cell",
		// 	1,
		// 	"I swear my mind is so forgetful when it comes to bills. I should just set up an auto payment plan, but I like having control of when I pay a bill."
		// ));
		// this.repository.save(new Enemy(
		// 	"Graduating College",
		// 	"https://cdn.vox-cdn.com/thumbor/ddFY-D9VwO3zqAoweZXlA5W-LiQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22943072/Cowboy_Bebop_Vicious.jpg",
		// 	"Vicious",
		// 	5,
		// 	"This is probably the most immense challenge of my life. This is so difficult. 60 more credits to go!"
		// ));
	}
}