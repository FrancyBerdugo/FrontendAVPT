<template>
    <div id="cabecera">
        <img id="logoMintic" src="img/logo.png" alt="logo">
        <img id="logoMaletin" src="img/maletin.png" alt="logo">
    </div>
    <div id="divtitulo">
        <h1>Nuestra Vacuna Colombia - Territorios</h1>
    </div>

    <form>
        <div class="field">               
            <label for="territorio">Territorio</label>
            <input type="text"  id="territorio" name="territorio"><br>
        </div>
        <div class="field"> 
            <label for="territorio">Codigo Territorio</label>
            <select name="territorio">
                <option value=""></option>                    
            </select>
        </div>   
        <div class="field">                             
            <label for="laboratorio">Laboratorio</label>
            <input type="text"  id="laboratorio" name="laboratorio"><br>           
        </div>
         
        <div class="field"> 
            <label for="resolucion">Numero Resolucion</label>
            <input type="text"  id="resolucion" name="resolucion"><br>           
        </div>

        <div class="field">            
            <label for="cantidad">Cantidad Vacunas</label>
            <input type="number"  id="cantidad" name="cantidad"><br>
        </div>

        <div class="submit">    
            <button>Guardar</button>
        </div>
    </form>
</template>
<style>
    #logoMintic{
        height: 100px;
        width: 600px;
    }

    #logoMaletin{
        height: 90px;
        width: 120px;        
        align-items: center;
        padding: 0px 220px;              
    }

    #cabecera{
        height: 90px;
        width: 100%;  
        float: inline-start;            
    }

    #divtitulo{
        display: block;
        height: 100px;
        float: inline-start; 
    }

    h1{
        font-size: 400%;
        text-align:center; 
    }

    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 1rem;
        
    }
    .redondeadonorelieve {
        border-radius: 5px;
        border: 1px solid rgb(8, 8, 8);                      
    }          

    .field{
        display: flex;
        flex-direction:column;

        width: 28rem;
        margin: 0.5rem 2;
    }

    .field label{
        font-size: 1.1rem;
        margin-bottom: 0.1;
        color: rgb(14, 13, 13);
    }

    .field input{
        font-size: 1.1em; 
        width: 60%;
        height: 2.2rem;
        padding-left: 2.5rem;
        border: 2px solid;
        border-radius: 5px;
    }

    .field select{
        font-size: 1.1rem;
        width: 18rem;
        height: 2.6rem;
        padding-left: 2.5rem;
        border: 2px solid;
        border-radius: 5px;
    }
   
    .submit{
        display: flex;
        justify-content: center;

        width: 100%;
        margin-top: 1rem;
        margin-right: auto;
        margin-left: auto;
    }

    .submit button{
        font-size: 1.2rem;
        padding: 0.45rem 2.0rem;
        border: 2px solid;
        border-radius: 5px;
        position: relative;
        top: -70px;
        left : 120px;
    }
     
</style>