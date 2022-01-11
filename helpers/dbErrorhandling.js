"use strict"

const uniqueMessage = error => {
    let output;
    try {
        let fieldName = error.message.split(".$")[1]
        field = field.split("dub key")[0]
        field = field.substsring(0, field.lastIndexOf("_"))
        req.flash("erros", [{
            message: "An account with this" + field + "already exists"
        }])
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists"

    } catch (err) {
        output = "already exists"
    }
    return output
}

exports.errorHandler = error => {
    let message = ""
    if (error.code) {
        switch (error.code) {
            case 110000:
            case 11001:
                message = uniqueMessage(error)
                break;
            default:
                message = "Something went wrong"
        }
    } else {
        for (let errorName in error.errorors) {
            if (error.errorors[errorName].message) {
                message = error.errorors[errorName].message
            }
        }
    }
    return message
}