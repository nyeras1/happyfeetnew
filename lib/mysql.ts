import mysql from "mysql2/promise"

declare global {
  // eslint-disable-next-line no-var
  var __mysqlPool: mysql.Pool | undefined
}

export function getMysqlPool() {
  if (global.__mysqlPool) return global.__mysqlPool

  const host = process.env.MYSQL_HOST
  const port = process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : undefined
  const user = process.env.MYSQL_USER
  const password = process.env.MYSQL_PASSWORD
  const database = process.env.MYSQL_DATABASE

  const missing = [
    !host ? "MYSQL_HOST" : null,
    !user ? "MYSQL_USER" : null,
    !password ? "MYSQL_PASSWORD" : null,
    !database ? "MYSQL_DATABASE" : null,
  ].filter(Boolean)

  if (missing.length > 0) {
    throw new Error(`Missing MySQL environment variables: ${missing.join(", ")}`)
  }

  global.__mysqlPool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
  })

  return global.__mysqlPool
}
