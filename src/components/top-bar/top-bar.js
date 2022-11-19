import React from "react"

const TopBar = () => {
  return (
    <header class="p-2 text-bg-info">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div class="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <i class="color icon-phone"></i> +7 (918) 123 45
            67&nbsp;&nbsp;&nbsp;<i class="color icon-map-marker"></i> г. Анапа,
            ул Тверская, 12
          </div>

          <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">top-social</div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
