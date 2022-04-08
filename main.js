var canvas = new fabric.Canvas('myCanvas');

 rangerY=1;
 rangerX=1;

rangerImageWidth = 350;
rangerImageHeight = 430;

var rangerObject= "";

window.addEventListener("keydown", my_keydown);

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		rangerObject = Img;

		rangerObject.scaleToWidth(rangerImageWidth);
		rangerObject.scaleToHeight(rangerImageHeight);
		rangerObject.set({ top:rangerY, left:rangerX});
		canvas.add(rangerObject);
	});
}

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		newImage('rr1.png');
		console.log("Agni, The Red Ranger");
	}
	if(keyPressed == '71')
	{
		rangerX = 200;
		
		newImage('gr.png');
		console.log("Juvenile, The Green Ranger");
	}
	
	if(keyPressed == '89')
	{
		rangerX = 350;
		
		newImage('yr.png');
		console.log("Happy, The Yellow Ranger");
	}
	if(keyPressed == '80')
	{
		rangerX = 600;
		
		
		newImage('pr.png');
		console.log("Amity, The Pink Ranger");
	}
	if(keyPressed == '66')
	{
		rangerX = 620;
	
		newImage('br.png');
		console.log("Aman, The Blue Ranger");
	}
	
}

