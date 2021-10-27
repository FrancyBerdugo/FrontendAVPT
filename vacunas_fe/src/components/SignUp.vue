<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            <form v-on:submit.prevent="processSignUp" >
                <input type="number" v-model="user.cod_territorio" placeholder="Código de territorio">
                <br>
                <input type="text" v-model="user.username" placeholder="Usuario">
                <br>                
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>                
                <input type="text" v-model="user.nom_territorio" placeholder="Nombre del territorio">
                <br>                               
                <button type="submit">Registrarse</button>
            </form>
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
                "https://mision-tic-bank-be.herokuapp.com/territorio/", 
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
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo el registro.");  
                });
        }
    }
}
</script>


<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 300%;
        width: 300%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        /*border: 3px solid  #283747;*/
        border-radius: 10px;
        width: 800%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
    }

    .signUp_user h2{
        color: #283747;
        margin-top: 12px;
    }

    .signUp_user form{
        width: 120%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
       
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
    }

    .signUp_user button:hover{
      background-color: #008CBA;
      color: white;
    }

</style>