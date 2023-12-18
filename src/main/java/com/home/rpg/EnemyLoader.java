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
            "The Winter Season",
            "https://nintendoeverything.com/wp-content/uploads/D7ypHCkU8AEnvKj.jpg",
            "Death Knight",
            2,
            "During the winter, I have increased anxiety and sadness. The sun sets early, there is more traffic from the holidays, and it is very cold. To me, this makes me afraid and scared of my environment..."
        ));
	}
}