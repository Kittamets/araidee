<script>
    // You can add any necessary script here
</script>

<div class="container">
    <div class="header">
        <div class="red-border"></div>
    </div>
    <div class="grid">
        <div class="large">
            <h2>Project assign to</h2>
        </div>
        <div>
            <h3>Finished project</h3>
        </div>
        <div>
            <h3>On going project</h3>
        </div>
        <div>
            <h3>On waiting list project</h3>
            
        </div>
        <div class="finished-project">
            <div>
                <h3>Finished project</h3>
            </div>
    </div>
    
    </div>
</div>

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

    .large {
        grid-column: span 2;
        height: 150px;
    }

    .red-border {
        border: 5px solid red;
        background-color: white;
    }
    .finished-project {
        height: 50px; /* Adjust the height as needed */
    }
</style>
