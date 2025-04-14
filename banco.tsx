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

    async function createTABLE() {
        try{
       
        let db = await criaDatabase();
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS tb_usuario
            (id INTEGER PRIMARY KEY NOT NULL, nome VARCHAR);`);
 
            console.log ('Tabela Criada');
        }catch(E){
            console.log('ERRO');
        }
    }

    async function inserirDADOS() {
        try{
       
        let db = await criaDatabase();
        await db.execAsync(`INSERT INTO tb_usuario (id,nome) VALUES (1,'Zé Ruela');`)
           
            console.log ('Dados Inseridos');
        }catch(E){
            console.log('ERRO');
        }
    }


   

    return(
        <View>
            <Button
            title="Create Banco"
            onPress={criaDatabase}
            />
            
            <Button
                title="inserir dados"
                onPress={()=>{createTABLE()}}
            />

            <Button
                title="inserir"
                onPress={()=>{inserirDADOS()}}
            />
        </View>
    )
 }
 export default Banco;
