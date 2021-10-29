<template>

    <div class="login-form">
    <h2>Asignación de Vacunas</h2>
        <form>                 
            <label class="label" for="territorio">Territorio</label>
            <input type="text"  class="textbox" id="territorio"  name="territorio"><br>

            <label class="label" for="territorio">Codigo Territorio</label>
            <input type="number" class="textbox" id="cod_territorio" v-model="asigna.territorio_cod_territorio" name="cod_territorio"><br>
           
            <label class="label" for="laboratorio">Laboratorio</label>
            <input type="text" class="textbox" id="laboratorio"  v-model="asigna.laboratorio_vacuna" name="laboratorio"><br>           

            <label class="label" for="resolucion">Numero Resolucion</label>
            <input type="text" class="textbox" id="resolucion" v-model="asigna.num_resolucion" name="resolucion"><br>           

            <label class="label" for="cantidad">Cantidad Vacunas</label>
            <input type="number" class="textbox" id="cantidad"  v-model="asigna.cantidad" name="cantidad"><br>

            <button id="guardar" v-on:Click="guardaAsignacion">Guardar</button>       
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "asignacion",

    data: function(){
        return {
            asigna: {
               territorio_cod_territorio : "",
               asignacion_data: {
                    num_resolucion    : 0,
                    fecha_resolucion   : (new Date()).toJSON().toString(), 
                    anio            : 2021, 
                    laboratorio_vacuna: "", 
                    cantidad          : 0,
                    uso_vacuna        : "jajaja",
                    fecha_corte       : (new Date()).toJSON().toString(),
                    cod_territorio : 11
                }
            }
        }
    },
    methods: {               
            guardaAsignacion:function(){
                debugger;                
                let token = localStorage.getItem("token_access");                
            axios.post(
                'https://mision-tic-vacunas-be.herokuapp.com/asignacion/', 
                this.asigna,  
                {headers: {'Authorization:': `Bearer${token}`}}
            )
             .then((result) => {
                 let dataSignUp = {
                     username: this.user.username,
                     token_access: result.data.access,
                     token_refresh: result.data.refresh,
                 }              
                 
                 this.$emit('completedSignUp', dataSignUp)
                 alert("Asignacion realizada correctamente."); 
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
    .login-form{
        text-align:"center";        
    }

.label {
    display: block;
    padding-left: 15px;
    text-indent: -15px;
    margin-top: 10px;
}
 
.textbox {
    width: 213px;
    height: 35px;
    padding: 0;
    margin:0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
}  
#guardar{
    position:relative;
    top:10px;
}
    .combo{
        width:200px;
        height:30px;
    }

</style>