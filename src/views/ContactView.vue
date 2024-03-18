<template>
    <!-- <img id="location" src="https://drive.google.com/uc?id=1fzVI2w-rWYu7swGpmdoAJaLEkrqVErGC">
      <img id="phone" src="https://drive.google.com/uc?id=1dHSS7V8w6iEMTo0RXn9d-7_pzyQFKGgk">
      <img id="email" src="https://drive.google.com/uc?id=1GlWmEnpgGeOW8zdsEybxTou8yFNVxxD_"> -->
  
    <div id="contactInfo" class="container-fluid">
      <section id="cont">
        <div class="content">
          <h2 id="headingContact" class="display-4 mt-4 mb-4">CONTACT US</h2>
          <p id="contactPara">
            We're delighted that you're here. Whether you have questions,
            suggestions, or just want to say hello, we're ready to listen. Your
            thoughts matter to us, and we're eager to assist. Thanks for reaching
            out - we can't wait to connect with you!
          </p>
        </div>
        <div class="row">
          <div class="col">
            <div class="contactInfo">
            <div class="box">
              <div class="icon">
                <div id="location">
                  <a id="local" href="https://www.google.com/maps/place/5+Grysbok+Rd,+Lotus+River,+Cape+Town,+7805/@-34.0408817,18.5196088,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc43f80eb517a7:0x8b990bc3f895057e!8m2!3d-34.0408817!4d18.5221837?entry=ttu">
                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="text">
                <h3>Address</h3>
                <p>5 Grysbok Avenue,</p>
                <p>Lotus River,</p>
                <p>7941</p>
              </div>
            </div>
  
            <div class="box">
              <div class="icon">
                <div id="phone">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
              </div>
              <div class="text">
                <h3>Phone</h3>
                <p>061-862-0283</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <div id="envelope">
                  <a id="email" href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=ASKXGp1termqY0qxdu1RkGETVQCQaGysRp5_i88dBMdgbM9yUR-L-1aOVFLDVe_RC1wsuuyQavgt&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="text">
                <h3>Email</h3>
                <p>warrenjaftha16@gmail.com</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <div id="envelope">
                  <a id="insta" href="https://www.instagram.com/war.eezy/">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="text">
                <h3>instagram</h3>
              </div>
            </div>
          </div>
          </div>
          <div class="col">
            <div class="contactForm">
            <form id="formOfContact" action="https://formspree.io/f/mjvneyev" method="POST" ref="form" @submit.prevent="submitForm">
              <h2>Send Message</h2>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="name" name="name" placeholder="First Name" required="required" data-sendingFirstName />
                <!-- <span>First Name</span> -->
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="name" name="name" placeholder="Surname" required="required" data-sendingLastName />
                <!-- <span>Surname</span> -->
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="number" name="number" placeholder="Number" required="required" data-sendingNumber />
                <!-- <span>Number</span> -->
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="email" name="email" placeholder="Email" v-model="email" data-sendingEmail />
                <!-- <span>Email</span> -->
              </div>
  
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <textarea required="required" placeholder="Type your message" name="message" v-model="message" data-sendingMessage></textarea>
                <!-- <span>Type your message...</span> -->
              </div>
  
              <div class="inputBox">
                <input type="submit" sendingButton name="" value="Send" />
              </div>
            </form>
          </div>
          </div>
        </div>
        <div class="containerContact">
          
  
          
        </div>
      </section>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        email: "",
        message: "",
      };
    },
    mounted() {
      // Call the initializeForm method when the component is mounted
      this.initializeForm();
    },
    methods: {
      submitForm() {
        if (!this.email.trim() || !this.message.trim()) {
          alert(
            "It seems you have not filled in the required text areas to send a message. Please enter your email and your message for it to be valid. Thank you."
          );
          return;
        }
        this.$refs.form.submit();
      },
      initializeForm() {
        // declaring the button that will be used to send the data to form spree
        let sendingButton = document.querySelector("[sendingButton]");
  
        // calling the sending button and adding an event listener to the button that, when clicked, has a setTimeout attached to it
        sendingButton.addEventListener("click", () => {
          // the set timeout is set to 1 second and within the setTimeout, we are calling the clearTheForm method
          setTimeout(this.clearTheForm, 1000);
        });
      },
      clearTheForm() {
        // setting all the values to blank, this will reset the values
        document.querySelector("[data-sendingMessage]").value = "";
        document.querySelector("[data-sendingFirstName]").value = "";
        document.querySelector("[data-sendingEmail]").value = "";
        document.querySelector("[data-sendingLastName]").value = "";
        document.querySelector("[data-sendingNumber]").value = "";
      },
    },
  };
  </script>
  <style>
  /*#contactPara {
    position: relative;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    font-size: 20px;
  }
  #headingContact {
    margin-top: 100px;
    font-size: 45px;
  }
  .containerContact {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }
  
  .containerContact .containerInfo {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  
  .containerContact .contactInfo .box {
    position: relative;
    padding: 20px 0;
    display: flex;
  }
  
  .containerContact .contactInfo .box .text {
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    flex-direction: column;
    font-weight: 300;
  }
  
  */
  .containerContact .contactInfo .box .text h3 {
    font-weight: 500;
    color: rgb(39, 142, 86);
  }
  
  .contactForm {
    /* width: 40%; */
    /* padding: 40px; */
    /* margin-left: 60px; */
    background: #fff;
  }
  
  .contactForm h2 {
    font-size: 30px;
    color: #333;
    font-weight: 500;
  }
  
  .contactForm .inputBox {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }
  
  .contactForm .inputBox input,
  .contactForm .inputBox textarea {
    width: 50%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }
  .contactForm .inputBox span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }
  
  .contactForm .inputBox input:focus ~ span,
  .contactForm .inputBox input:valid ~ span,
  .contactForm .inputBox textarea:focus ~ span,
  .contactForm .inputBox textarea:valid ~ span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
  }
  
  .contactForm .inputBox input[type="submit"] {
    width: 100px;
    background: rgb(3,168,158);
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
  }
  #location {
    font-size: 30px;
  }
  #phone {
    font-size: 30px;
  }
  
  #envelope {
    font-size: 30px;
  }
  
  #insta {
    color: black;
  }
  #local {
    color: black;
  }
  #email {
    color: black;
  }
  </style>