function Console(div, displayCommands, input_mode)
{
    this.div = $(div);
    this.div.css('font-family', "Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace");
    this.div.css('font-size', '12px');
    this.div.css('background-color', '#272822');
    this.div.css('color', 'white');
    
    if (input_mode == true)
    {
        this.div.append('<div style="overflow:auto; width:100%; height:calc(100% - 20px);"></div>');
        this.textarea = this.div.find('div:last');
        
        this.div.append('<div contenteditable class="console_command" style="white-space:nowrap; width:100%; height:20px; vertical-align: middle;"></div>');
        this.input = this.div.find('div:last');

        this.input.keydown($.proxy(this.onKeyPress, this));

        this.displayCommands = displayCommands;
        this.onCommandCallback;
    }
    else
    {
        this.div.append('<div style="overflow:auto; width:100%; height: 100%;"></div>');
    }

    $('html > head').append('<style>.console_command:focus{ outline: 0px solid transparent; } .console_command br {display: none;} .console_command *{white-space:nowrap; display: inline;}</style>');
    this.addStyle('command', '', 'content:"> "');
    this.addStyle('default', 'color: white;');
    this.filters = [];
    this.commands = [];
    this.mode = 0;
    this.command_index = 0;
}

Console.prototype.addStyle = function(name, css, beforeCss)
{
    $('html > head').append('<style>.console_' + name + '{' + css + '}.console_' + name + ':before{' + beforeCss + '}</style>');
}

Console.prototype.addLine = function(text, style)
{
	if (!this.textarea.is(':empty'))
		this.textarea.append('<br />');
	
	if (!style)
	{
    	for	(var index = 0; index < this.filters.length; index++)
    	{
            if (this.filters[index][0].test(text) === true)
                style = this.filters[index][1];
        }
	}

    this.textarea.append('<span class="console_' + style + '">' + text + '</span>');
	this.textarea.scrollTop(this.textarea[0].scrollHeight);
}

Console.prototype.clear = function()
{
    this.textarea.html('');
}

Console.prototype.infoCommand = function(regex)
{
    var result = this.commands[this.commands.length - 1].match(new RegExp(regex));
    return result;
}
Console.prototype.onCommand = function(callback)
{
    this.onCommandCallback = callback;
}

Console.prototype.addFilter = function(filter, style)
{
    this.filters.push([new RegExp(filter), style]);
}
Console.prototype.onKeyPress = function(e)
{
	if (e.which == 38)
    {
        if (this.mode == 1 && this.command_index > 0)
        {
            this.command_index -= 1;
        }
        else
        {
            this.command_index = this.commands.length - 1;
        }

	   this.input.html(this.commands[this.command_index]);
       this.mode = 1;
	}  
    else if (e.which == 40)
    {
        if (this.mode == 1 && this.command_index < (this.commands.length - 1))
        {
            this.command_index += 1;
        }
        else
        {
            this.command_index = 0;
        }

       this.input.html(this.commands[this.command_index]);
       this.mode = 1;
    }
    else if (e.which == 13)
    {
        this.command_index = 0;

    	var text = this.input.html();
    	this.input.html('');
    	
        this.commands.push(text);

    	if (this.displayCommands)
    		this.addLine(text, 'command');
    	
    	if (this.onCommandCallback)
    	{
    		this.onCommandCallback(text);
    	}
    }
    else
    {
        this.mode = 0;
    }
}