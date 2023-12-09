import mysql from 'mysql2';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection(()=>{
// Connection is automatically released when query resolves
    console.log('DB is make a Connection Correct...');
});

export default pool;