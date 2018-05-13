class Player {
  constructor() {
    // Code here would be executed once at the start of each level
    this.health = 20
  }

  isTakingDamage(warrior) {
    return Boolean(warrior.health() < this.health)
  }

  isInjured(warrior) {
    return Boolean(warrior.health() < 20)
  }

  isEnemyInSight(warrior, direction) {
    let view = warrior.look(direction).find(space => !space.isEmpty())
    return view && view.isEnemy()
  }

  isCaptiveInSight(warrior, direction) {
    let view = warrior.look(direction).find(space => !space.isEmpty())
    return view && view.isCaptive()
  }

  playTurn(warrior) {
    if (this.isCaptiveInSight(warrior, 'backward')) {
      if (warrior.feel('backward').isCaptive()) {
        warrior.rescue('backward')
        return
      } else {
        warrior.walk('backward')
        return
      }
    } else if (this.isEnemyInSight(warrior, 'backward')) {
      warrior.shoot('backward')
    } else if (this.isEnemyInSight(warrior, 'forward')) {
      warrior.shoot()
    } else if (warrior.feel().isEmpty()) {
      warrior.walk()
    } else if (warrior.feel().isCaptive()) {
      warrior.rescue()
    } else if (warrior.feel().isWall()) {
      warrior.pivot()
    } else {
      warrior.attack()
    }
    // if (warrior.feel().isWall()) {
    //   warrior.pivot()
    //   return
    // }

    // if (this.isTakingDamage(warrior)) {
    //   if (warrior.health() <= 10) {
    //     if (warrior.feel('backward').isEmpty()) {
    //       warrior.walk('backward')
    //     } else if (warrior.feel('backward').isCaptive()) {
    //       warrior.rescue('backward')
    //     } else {
    //       warrior.rest()
    //     }
    //   } else if (warrior.feel().isEmpty()) {
    //     warrior.walk()
    //   } else if (warrior.feel().isCaptive()) {
    //     warrior.rescue()
    //   } else {
    //     warrior.attack()
    //   }
    // } else {
    //   if (this.isInjured(warrior)) {
    //     warrior.rest()
    //     return
    //   }

    //   if (warrior.feel().isEmpty()) {
    //     warrior.walk()
    //   } else if (warrior.feel().isCaptive()) {
    //     warrior.rescue()
    //   } else {
    //     warrior.attack()
    //   }
    // }
    this.health = warrior.health()
  }
}
