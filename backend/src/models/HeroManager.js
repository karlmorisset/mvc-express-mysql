const AbstractManager = require("./AbstractManager");

class HeroManager extends AbstractManager {
  static table = "heros";

  insert(item) {
    return this.connection.query(
      `insert into ${HeroManager.table}
      (name, gender, power, color) values (?,?,?,?)`,
      [item.name, item.gender, item.power, item.color]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${HeroManager.table} set name=?, gender=?, power=?, color=? where id = ?`,
      [item.name, item.gender, item.power, item.color, item.id]
    );
  }
}

module.exports = HeroManager;
