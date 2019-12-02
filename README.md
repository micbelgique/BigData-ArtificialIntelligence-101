# BigData-ArtificialIntelligence-101

## Create your Model

### Custom Vision

First, you will need to go on [this link](https://azure.microsoft.com/en-us/free/students/) to activate your Azure subscription as a student. After it, go on [Azure portal](https://portal.azure.com).
When you are on the portal, create a ressource named Custom Vision. You can find it like this ![Custom Vision](https://github.com/micbelgique/AzureGettingStarted/raw/master/images/Azure-CreateRessource-ComputerVision-ComputerVision.png)
When your ressource is created, go on [Custom Vision Portal](https://customvision.ai/).
On the portal, you can create a new project and select what correspond better to your idea( no idea, you can find datasets on [ImageNet](http://image-net.org/index).
![Create project](https://github.com/micbelgique/BigData-ArtificialIntelligence-101/blob/master/pictures/CreateProject.jpg)

You will normally arrive on a project where there's no pictures so you will need to create your own dataset. Pay attention on pictures you select and don't forget to retrieve testing part inside the dataset. It's recommanded to have at least 50 pictures for each tags.
When you have your dataset, you can begin to upload your pictures. When they are uploaded, you will need to tag them. Pay attention when you tag them because it's the most important part for your model ! ![Tagging](https://github.com/micbelgique/BigData-ArtificialIntelligence-101/blob/master/pictures/TagPictures.jpg)
When you have enough pictures uploaded and tagged, you will need to train your model. To train it, you will need to go inside the train part. For purpose, here we will only use quick training. ![Choosing training](https://github.com/micbelgique/BigData-ArtificialIntelligence-101/blob/master/pictures/ChooseTraining.jpg)
