import axios from "axios";
import React, { useEffect, useState } from "react";

function EffectDataFetching() {
  // FECTH 1
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // FETCH 2
  const [post2, setPost2] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // FETCH 3
  const [post3, setPost3] = useState({});
  const [id2, setId2] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id2);
  };

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <h2>FETCH 1</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <br />
      <hr />
      <br />
      <h2>FETCH 2</h2>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post2.title}</div>
      <h2>FETCH 3</h2>
      <input type="text" value={id2} onChange={(e) => setId2(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      {post3.title}
    </div>
  );
}

export default EffectDataFetching;
