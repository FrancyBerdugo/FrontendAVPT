<template>      
    <div class="signUp_user">
        <div class="container_signUp_user">
            <div class="cont">
                <img id="imagen" src="../assets/manos.png">        
            </div>  
            <div class="camposRegistro">
                <h2>Registrarse</h2>
                <form v-on:submit.prevent="processSignUp" >
                    <input id="codigo" type="number" v-model="user.cod_territorio" placeholder="Código de territorio">
                    <br>
                    <input id="usuario" type="text" v-model="user.username" placeholder="Usuario">
                    <br>                
                    <input id="contrasena" type="password" v-model="user.password" placeholder="Contraseña">
                    <br>                
                    <input id="nombre" type="text" v-model="user.nom_territorio" placeholder="Nombre del territorio">
                    <br>                               
                    <button id="btnregistro" type="submit">Registrarse</button>
                    <button id="btnlogin" v-on:Click="loadLogin">Volver al inicio</button> 
                </form>                 
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                cod_territorio: "",
                username: "",
                password: "",
                nom_territorio: ""                
                }
            }
        },
    methods: {
        processSignUp:function(){
            axios.post(
                "https://mision-tic-vacunas-be.herokuapp.com/territorio/", 
                this.user,  
                {headers: {}}
            )
             .then((result) => {
                 let dataSignUp = {
                     username: this.user.username,
                     token_access: result.data.access,
                     token_refresh: result.data.refresh,
                 }                    
                 this.$emit('completedSignUp', dataSignUp)
                 alert("Registro realizado correctamente."); 
                 document.getElementById("usuario").innerHTML = " ";
             })
             .catch((error) => {
                 console.log(error)
                 alert("ERROR: Fallo el registro.");  
             });
        },
        loadLogin: function(){
            this.$router.push({name:"Login"});
        }
    }
}
</script>


<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;               
    }

    .container_signUp_user {
        /*border: 3px solid  #283747;*/
        position:relative;
        border-radius: 10px;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;         
        text-align:center;        
        top:40px;        
        
    }

    .signUp_user h2{
        color: #283747;
        margin-top: 12px;
    }

    .signUp_user form{
        width: 120%;        
    } 

    .signUp_user input{
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

    .signUp_user button{
      position :relative;
      top: 10px;
      left:50px;
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
      left:-10px;
    }

    .signUp_user button:hover{
      background-color: #008CBA;
      color: white;
    }

    div .container_signUp_user .cont{
        position: relative;
        display: inline-block;
        text-align: left;
        width:125%;
        left:-45px;
    }

    div .container_signUp_user .cont #imagen{
        position:relative;
        left: 175px;
        top :-30px;
        height : 125%;     
        width: 600px;
        opacity:0.2;   
    
    }

    .signUp_user .camposRegistro{
        position: absolute;
        top: 40%;
        left: 50%;
        height : 30%;
        transform: translate(-60%, -50%);
    }

    #btnlogin{
        height:40px;
        width: 165px;
        font-size: 13px;
        text-align: center;
        left:-10px;        
        top : -10px;
    }

    #btnregistro{
        top:-5px;    
    }

</style>