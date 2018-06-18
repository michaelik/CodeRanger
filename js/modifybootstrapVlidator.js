$(document).ready(function() {
    $('#defaultForm')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The username is required and can\'t be empty'
                        },
                     stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The username can only consist of alphabetical, number,  dot and underscore'
                        }
                    }
                },
            password: {
                  validators: {
                      notEmpty: {
                          message: 'The password is required and can\'t be empty'
                        },
                        digits: {
                              message: 'The value can contain only digits'
                            },
                      stringLength: {
                          min: 6,
                          max: 20,
                          message: 'The password must be more than 6 and less than 12 digits long'
                        }
                    }
                }
            }
        })
});
