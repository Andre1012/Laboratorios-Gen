class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        // Check if the user already exists in the users array
        if (this.users.some(existingUser => existingUser.id === user.id)) {
             throw new Error(`User with id ${user.id} already exists.`);
         }
        this.users.push(user);
    }

    remove(user){
        this.users = this.users.filter(function(ele){
            return ele != user; 
        });
    }

    findByEmail(email){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return this.users[i];
        } 
    }


}


module.exports = UserController;