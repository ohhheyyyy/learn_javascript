var hello = function(name) {
    if (typeof(name) !== "string") {
        return "Hello!";
    } else {
        return "Hello, " + name + "!";
    }
};
