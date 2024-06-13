[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15054309&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

The images featured in this project are photos of the front-end of various cars (taken by me) at various car shows. They are processed with a combination of multiple examples, the background uses a slightly modified version of the blur example (https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/9cf64f5c92846303b5b000cc654f7a2f742d80bb/sketch.js). The car and car face are both processed with an edited version of the greyscale layering example (https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/32fecc77baeb2e1003ebf161a2750a58ba550bae/sketch.js). I made two masks for each image. One that seperates the car from the background and one that seperates the 'face' of the car from the car itself. This meant I have 3 layers with 3 different things going on. The background is blurred first and then it does another pass to process the car and face. 

My original idea was inspired by my passion for cars and the interesting notion that cars appear (and are intentionally designed) to have faces. I didnt like the idea of having the rest of the car blend into the background however so I explored the idea of having 2 masks for each image. The method I used was to submit the same images twice to the AI masking algorithm. One set had training images to identify cars and the other set had training masks to identify faces on cars. I then combined them in code by just adding another source image which could then be processed and identified seperately to the others. 

9/05/24
I made some masks for a few of my images but they are a bit rough around the edges. I am also unsure if they are good examples because the faces on some of them arent very clear. 

14/05/24 
I started playing around with the default code but I am unsure how it will apply to my images and how I can seperate the process into 3 parts to be able to make all layers of my image look different.

18/05/24
I got my images back and the masks that the AI made are good. I successfully added a 3rd layer to the code and it works quite easily, I was expecting to have more problems with that. My brain isnt functioning very well and I dont feel very inspired with how I want the image to look. 

21/05/24 
I have decided that I want to make the background pixelized, the car greyscale and the face red. I am finding it difficult to find a way to fill the whole layer one solid colour instead of a bunch of squares or circles. I think it might be because x = (random(sourceImg.width)); this variable is random so its not filling all of the pixels, just random ones. Ive tried making a way to select the entire width and height of the image by using integer ranges etc but it just breaks. Im not sure if this is the solution.

24/05/24
U have changed my idea and I want the background to be blurred, I copied one of the examples and got it working by itself and I am happy with the results but I am having trouble combining the original code and the new code to make the background blurry and the car a solid color. 

I have figured out that the solution was to use everything inside the IF statment that defines the area of the background and putting the code for the pointalism in the else statement. Previously I was trying to combine the if statements for both examples and it was only doing the blurring. 

25/05/24 
I am still trying to get the layers to be one solid colour but I cant find an example that is suitable and I keep getting side tracked by other things I need to fix. Even though I have combined the blurring and pointalism examples and they work on their own, I still cannot get them to both apply to the image at the same time

26/05/24
I think the problem is that I am trying to do everthing at once but I tried the layering example with the greyscale and it took a lot of trial and error but I got it to work and now I have two different things happening one after the other. My next mission is to try and make the face solid red before hand in

28/05/24
I have scrapped the original pointalism code and swapped it out with the pointalism method in the layering example. This fixed the issue that I forgot I even had of black lines going across the image. Im not sure how it fixed it but im happy I dont have to deal with that anymore.

29/05/24
I have given up on trying to make the layers a solid color. It seems like the kind of thing that would be simple to do but all of these i's and j's and maths really go over my head and Im scared of straying too far from the examples (especially so close to hand in)

30/05/24
I polished up the output and finalised the process. The background will be blurred, the car will be pointalismd/pixelated but stay the same colour and the face will be made of lime green circles. I tested it with red but it looked scary and menacing and that is not the aim I was going for so I cahnged it to a more fun and vibrant colour that still stands out but also doesnt look out of place. 


Overall I am happy with this outcome and I am glad that I was able to get a bit creative with using 2 masks instead of one. I would have liked to find out how to make a layer a solid colour but in the end I ran out of time. I think I could have also made the pointalism on the car look a bit nicer. The squares are a bit too unorganised and once again it comes down to me not being able to figure out how to make an orderly grid rather than selecting random pixels. 