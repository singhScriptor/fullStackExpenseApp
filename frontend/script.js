document.addEventListener('DOMContentLoaded',reload)
const form = document.getElementById('form')
const userlist = document.getElementById('userlist')

form.addEventListener('submit', addDetails)

async function addDetails(e) {
    e.preventDefault()
    try {
        let details = {
            expense: document.getElementById('expense').value,
            description: document.getElementById('description').value,
            option: document.getElementById('options').value
        }
        if (details) {
            let res = await axios.post('http://localhost:3000/expenses', details)
            console.log(res.data)
            await displayDetails()
        }

    }
    catch (err) {
        console.log(err.message)
    }

}

async function displayDetails() {
    try {
        let result = await axios.get('http://localhost:3000/expenses')
        const expenses = result.data

        expenses.forEach(i => {
            let id=i.id
            let list = document.createElement('li')
            list.id = 'list'
            list.innerHTML = `Expense: ${i.expense}, description: ${i.description}, category: ${i.option}`

            const editBtn = document.createElement('button')
            editBtn.id = 'editBtn'
            editBtn.textContent = 'edit'
            list.appendChild(editBtn)

            const delBtn = document.createElement('button')
            delBtn.id = 'delBtn'
            delBtn.textContent = 'delete'
            list.appendChild(delBtn)

            userlist.appendChild(list)

            editBtn.addEventListener('click', async ()=>{
                await editFunction(id)
            })

            delBtn.addEventListener('click', async ()=>{
                await deleteFunction(id)
            })
        })

    }
    catch (err) {
        console.log(err.message)
    }
}

async function editFunction(id){
    try{
        let updated = {
            expense : document.getElementById('expense').value,
            description:document.getElementById('description').value,
            option:document.getElementById('options').value
        }
        let res = await axios.put(`http://localhost:3000/expenses/${id}`,updated)
        console.log(res.data)
    }
    catch(err){
        console.log(err.message)
    }
}

async function deleteFunction(id) {
    try{
        let res = await axios.delete(`http://localhost:3000/expenses/${id}`)
        console.log(`successfully deleted with id: ${id} `)
    }
    catch(err){
        console.log(err.message)
    }
}

async  function reload(){
    try{
        await displayDetails()
    }
    catch(err){
        console.log(err.message)
    }
}