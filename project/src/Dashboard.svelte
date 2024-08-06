<script>
    let x = 200;
    let y = 200;
</script>

<div class="container">

    <div class="header">
        <div class="red-border">
            <h3></h3>
        </div>
    
    </div>

   
            <div class="Project-assign-to">
                <h3>Project assign to</h3>
            </div>
        


            <div class="finished-project">
                <h1>Finished project</h1>
            </div>

            <div class = "On-going-project">
                <h1>On going project</h1>
            </div>


            <div class = "On-waiting-list-project">
                <h1>On waiting list project</h1>
            </div>

        </div>
        <button class="button">
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L3.5 10.5H10v11h4v-11h6.5L12 2z"/>
            </svg>
          </button>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .header img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #b5655e;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        width: 100%;
    }

    .grid > div {
        background-color: #f28c82;
        border-radius: 10px;
        padding: 10px;
    }
    .red-border {
        padding: 10px;
        border-radius: 10%;
        border: 15px solid red;
        background-color: white;
        height: 400px;
        width: 400px; /* Adjust the height as needed */
        position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 0px; /* ปรับค่าตามต้องการ */
        left: 100px; /* ปรับค่าตามต้องการ */
    }

    .Project-assign-to{
        padding: 10px;
        border-radius: 10%;
        background-color: #f28c82;
        height: 400px;
        width: 850px; /* Adjust the height as needed */
        position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 0px; /* ปรับค่าตามต้องการ */
        left: 550px; /* ปรับค่าตามต้องการ */
    }

    
    .finished-project {
        padding: 10px;
        /* border-radius: 10%; */
        background-color: #f28c82;
        height: 400px;
        width: 400px; /* Adjust the height as needed */
        position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 500px; /* ปรับค่าตามต้องการ */
        left: 100px; /* ปรับค่าตามต้องการ */
    }

    .On-going-project
    {
        padding: 10px;
        /* border-radius: 10%; */
        background-color: #f28c82;
        height: 400px;
        width: 400px; /* Adjust the height as needed */
        position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 500px; /* ปรับค่าตามต้องการ */
        left: 550px; /* ปรับค่าตามต้องการ */
    }
    .On-waiting-list-project
    {
        padding: 10px;
        /* border-radius: 10%; */
        background-color: #f28c82;
        height: 400px;
        width: 400px; /* Adjust the height as needed */
        position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 500px; /* ปรับค่าตามต้องการ */
        left: 1000px; /* ปรับค่าตามต้องการ */
    }
    .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #9B5757;
    border: none;
    cursor: pointer;
    position: absolute; /* ใช้ position: absolute เพื่อจัดตำแหน่ง */
        top: 950px; /* ปรับค่าตามต้องการ */
        left: 20px; 
  }  
   .arrow-icon { 
    width: 30px;
    height: 30px;
    transform: rotate(-90deg); /* หมุนลูกศร 180 องศา */
    fill: black;
    position: absolute; 
        
        
  } 
    
</style>
