function user(id, name)
{
	this.id = id;
	this.name = name;
}

user.prototype.getName = function()
{
	return this.name;
}