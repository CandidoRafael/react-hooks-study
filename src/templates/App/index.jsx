// import { Posts } from "../../components/Posts/posts";
// import { PostProvider } from "../../contexts/PostProvider";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import { useCallback } from "react";
import { Teste } from "./teste";

const useAsync = (asyncFunction) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus("pending");

    return asyncFunction().then().catch();
  }, []);
};

// App.jsx
function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await data.json();
      setPosts(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Teste />
    </div>
  );
}

export default App;
