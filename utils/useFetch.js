import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url, options)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, [url]);

  return data;
};

export default useFetch;
