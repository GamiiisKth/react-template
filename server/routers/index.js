
module.exports = function(app, server){
    require('./public')(app);
    require('./health')(app);
};
