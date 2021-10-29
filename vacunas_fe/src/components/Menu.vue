<template>
    <div class="frmmenu">
         <div class="contenedor">
            <img id="imagen" src="../assets/dial.png">    
            <h1 id="titulo">Menú principal</h1>                    
            <button class="botones" v-on:Click="loadAsignacion"> Asignacion </button>                
            <button class="botones" v-on:Click="loadConsulta"> Consulta asignaciones </button>
        </div>      
    </div>

</template>

<script>
    export default {
        name: "Menu",

        data: function(){
            return {
                username: localStorage.getItem('username') || "none"
            }
        },
        methods: {       
            loadAsignacion: function(){
                this.$router.push({name:"asignacion"});
            },
            loadConsulta: function(){
                this.$router.push({name:"Menu"});
            }
        }
    }
</script>

<style>
    div .frmmenu{
        position: relative;
        text-align: center;
        width: 100%;                
    }
    div .contenedor{
        position: relative;
        display: inline-block;
        width: 1280px;
    }

    div .contenedor #imagen{
        opacity: 0.6;
    }   

    .botones{
        position:relative;
        top:-250px;        
        width: 1000px;
    }

    #titulo{
        position:relative;
        top:-250px;        
        font-size: 50px;
    }


</style>