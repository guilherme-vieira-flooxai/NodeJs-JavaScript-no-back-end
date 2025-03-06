module.exports = {

    user:(app, req, res)=>{

        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O e-mail está invalido.').notEmpty().isEmail();

        let error = req.validationErrors();

        if(errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;
        }

    }

}