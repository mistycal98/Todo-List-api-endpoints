const checkRequestBody = (req, res, next) => {
    let validationArray = ["task"];
    let result = validationArray.every(element => {
        return req.body[element] && req.body[element].trim().length;
    });
    if (!result) {
        return res.status(400).json({
            status: "Unsucessfull",
            message: "Inavlid Body"
        });
    } else {
        next();
    }
}

const checkUpdateRequest = (req, res, next) => {
    let validationArray = ["task", "completed"];
    let result = validationArray.every(item => {
        return req.body[item] && req.body[item].trim().length;
    });
    if (!result) {
        return res.status(400).json({
            status: "Unsucessfull",
            message: "Invalid update request"
        });
    } else {
        next();
    }
}

module.exports = {
    checkRequestBody,
    checkUpdateRequest
}