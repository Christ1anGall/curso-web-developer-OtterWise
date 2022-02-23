import { useState, useEffect  } from "react";
import axios from "axios";

export default function Exerciciodas21() {
    const [resource, setResource] = useState("");
    const [response, setResponse] = useState([]);
  
    useEffect(() => {
      const request = async () => {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`,
        );
        setResponse(resp.data);
      };
      if (!resource) return;
      request();
    }, [resource]);
  
    return (
      <div>
        <button
          onClick={() =>
            setResource("users")
          }
        >
          Gerar recurso
        </button>
        <p>O user a ser carregado é: {JSON.stringify(response)}</p>
        
      </div>
    );
  }
  

  

