module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        } 
        req.flash('error_msg', 'You must be logged in to view page');
        res.redirect('/users/login');
    } 
}