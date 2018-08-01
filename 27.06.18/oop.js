// user

    var user = {
        user: "admin",
        password: "admin",
        year: 2000,

        sad: function(){
            alert("Password incorect!!!");
        }

    };

console.log(user);
alert(user.user);
user.sad();



var user = {
    login: "user",
    about: function(){
        console.log("I am user!");
        console.log("My login is " + this.login); // user.login - > this.login
    }
};

user.about();