function folder(id, name)
{
	this.id = id;
	this.name = name;
	this.files = [];
}

folder.prototype.addFile = function(file)
{
	this.files.push(file);
}