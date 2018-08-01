var fridge = {
    polita1: {
        legume: onion,
        fructe: apple,
        bauturi: milk,
    },
    polita2: {
        legume: tomatoes,
        fructe: berry,
        bauturi: whater,
    },
    polita3: {
        legume: cucumber,
        fructe: cherry,
        bauturi: cola,
    },
    about: function(){
        alert( "This is: " + this.polita1 + " here we have " + this.polita1 );
    };
};


alert( frigider.polita1.legume );