module.exports = app => {
    app.get('/api/project/getprojects', (req, res) => {
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/getapartments', (req, res) => {
        var data = require('../json/apartment.json');
        res.json(data);
    })
}