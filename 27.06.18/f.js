var microsoft_company = {
    name: "Microsoft Corp.",
    founded: 1975,
    owner: {
        name: "Bill Gates",
        birth: 1955,
        country: "USA",
    };
    about: function(){
        alert( "This is: " + this.name + " " + this.owner.name );
    };
};

alert( microsoft_company.owner.name );