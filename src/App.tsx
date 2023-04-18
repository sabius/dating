import { useState } from 'react'
import './layout.scss'

import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';


const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 38,
    image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
    image: "https://images.unsplash.com/photo-1480109866847-0b432ceb666a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            age={profile.age}
            image={profile.image}></Card>
        ))}
      </div>
    </div>
  )
}

export default App
