class Story{
    constructor(title, creator)
    {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes =[]
    }
 
    get likes()
    {
        if(this._likes.length == 0)
        {
            return `${this.title} has 0 likes`
        }
        else if(this._likes.length == 1)
        {
            return `${this._likes[0]} likes this story!`
        }
        else
        {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
 
    like(username)
    {
        if(this._likes.includes(username))
        {
            throw new Error(`You can't like the same story twice!`)
        }
        else if(this.creator == username)
        {
            throw new Error(`You can't like your own story!`)
        }
        else
        {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }
 
    dislike(username)
    {
        if(this._likes.includes(username) == false)
        {
            throw new Error(`You can't dislike this story!`)
        }
        else
        {
            let targetIndex = this._likes.indexOf(username)
            this._likes.splice(targetIndex,1)
            return `${username} disliked ${this.title}`
        }
    }
    comment (username, content, id)
    {
        let comment = {
            Id: id,
            Username: username,
            Content: content,
            Replies: [],
        };
        let commentWithId = this._comments.find(c => c.Id === id);
 
        if (commentWithId) {
            let replyID = Number(commentWithId.Id + '.' + (commentWithId.Replies.length + 1));
            let reply = {
                Id: replyID,
                Username: username,
                Content: content,
            };
 
            commentWithId.Replies.push(reply);
 
            return 'You replied successfully';
        }
 
        comment.Id = this._comments.length + 1;
        this._comments.push(comment);
 
        return `${username} commented on ${this.title}`;
    }
    toString(sortingType)
    {
        switch(sortingType)
        {
            case 'asc':{
                let sorted = this._comments.sort((a,b) => a.Id - b.Id)
                let result = []
                result.push(`Title: ${this.title}`)   
                result.push(`Creator: ${this.creator}`) 
                result.push(`Likes: ${this._likes.length}`)
                result.push(`Comments:`)
                if(sorted.length > 0)
                {
                    for(let data of sorted)
                    {
                        if(sorted.length > 0)
                        {
                            result.push(`-- ${data.Id}. ${data.Username}: ${data.Content}`)
                            if(data.Replies.length > 0)
                            {
                                let sortedReplies = data.Replies.sort((a,b) => a.Id - b.Id )
                                for(let reply of sortedReplies)
                                {
                                    result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`)
                                }
                            }
                        }
                    }
                }
                return result.join('\n')
            }
 
            case 'desc':{
                let sorted = this._comments.sort((a,b) => b.Id - a.Id)
                let result = []
                result.push(`Title: ${this.title}`)   
                result.push(`Creator: ${this.creator}`) 
                result.push(`Likes: ${this._likes.length}`)
                result.push(`Comments:`)
 
                if(sorted.length > 0)
                {
                    for(let data of sorted)
                    {
                        result.push(`-- ${data.Id}. ${data.Username}: ${data.Content}`)
                        if(data.Replies.length > 0)
                        {
                            let sortedReplies = data.Replies.sort((a,b) => b.Id - a.Id )
                            for(let reply of sortedReplies)
                            {
                                result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`)
                            }
                        }
                    }
                    
                    }
                return result.join('\n')
            }
            
            case 'username':{
                let sorted = this._comments.sort((a,b) => a.Username.localeCompare(b.Username))
                let result = []
                result.push(`Title: ${this.title}`)   
                result.push(`Creator: ${this.creator}`) 
                result.push(`Likes: ${this._likes.length}`)
                result.push(`Comments:`)                       
                if(sorted.length > 0)
                {
                    for(let data of sorted)
                    {
                            result.push(`-- ${data.Id}. ${data.Username}: ${data.Content}`)
                            if(data.Replies.length > 0)
                            {
                                let sortedReplies = data.Replies.sort((a,b) => a.Username.localeCompare(b.Username))
                                for(let reply of sortedReplies)
                                {
                                    result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`)
                                }
                            }
                    }
                }
                return result.join('\n')
            }
        }
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
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