var setSomePropertiesOn = function(object) {
    object.x = 7;
    object['y'] = 8;
    object.onePlus = function(num) {
        return num + 1;
    };
};
