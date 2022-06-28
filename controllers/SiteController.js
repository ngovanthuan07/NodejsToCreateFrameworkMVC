const path = require("path");
const ejs = require('ejs');
const header = require('../views/partials/header')
const footer = require('../views/partials/footer');


class SiteController {

    index(req, res, fs) {
        fs.readFile('./views/home.ejs', 'utf-8', function(err, data) {
            if (err) {res.end("Error");} // Error

            res.end(ejs.render(data, { title: "Hello", header, footer}));
        });
    }

    show(req, res, fs) {
        fs.readFile('./views/show.ejs', 'utf-8', function(err, data) {
            if (err) {res.end("Error");}  // Error

            res.end(ejs.render(data, { title: "Hello", header, footer}));
        });
    }
}

module.exports = new SiteController;