const fs = require ('fs')
const path = require ('path')

const parseCSV = (fileName) => {
    let csvData=''
    let array;
    try{
        csvData =fs.readFileSync(path.join(__dirname, fileName),{encoding:'utf8'})
        array = csvData.split("$").map(function (line) {
            return line.split(",")
        });
        return array

    }catch (e){console.error(e) }
}

const mapStudents = (array) => {

    let houses = [
        {
            "name": "Hawking",
            "students": [],
            "positive": 0,
            "negative": 0,
            "total": 0,
        },
        {
            "name": "Mee",
            "students": [],
            "positive": 0,
            "negative": 0,
            "total": 0,
        },
        {
            "name": "Orwell",
            "students": [],
            "positive": 0,
            "negative": 0,
            "total": 0,
        },
        {
            "name": "Pankhurst",
            "students": [],
            "positive": 0,
            "negative": 0,
            "total": 0,
        },
    ]

    let house = 0
    let positiveCount = 0
    let negativeCount = 0
    let totalCount = 0

    for(let i=1; i<array.length; i++) {

        if(array[i][3] === "") {
            i+=2
            houses[house]["positive"] = positiveCount
            houses[house]["negative"] = negativeCount
            houses[house]["total"] = totalCount
            positiveCount = 0
            negativeCount = 0
            totalCount = 0
            house += 1
            continue
        }
    
        let student = {
            "name": "",
            "tutor": "",
            "form": "",
            "positive": 0,
            "negative": 0,
            "total": 0,
        }
    
        student["name"] = (array[i][2] + array[i][1]).replace("\"\"", " ").substring(1)
        student["tutor"] = array[i][3]
        student["form"] = array[i][5]
    
        let posCount = ""
        let negCount = ""
        let totCount = ""
        
        for(let j=0; j<array[i][7].length; j++) {   
            if(array[i][7][j] !== "[") {
                posCount += array[i][7][j]
            } else {
                break
            }
        }
        for(let j=0; j<array[i][8].length; j++) {   
            if(array[i][8][j] !== "[") {
                negCount += array[i][8][j]
            } else {
                break
            }
        }
        for(let j=0; j<array[i][9].length; j++) {   
            if(array[i][9][j] !== "[") {
                totCount += array[i][9][j]
            } else {
                break
            }
        }
    
    
        student["positive"] = parseInt(posCount)
        student["negative"] = parseInt(negCount)
        student["total"] = parseInt(totCount)

        positiveCount += parseInt(posCount)
        negativeCount += parseInt(negCount)
        totalCount += parseInt(totCount)

        houses[house]["students"].push(student)
    }

    return JSON.stringify(houses)
}

fs.writeFileSync(path.join(__dirname,"students.json"),mapStudents(parseCSV("House_Points_2023.csv")),{encoding:'utf8'},(error)=>{
    if (error) { 
        throw error 
    } else
    {
        return console.log('File saves successfully')
    }
})