import React,{useEffect,setTotalReactPackages,useState} from "react";

function Catalog() {
	const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
	useEffect(() => {
    fetch("https://localhost:44390/api/BookControler")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <div key={item.id}>
            {item.name} {item.price}
          </div>
        ))}
      </ul>
    );
  }
}
export default Catalog;