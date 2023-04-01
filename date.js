module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {
    
    const today = new Date();

    const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

function getDay() {
    
    const today = new Date();

    const options = {
    weekday: "long",
    }

    let day = today.toLocaleDateString("en-US", options);
    return day;
}
