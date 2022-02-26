import { useState, useEffect } from "react";
import axios from "axios";

export default function DataListForButton() { 
  const [resource, setResource] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  
 

  useEffect(() => {
    const request = async () => {
      try {
        setisLoading(true);
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`,
        );
        setData(resp.data);
      }
      catch (error) {
        console.log(error);

      }
      finally {
        setisLoading(false)
      }
      };
    
      if (!resource) return
    request();
  }, [resource]);
    
  if (isLoading && data) {
      return <p>Carregando...</p>
  }
  
    return (
        <div>
          <button
            onClick={() =>
              setResource("todos")
            }
          >
            Gerar todos
            </button>
            <button
            onClick={() =>
              setResource("users")
            }
          >
            Gerar users
            </button>
            <button
            onClick={() =>
              setResource("posts")
            }
          >
            Gerar posts
            </button>
            <button
            onClick={() =>
                setData([])
            }
          >
            Limpar
        </button>
        
        
            
          <p>a informação carregada é: {JSON.stringify(data.slice(0, 10))}</p>
           
               
            
            
          
        </div>
      );
}

