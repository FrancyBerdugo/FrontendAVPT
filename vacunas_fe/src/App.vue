<template> 
  <div id="header">
      <h1> Nuestras Vacunas Colombia</h1>
      <a target="blank_" href="https://mivacuna.sispro.gov.co/MiVacuna?v1">
      <img id= "imagenmivacuna" src="./assets/mivac2.png">
      </a>  
      <a target="blank_" href="https://www.minsalud.gov.co/Paginas/default.aspx">
      <img id= "imagenminsalud" src="./assets/minsalud.png">
      </a>       
  </div> 

  <div id="cuerpo">                      
    
    <router-view
    v-on:completedLogin="completedLogin"
    v-on:completedSignUp="completedSignUp"
    >
    </Router-view>    
   
    <!--<div id="botones">                            
      
          <button v-if="isAuth">Inicio</button>
          <button class="btn1" v-if="!isAuth" v-on:click= "loadSignUp">Registrarse</button>
    -->
          <!-- <button v-if="!isAuth" v-on:click= "loadLogin">Iniciar Sesion</button> > -->
          <!--<button v-if="isAuth" >Cerrar Sesión</button>              -->
      
       <!--
     </div>-->                   
    
  </div>
       
  <div id="footer">
    <h5>MisiónTic2022 @berliz</h5>
  </div>

</template>


<script>
  export default {
      name: 'App',

      data:function(){
        return{
         isAuth: false
        }
      },

      components:{
      },

      methods:{   
        verifyAuth: function(){
          this.isAuth = localStorage.getItem("isAuth") || false;
          console.log ('validacion '+ this.isAuth )
          this.$router.push({name:"Login"})
         /* if(this.isAuth == false){
            this.$router.push({name:"Login"})
          }
          else{
           this.$router.push({name: "Home"});
          }*/
        },
        /*loadLogin:function(){
          this.$router.push({name:"login"})
        },*/ 
        loadSignUp:function(){
          this.$router.push({name:"signUp"})
        },
        completedLogin:function(data){
           this.isAuth = localStorage.setItem("isAuth",true);
          this.isAuth = localStorage.setItem("username",data.username);
          this.isAuth = localStorage.setItem("token_access",data.token_access);
          this.isAuth = localStorage.setItem("token_refresh",data.token_refresh);
         this.$router.push({name:"Home"})
        },
        completedSignUp:function(data){
        },
      },

      created: function(){
        this.verifyAuth()
      },
  }
</script>


<style>

  /* 
      height : altura
      width : ancho
  */
  
  div #header{    
      height: 80px;
      width: 100%;    
      background-color:rgb(18, 101, 229);    
      display: flex;
      float: inline-start;     
  }

  div #header h1{
   color:white;
   float: left;    
   width: 440px;
   font: Calibri;   
   font-size: 200%;
  }

  div #imagenmivacuna{
     height: 60px;
     width: 150px; 
     position: relative;    
     left:280%;
     top:10%;
  }

  div #imagenminsalud{
     height: 60px;
     width: 200px; 
     position: relative;    
     left:220%;
     top:10%;
  }

  div #cuerpo{
    width: 100%;
    height: 460px;   
    display:flex;     
    
    /*background-color:burlywood; */
  }

  div #cuerpo div{  
    height: 380px; 
    margin :5px 5px;    
  }

  div #cuerpo #imagen{
    width: 65%;         
  }

  div #cuerpo #imagen #imagenfondo{    
   margin-left: 0px;
    margin-right: 0px;
    display: block;
     height: 420px;
     width: 815px; 
  }

  div #cuerpo #botones{
    width: 25%;        
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
    top: 40px;
    left: 10px;
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

  .btn1{
    top: 262px;
    left: -145px;
  }

  button:hover {
      background-color: #008CBA;
      color: white;
  }
  
  div #footer{
    height: 20px;
    width: 100%;    
    background-color:rgba(22, 131, 204, 0.938);
    float: inline-start;   
    margin-top: 30px;
  }
 
  div #footer h5{
   color:white;
   text-align: center;    
   width: 1200px;
   font: Arial;   
  }

  * {
    box-sizing: border-box;
  }

 
</style>