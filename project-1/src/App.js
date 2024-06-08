import './App.css';
import { Component } from 'react';

class App extends Component{
    state = {
      posts: [
        {
          id: 1,
          title: "titulo 1",
          body: "texto 1"
        },
        {
          id: 2,
          title: "titulo 2",
          body: "texto 2"
        },
        {
          id: 3,
          title: "titulo 3",
          body: "texto 3"
        },
      ]
    }
  
  render(){

    const { posts } = this.state

    return(
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;