import React from "react"

import cardStyles from "./card.module.scss"

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1 className={cardStyles.h2}>Title 2 Card</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias qui nemo maxime eaque architecto cumque dignissimos corporis id, eveniet hic vero accusamus alias et. Fugit sint repellat minima libero dolores!</p>

      <button>Button Card</button>
    </div>
  )
}

export default Card