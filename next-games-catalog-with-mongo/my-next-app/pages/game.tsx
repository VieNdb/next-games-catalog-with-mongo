import React from 'react'
import { GetServerSideProps } from 'next'
import { getDatabase } from "../src/dataBase"
type Gametype ={
  name:string;
  cover:string;
  price:number;
  slug:string;
}
type GametypeProps ={
data:Gametype []
}

const Game: React.FC<GametypeProps> = ({data}) => {
  console.log(data)
  return (
    <div>
      <h1>maman</h1>
    </div>
  )
}
export default Game;

//racourci rafc

export const getServerSideProps: GetServerSideProps = async () =>{
  const mongodb = await getDatabase();
  const games = await mongodb.db().collection("games").find().toArray();
  const gamesInfos = games.map((game) =>{
    if(game.cover === undefined){
      return {
        name:game.name,
        cover:"",
        price:game.price,
        slug:game.slug,
      }
    }else{
      return {
        name:game.name,
        cover:game.cover,
        price:game.price,
        slug:game.slug,
      }
    }
  })
  console.log(gamesInfos)
  return { 
    props: { 
      data: gamesInfos
    }
  };
}
