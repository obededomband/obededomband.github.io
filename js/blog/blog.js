var Post = function(id, title, date, body){
    this.id = id;
    this.title = title;
    this.date = date;
    this.body = body;
    
}
Post.prototype.display = function(element){
    var $mainElement = $("<div></div>")
        .addClass("post");
    var $title = $("<a href='/pages/post.html?id=" + this.id + "'><h2></h2></a>")
        .text(this.title);
    var $date = $("<br><i></i></br><br>")
        .text(this.date);
    var $body = $("<div></div>")
        .html(this.body);
    
    $title.appendTo($mainElement);
    $date.appendTo($mainElement);
    $body.appendTo($mainElement);

    $mainElement.appendTo($(element));
};

var Blog = function(){
    this.posts = []; 
};
Blog.prototype.getAmount = function(i){
    if(i !== undefined){
        return this.posts.length;
    }
    else{
        return this.posts.length-i;
    }
};
Blog.prototype.newPost = function(title,date,body){
    this.posts.push(new Post(this.getAmount(0),title,date,body));
};
Blog.prototype.getPost = function(i){
    return this.posts[i];
    
};
Blog.prototype.deletePost = function(){
    this.posts.splice(i, 1);
};
Blog.prototype.updatePost = function(index, title, date, body){
    var post = this.getPost(index);
    post.title = title;
    post.date = date;
    post.body = body;
    
    this.posts[index]=post;
};
Blog.prototype.display = function(element){
    for(var i = this.posts.length-1; i >= 0; i--){
        this.posts[i].display(element);
    }
};
Blog.prototype.display_single = function(i, element){
    this.posts[i].display(element);
}