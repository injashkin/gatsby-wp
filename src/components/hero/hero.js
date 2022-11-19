import React from "react"

const Hero = () => {
  return (
    <section>
      <div className="px-4 py-5 my-5 text-center">
        <h2 className="display-5 fw-bold">Стоматология</h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Описание акции или другая дополнительная информация
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              type="button"
              className="btn btn-primary rounded-pill btn-lg px-4 gap-3"
              href="#www"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
