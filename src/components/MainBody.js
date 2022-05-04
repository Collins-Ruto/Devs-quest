import React from 'react'

export default function MainBody(params) {
    return (
      <div>
        <main className="mainBody">
          <h2>Hello Welcome To Collins' react test app</h2>
          <h1>Why i love react</h1>
          <ul className="mainBody--ul">
            <li>It is declarative</li>
            <li>its very hard to use</li>
            <li>it is new thing to learn</li>
            <li>create devquest, my new thing</li>
          </ul>
        </main>
      </div>
    );
}