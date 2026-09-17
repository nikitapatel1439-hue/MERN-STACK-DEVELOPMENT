import { useState } from 'react'
import './App.css'

function HandicraftCard({ itemName, origin, price }) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleOrder = () => {
    if (count > 0) {
      alert(`Order placed for ${count} piece(s) of ${itemName}!`)
    } else {
      alert('Please select quantity first.')
    }
  }

  return (
    <div className="product-card">
      <h2>{itemName}</h2>

      <p className="origin">
        <strong>Origin:</strong> {origin}
      </p>

      <p className="price">
        ₹{price}
      </p>

      <div className="quantity-section">
        <button onClick={handleDecrement}>−</button>

        <span>{count}</span>

        <button onClick={handleIncrement}>+</button>
      </div>

      <p className="total-text">
        Total: <strong>₹{price * count}</strong>
      </p>

      <button className="cart-button" onClick={handleOrder}>
        Add to Cart
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="app">

      <h1>Famous Indian Handicrafts</h1>

      <p className="subtitle">
        Explore Traditional Indian Handicraft Products
      </p>

      <div className="product-container">

        <HandicraftCard
          itemName="Madhubani Painting"
          origin="Bihar"
          price={1200}
        />

        <HandicraftCard
          itemName="Dhokra Art Statue"
          origin="Chhattisgarh"
          price={1800}
        />

        <HandicraftCard
          itemName="Kutch Embroidery Bag"
          origin="Gujarat"
          price={750}
        />

      </div>

    </div>
  )
}

export default App