<template> 
  <div class="login-form">
    <div class="imagen">
      <img id="imagenfondo" src="../assets/vaccine.jpeg"> 
    </div>  
    <div class="containerLoginUser">
      <h2>Login</h2> 
      <form v-on:submit.prevent="processLoginUser" method="POST">
        <input class="input" type="text" v-model="user.username" placeholder="Usuario">
        <br>
        <input class="input" type="password" v-model="user.password" placeholder="Contraseña">
        <br>
        <button class="button" type="submit">Iniciar Sesión</button>         
      </form>
      <div id="registrarse" >
        <button class="button" v-on:Click="loadRegistrarse">Registrarse</button>  
      </div>
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
          alert ("autenticacion correcta");
        })
        .catch((error) => {
          if(error.response.status == "401")
            alert("ERROR 401: Credenciales incorrectas");
        });        
      },
      loadRegistrarse:function(){
         this.$router.push({name:"SignUp"});
      }
    }

  }
</script>

 
<style>



div .login-form {
 /* position:absolute;*/
  text-align: center;  
  width:100%;
  height:1000px;  
  left:3px;  
  /*border: 2px solid;*/
}

div .imagen{
   margin:0px;
   float:left;   
   width:65%;
}

div .imagen #imagenfondo{        
  position:relative;
  height: 480px;
  max-width:100%;
  width: 885px; 
  top: -8px;        
  left: -10px;
}

h2 { 
  font-family: Arial, Helvetica, sans-serif;
}

div .login-form .containerLoginUser{  
  position:relative;
  align:center;  
  float:right;
  width:30%;  
  top:50px;
  left:-40px;
}

.login-link {
  font-size: 12px;
  color: #444;  
	margin-top: 12px;
}



.input {
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



  .button{
    position :relative;
    top: 20px;
    left: -60px;
    color: #0099CC;
    background: transparent;
    border: 2px solid #0099CC;
    border-radius: 6px;    
    color: black;
    padding: 16px 32px;
    text-align: center;
    display: inline;
    font-size: 16px;
    margin: 8px 1px;
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

  #registrarse{
    position: relative;
    top: -75px;
    left: 65px;
    float:right;
  }

 p{
   color: black;
 }
</style>

