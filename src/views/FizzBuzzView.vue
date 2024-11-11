<template>
    <div>
        <h1 style="text-decoration: underline;">FizzBuzz</h1>
        <p>Skriv ett konsollprogram i C# som skriver ut alla tal från 1 till 100 på varsin rad.</p>
        <p>Om talet är delbart på 3, skriv ut ”Fizz” istället för talet.
            3 och 6 ska exempelvis ersättas med Fizz.</p>
        <p>Om talet är delbart med 5, skriv ut ”Buzz” istället för talet.</p>
        <p>5 och 10 ska exempelvis ersättas med Buzz
            Om talet är delbart på både 3 och 5, skriv ut FizzBuzz istället.</p>
        <p>15 och 30 ska exempelvis ersättas med FizzBuzz.</p>
    </div>

    <div>
        <h3 class="code-screenshots">Code Screenshots</h3>
        <img src="../assets/FizzBuzz/FizzBuzz1.png" alt="FizzBuzz1" class="small-image">
    </div>
    <div>
        <h2 style="text-decoration: underline;">Coments</h2>
        <p>
            For this project we used a modulus operator (%) that calculates the remainder of division.
        </p>
    </div>
    <div>
        <h4 class="code-screenshots">Project Outcome / Database</h4>
        <img src="../assets/FizzBuzz/FizzBuzz2.png" alt="FizzBuzz2" class="small-image"><br>
        <img src="../assets/FizzBuzz/FizzBuzz3.png" alt="FizzBuzz3" class="small-image">
    </div>

</template>

<script>
export default {
    name: 'FizzBuzz'
};
</script>