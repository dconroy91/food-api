fetch("http://localhost:8088/food")
    .then(r => r.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

// dom food list
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {

        parsedFoods.forEach(food => {
            //Print foods to DOM
            document.querySelector(".foodList").innerHTML = `${parsedFoods}`
        })
    })