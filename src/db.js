import pg from "pg";

export const pool = new pg.Pool({
    port: 5433,
    host: 'localhost',
    user : ' postgres',
    password: 'ingridbonita',
})

pool.on("connect", () => {
    console.log("Database connected.")
})