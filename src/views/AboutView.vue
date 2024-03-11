<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <h2 id="aboutHeading" class="display-4 mt-4 mb-4 text-center">ABOUT</h2>
        </div>
        <div>
          <h5 id="aboutHeading2" class="display-7">What is our business goal</h5>
          <p>Our business goal is to provide our customers with the best quality inventory management system for thier business that they will be both satisfied with the look and the feel of the system </p>
        </div>
        <div>
          <h5 id="aboutHeading3" class="display-7">What is our business mission</h5>
          <p>Ultimately our business goal is to go global and establish different branches all over South Africa so that hospitals from all over the country can have access to our excellent inventory management systems</p>
        </div>
        <div>
          <h5 id="aboutHeading4" class="display-7">What is our business vision</h5>
          <p>Our business vision is help the community as well as local healthcare centers with managing their healthcare supplies to make their lives and jobs a little easier</p>
        </div>
      </div>
      <div class="col-md-6 order-md-2 d-flex justify-content-center">
        <div class="text-center">
          <!-- <img id="homeGirl" src="https://i.ibb.co/q5KNX7N/animegirl-removebg-preview.png" class="img-fluid bigger-image"> -->
        </div>
      </div>
    </div>
  </div>
<div id="sliderImage"> 
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="image1" src="https://i.ibb.co/X3BDTTJ/inventory-management-removebg-preview.png"  alt="">
    </div>
    <div class="carousel-item">
      <img id="image2" src="https://i.ibb.co/CKpw6bR/branch.png" alt="">
    </div>
    <div class="carousel-item">
      <img id="image3" src="https://i.ibb.co/wJtKTWk/community-icon-29133-removebg-preview.png" alt="">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
 
</template>

<script>
export default {
 
}
</script>

<style>
#sliderImage{
  margin-top:150px;
}
.bigger-image {
  max-width: 100%;
  height: auto; 
  max-height: 400px; 
  position: absolute;
  left: 50%; 
  transform: translateX(-50%); 
}

.carousel-item img {
    margin: 0 auto; 
    display: block; 
  }

  .carousel-control-prev,
  .carousel-control-next {
    background-color: rgb(3,168,158);

    width:50px;
  }
#image1{

  width:300px;
  height:300px;
}
#image2{

  width:300px;
  height:300px;
}
#image3{

  width:300px;
  height:300px;
}

.carousel-item img {
  max-width: 50%;
  height: auto;
}
</style>
