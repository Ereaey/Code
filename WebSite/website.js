function WebSite(title)
{
	this.allLibs = [];
	this.allLibs.push(["console", '', '<script src="http://lib.triton.fr/js/console.js"></script>']);
	this.allLibs.push(["jquery", '', '<script src="http://lib.triton.fr/js/jquery.js"></script>']);
	this.allLibs.push(["boostrap", '<link rel="stylesheet" href="http://lib.triton.fr/css/bootstrap.css" />\n<tab><link rel="stylesheet" href="http://lib.triton.fr/css/bootstrap-theme.css" />', '<script src="http://lib.triton.fr/js/bootstrap.js"></script>']);
	this.allLibs.push(["favicon", '<link rel="icon" type="image/png" href="icon.png" />', '']);
	this.allLibs.push(["font-awesome", '<link rel="stylesheet" href="http://lib.triton.fr/css/font-awesome.css" />', '']);
	this.allLibs.push(["upload", '', '<script src="http://lib.triton.fr/js/upload.js"></script>']);
	this.allLibs.push(["socket.io", '', '<script src="http://lib.triton.fr/js/socket.io.js"></script>']);
	this.allLibs.push(["box", '<link rel="stylesheet" href="http://lib.triton.fr/css/box.css" />', '<script src="http://lib.triton.fr/js/box.js"></script>']);


	this.title = title;
	this.libs = [];
}

WebSite.prototype.addLib = function(name)
{
	for	(var index = 0; index < this.allLibs.length; index++)
	{
        if (this.allLibs[index][0] == name)
            this.libs.push(this.allLibs[index]);
    }
}

WebSite.prototype.removeLib = function(name)
{
	for	(var index = 0; index < this.libs.length; index++)
	{
        if (this.libs[index][0] == name)
        	this.libs.splice(index, 1);
    }
}

WebSite.prototype.getLibs = function()
{
	var names = '';
	for	(var index = 0; index < this.allLibs.length; index++)
	{
        names += (this.allLibs[index][0]);
        if (index != this.allLibs.length - 1)
        	names += '\n';
    }

    return names;
}

function htmlEntities(str) {
    //return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

WebSite.prototype.getSource = function()
{
	var head = '';
	var body = '';
	for	(var index = 0; index < this.libs.length; index++)
	{
        head += ('<tab>' + this.libs[index][1] + '\n');
        body += ('<tab>' + this.libs[index][2] + '\n');
    }
	var source = '<!doctype html>\n<html lang="fr">\n<head>\n<tab><meta charset="utf-8" />\n<tab><title>' + this.title + '</title>\n' + head + '</head>\n<body>\n' + body + '</body>\n</html>';
	source = htmlEntities(source);
	source = source.replace(/&lt;tab&gt;/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
	return source;
}