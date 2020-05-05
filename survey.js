const readline = require('readline');
let profile = {}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  profile.name = answer
  console.log(`Name: ${answer} :`)

  rl.question('What activity do you enjoy the most? ', (answer) => {
    profile.activity = answer
    console.log(`Activity: ${answer} :`)
    
    rl.question(`What is your favourite music genre while doing that? `, (answer) => {
        profile.music = answer
        console.log(`Music: ${answer} :`)

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (answer) => {
        profile.meal = answer
        console.log(`Meal: ${answer} :`)

        rl.question(`Which meal is your favourite thing to eat during that meal? `, (answer) => {
            profile.mealItem = answer
            console.log(`Meal Item: ${answer} :`)

            rl.question(`Which sport is your absolute favourite? `, (answer) => {
                profile.sport = answer
                console.log(`Sport: ${answer} :`)

                rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
                    profile.superpower = answer
                    console.log(`Superpower: ${answer} :`)
                    console.log( `
                    ${profile.name} likes to do ${profile.activity} the most. While ${profile.activity}, ${profile.name} 
                    listens to ${profile.music}. ${profile.name} also likes to eat ${profile.meal}, 
                    and ${profile.mealItem} is the best part. ${profile.name}  also likes to play ${profile.sport} 
                    and has ${profile.superpower} as a superpower.`)
                    rl.close()
                })
              })
            })
           })
         })
       })
     });
  

