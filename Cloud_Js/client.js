function Client(ip)
{
	this.ip = ip;
	this.socket;
	this.key = 0;
}

Client.prototype.connectServer = function()
{
	this.socket = new WebSocket("ws://" + this.ip);
	
  this.socket.onopen = function(evt)
  { 
    console1("Connection open ..."); 
  }; 
  this.socket.onmessage = function(evt)
  {
    console1("Received Message: " + evt.data);
    treatment(evt.data);
  }; 
  this.socket.onclose = function(evt) 
  { 
    console1("Connection closed."); 
  };
  this.socket.onerror = function(evt) 
  { 
    console1("WebSocket error : " + e.data) 
  };
}

Client.prototype.sendMessage = function(type, data)
{
	var msg =
	{
		type : type,
		data : data,
		key : this.key,
		date : Date.now()
	};

  console2(JSON.stringify(msg));
	this.socket.send(JSON.stringify(msg));
}

Client.prototype.treatment = function(data)
{
    var msg = JSON.parse(data);
    c.addLine("Message recu : "  + msg.type);
    var time = new Date(msg.date);
    var timeStr = time.toLocaleTimeString();
    
    switch(msg.type)
    {
      case "id":
        break;
      case "username":
        break;
      case "message":
        break;
      case "rejectusername":
        break;
      case "userlist":
        break;
    }
}