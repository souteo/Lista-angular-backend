import mysql from 'promise-mysql';
import keys from '../../db/keys';


const pool = mysql.createPool(keys.database);

    pool.getConnection()
    .then((connection)=>{
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED!");
    })
export default pool;