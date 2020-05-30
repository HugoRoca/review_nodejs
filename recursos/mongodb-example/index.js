const mogoose = require('mongoose')
const connection_string = 'mongodb+srv://hugoroca:<1234>@cluster0-xu1hg.mongodb.net/db_test?retryWrites=true&w=majority'

mogoose.connect(connection_string, { useNewUrlParser: true })

const Cat = mogoose.model('Cat', {
    name: String
})

const kitty = new Cat({ name: 'Galfield' })
kitty.save().then(() => {
    console.log('Cat has been saved')
    Cat.find().then(console.log)
})