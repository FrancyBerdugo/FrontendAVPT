<template> 
 <div class="login-form">
   <div class="containerLoginUser">
     <h2>Login</h2> 
       <form v-on:submit.prevent="processLoginUser" method="POST">
         <input type="text" v-model="user.username" placeholder="Usuario">
         <br>
         <input type="password" v-model="user.password" placeholder="Contraseña">
         <br>
         <button type="submit">Iniciar Sesión</button>         
       </form>
    </div> 
 </div>  
</template>


<script>
  import axios from 'axios';
  export default {
    name:'Login',

    data: function(){
      return {
        user:{
          username: "",
          password: ""
        }
      }
    },
    methods: {
      processLoginUser:function(){        
        axios.post(
          'https://mision-tic-vacunas-be.herokuapp.com/login/',
          this.user,
          {headers:{}}
        )
        .then((result) => {
          let dataLogin = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          }          
          this.$emit('completedLogin',dataLogin)
        })
        .catch((error) => {
          if(error.response.status == "401")
            alert("ERROR 401: Credenciales incorrectas");
        });
        
      }
    }

  }
</script>

 
<style>

  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background-image: url("/assets/fondo1.jng");
    background-size: cover;
    background-attachment: fixed;
    padding: 0%;
    box-sizing: border-box;
  }

.login-form {
  position:relative;
  text-align: center;
  top:30px;
  /*border: 2px solid;*/
  left: 50px;
}

.login-link {
  font-size: 12px;
  color: #444;  
	margin-top: 12px;
}


input {
  text-align: center;
  background-color: #ECF0F1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 0;
  width: 280px;
  transition: border .5s;

  margin : 15px;
}


.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}



  button{
    position :relative;
    top: 20px;
    left: -30px;
    color: #0099CC;
    background: transparent;
    border: 2px solid #0099CC;
    border-radius: 6px;    
    color: black;
    padding: 16px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 8px 15px;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;      

  }

  
  button:hover {
      background-color: #008CBA;
      color: white;
  }
  
  div #footer{
    height: 20px;
    width: 100%;    
    background-color:rgba(18, 101, 229);
    float: inline-start;   
    margin-top: 30px;
  }
 
  div #footer h5{
   color:white;
   text-align: center;    
   width: 1200px;
   font: Arial;   
  }

 p{
   color: black;
 }
</style>
