import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {

    let newa = []

    for (let index = posts.length+1; index < posts.length + 100; index++) {
        newa.push({id: index, title: 'Por favorzinho', completed: index %2 ? true:false})
    }


    setPosts((post) => [...post, ...newa]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.id}>
            <div className="back">
              <strong> {data.id}</strong> {data.title}
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Content;
