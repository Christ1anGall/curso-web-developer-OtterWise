import React from 'react'
import client from '../providers/client'


export default function ProtectedPage() {
 



  return <div><button onClick={()=>client.get("/pets")}>Exibir pets</button> </div>
}