module.exports = (app)=>{
    const data = require('../controller/controller')

    app.post('/create', data.create)
    app.get('/get', data.findAll)
    app.get('/getOne/:id', data.findOne)
    app.put('/update/:id', data.update)
    app.delete('/delete/:id', data.delete)

}