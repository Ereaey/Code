function Cloud(id, name)
{
	this.id = id;
	this.name = name;
	this.users = [];
	this.folders = [];
}

Cloud.prototype.addUser = function(user)
{
	this.users.push(user);
}

Cloud.prototype.addFolder = function(folder)
{
	this.folders.push(folder);
}

Cloud.prototype.deleteFolder = function(folder)
{

}