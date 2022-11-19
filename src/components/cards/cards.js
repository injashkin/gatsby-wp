import React from "react"
import CardImage from "../../../static/card_image.jpg"

const Cards = () => {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="card text-center px-0" style={{ width: "18rem" }}>
          <img src={CardImage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h3 class="card-title ">Card title</h3>
            <a href="#sd" class="btn btn-primary">
              Подробности
            </a>
          </div>
        </div>
        <div class="card text-center px-0" style={{ width: "18rem" }}>
          <img src={CardImage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h3 class="card-title ">Card title</h3>
            <a href="#sd" class="btn btn-primary">
              Подробности
            </a>
          </div>
        </div>
        <div class="card text-center px-0" style={{ width: "18rem" }}>
          <img src={CardImage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h3 class="card-title ">Card title</h3>
            <a href="#sd" class="btn btn-primary">
              Подробности
            </a>
          </div>
        </div>
        <div class="card text-center px-0" style={{ width: "18rem" }}>
          <img src={CardImage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h3 class="card-title ">Card title</h3>
            <a href="#sd" class="btn btn-primary">
              Подробности
            </a>
          </div>
        </div>
        <div class="card text-center px-0" style={{ width: "18rem" }}>
          <img src={CardImage} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h3 class="card-title ">Card title</h3>
            <a href="#sd" class="btn btn-primary">
              Подробности
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
