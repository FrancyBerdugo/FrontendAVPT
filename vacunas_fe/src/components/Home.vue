<template>
    <div class="greetings">
        <div class="contenedor">
            <img id="imagen" src="../assets/fondo1.png">        
        </div>
        <div class="centrado">
            <h1 class="welcome">¡Bienvenido  <span id="user"> {{username}} </span>!</h1>
        </div>
        <br>
        <div class="continuar">            
            <button  v-on:Click="loadMenu">Continuar</button>      
        </div>
        
    </div>
</template>


<script>

export default {
    name: "Home",

    data: function(){
        return {
            username: localStorage.getItem('username') || "none"
        }
    },
     methods: {       
        loadMenu: function(){
            this.$router.push({name:"Menu"});
        }
}}

</script>

<style>
    div .greetings{            
        /* position:absolute;*/
        text-align: center;  
        width:100%;
        height:100px;  
        left:4px;          
        /*border: 2px solid;*/
    }    

    div .greetings h1{
        font-size: 50px;
        color: #283747;
    }

    div .greetings span{
        color: crimson;
        font-weight: bold;
    }

    div .greetings .contenedor{
        position: relative;
        display: inline-block;
        text-align: left;
        width:85%;
        left:-45px;
    }

    div .greetings .contenedor #imagen{
        position:relative;
        left: 210px;
        height : 125%;     
        width: 600px;
        opacity:0.6;   
    }

    div .greetings .centrado{
         position: absolute;
         top: 75%;
         left: 50%;
         transform: translate(-50%, -50%);
    }       

    div .greetings .centrado #user{
        color:blue;
    }

    div .greetings button{
        position :relative;
        top: -450px;
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
  
    div .greetings button:hover{
        background-color: #008CBA;
        color: white;
    }

    .continuar{
        position : relative;
        top:300px;
    }
</style>
