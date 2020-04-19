const sqlite = require('sqlite3');
const dbName = 'shareArts';
const db = new sqlite.Database(dbName);

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS articles
      (id integer primary key, title, content TEXT, link)
  `;
  db.run(sql);
});

/**
 * @description 获取文章列表
 */
function all() {
  return new Promise(function(resolve, reject) {
    db.all(`SELECT * FROM articles`, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

/**
 * @description 创建文章
 * @param {*} param0
 */
function create({ title, content, link }) {
  return new Promise(function(resolve, reject) {
    const sql = `INSERT INTO articles(title, content, link) VALUES (?, ?, ?)`;
    db.run(sql, title, content, link, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

/**
 * @description 删除文章
 * @param {*} id
 */
function deleteArt(id) {
  return new Promise(function(resolve, reject) {
    if (!id) {
      return reject(new Error('Please provide an id'));
    }
    db.run(`DELETE FROM articles WHERE id = ?`, id, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

/**
 * @description 查找某篇文章
 * @param {*} id
 */
function find(id) {
  return new Promise(function(resolve, reject) {
    if (!id) {
      return reject(new Error('Please provide an id'));
    }
    db.get(`SELECT * FROM articles WHERE id = ?`, id, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

module.exports = {
  all,
  create,
  deleteArt,
  find,
};


