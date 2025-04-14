import react from "react";
import { Button, View } from "react-native"
import * as SQLite from 'expo-sqlite';


// componentes

 const Banco = ()=>{

    async function criaDatabase(){
        const db = await SQLite.openDatabaseAsync('PAM2');
        if(db){
            console.log('banco criado');
        }else{
            console.log('erro');
        }
        return db;
    }

    async function createTABLE(){
        try {
            let db = await criaDatabase();
            await db.execAsync(`
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS tb_usuario
                (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);`             
            );
            console.log('tabela criada')
        }catch (error) {
            console.error('Erro ao criar tabela:', error);
        }
    }

    async function inserirDADOS(){
        let db = criaDatabase();
        (await db).execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS tb_usuario
            (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);`
        );
    }

    return(
        <View>
            <Button
            title="Create Banco"
            onPress={criaDatabase}
            />
            
            <Button
                title="inserir dados"
                onPress={()=>{inserirDADOS()}}
            />
        </View>
    )
 }
 export default Banco;