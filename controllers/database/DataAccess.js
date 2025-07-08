const db = require("./config");

class DataAccess {
  // Corrected method to fetch user by email
  static async login(email) {
    const query = "SELECT * FROM login WHERE email = ?";
    const [rows] = await db.query(query, [email]);
    return rows;
  }

  static async addWeaver(weaverName, createdDate, deleteFlag) {
    const query =
      "INSERT INTO weavers (weaver_name, created_date, delete_flag) VALUES (?, ?, ?)";
    const [result] = await db.query(query, [
      weaverName,
      createdDate,
      deleteFlag,
    ]);
    return result;
  }

  static async getAllUsers() {
    const query = "SELECT id, email FROM login where deleteflag=0";
    const [rows] = await db.query(query);
    return rows;
  }

  static async getWeaverData() {
    const query = "SELECT * FROM weavers WHERE delete_flag = 0";
    const [rows] = await db.query(query);
    return rows;
  }

  static async getWeaverDesignData() {
    const query = "SELECT * FROM weaver_designs WHERE delete_flag = 0";
    const [rows] = await db.query(query);
    return rows;
  }
  

  static async addWeaverDesign(weaverName, qty, createdDate,design_name) {
    const query = `INSERT INTO weaver_designs (weaver_name, qty, created_date,design_name) VALUES (?, ?, ?,?)`;
    const [result] = await db.query(query, [weaverName, qty, createdDate,design_name]);
    return result;
  }

  



}

module.exports = DataAccess;
