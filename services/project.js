const pool = require("../config/database");

module.exports = {
  create(data) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO projects(name, description,url_image,client_name,url_repository,url_website) VALUES (?,?,?,?,?,?)`,
        [
          data.name,
          data.description,
          data.image,
          data.client,
          data.repository,
          data.website,
        ],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  },
  find(limit = null) {
    return new Promise((resolve, reject) => {
      let query = limit
        ? `SELECT * FROM projects ORDER BY id LIMIT ${parseInt(limit)}`
        : `SELECT * FROM projects ORDER BY id`;

      pool.query(query, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  findOne(id) {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM projects WHERE id =${parseInt(id)}`;

      pool.query(query, (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  },
  remove(id) {
    return new Promise((resolve, reject) => {
      let query = `DELETE * FROM projects WHERE id =${parseInt(id)}`;

      pool.query(query, (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  },
  update({ data }, id) {
    return new Promise((resolve, reject) => {
      let query = 
      pool.query(
        `UPDATE projects SET name=?, description=?,url_image=?,client_name=?,url_repository,url_website=? WHERE id=${id})`,
        [
          data.name,
          data.description,
          data.image,
          data.client,
          data.repository,
          data.website,
          id
        ],
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        }
      );
    });
  },
};
