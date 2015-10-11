function Notification(title, content, type, position)//Type : Success, info, error, warning, Progression
{
	this.title = title;
	this.content = content;
	this.type = type;
	this.timeout;
	this.position = position;
	this.div;
}

Notification.prototype.open = function()
{

	if (this.timeout > 0)
		setTimeout(close(), this.timeout);
}

Notification.prototype.close = function()
{

}

Notification.prototype.setProgression = function(progression)
{

}

Notification.prototype.setTitle = function(title)
{

}

Notification.prototype.setContent = function(content)
{

}

