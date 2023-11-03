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
        this.repository.save(new Enemy(
            "Grasping Ogre",
            "Anxiety",
            "Afraid of the Gym",
            3,
            "I am scared of going to the gym... I will have to work very hard and discomfort is hard for me. I have dreams of being strong and healthy, but my fear of this intense enviroment is bringing me down."
        ));

        this.repository.save(new Enemy(
            "Death Knight",
            "Anxiety",
            "Winter Nights",
            2,
            "During the winter, I am scared of the nights. The sun sets early, there is traffic, and it is very cold. To me, this makes me afraid and scared of my environment..."
        ));
	}
}