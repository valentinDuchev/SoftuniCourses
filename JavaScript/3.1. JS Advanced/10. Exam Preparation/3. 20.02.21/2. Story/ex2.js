class Story {
    constructor (title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    };

    get likes () {
        if (this._likes.length == 0) {
           // return ('yes')
            return (`${this.title} has 0 likes`)
        } else if (this._likes.length == 1) {
            return (`${this._likes[0]} likes this story!`)
        } else if (this._likes.length > 1) {
            return (`${this._likes[0]} and ${this._likes.length -1 } others like this story!`)
        }
    }

    like (username) {

        if (this._likes.includes(username)) {
            throw new Error ("You can't like the same story twice!")
        } else if (this.creator == username) {
            throw new Error ("You can't like your own story!")
        } else {
            return (`${username} liked ${this.title}!`)
        }


    }

    dislike (username) {


    }

    comment (username, content, id) {


    }

    toString (sortingType) {


    }
}
let art = new Story("My Story", "Anny");
console.log(art.like("John"));
(art.likes);
art.dislike("John");
//console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
