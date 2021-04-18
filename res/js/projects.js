let projects = [
    {
        name: "Deep Q Learning in Minecraft",
        image_file: "MineRL.png",
        language: "Python",
        description: "Applies the Deep Q Learning algorithm using a convolutional neural network to have an agent learn to fight zombies in a closed minecraft environment. This is done using Microsoft's Project Malmo (to create the environment) and tensorflow/keras to structure the network.",
        links: {
            Source: "https://github.com/rishavb123/MineRL",
            Report: "https://minerl.bhagat.io/"
        }
    },
    {
        name: "Quantum Physics with Deep Learning",
        image_file: "QuantumPhysics.jpg",
        language: "Python",
        description: "Trains a keras neural network on data of the solved schrodinger's equation. The inputs of this model are samples from the potential from within the infinite asymmetric potential well and the output is samples from the solved wavefunction. The data is collected by solving the schrodinger's equation using a numeric method called the Runge-Kutta method.",
        links: {
            Source: "https://colab.research.google.com/github/rishavb123/QuantumPhysicsWithDeepLearning/blob/master/Solving_the_Schrodinger_Equation_with_Deep_Neural_Networks.ipynb"
        }
    },
    {
        name: "GAN Colorify Me",
        image_file: "GANColorifyMe.png",
        language: "Python",
        description: "Deep Convolutional Generative Adversarial Networks trained on a dataset of images of my face to generate gray 28x28 images of my face. Then, this image is send into another network (which first runs convolution and then deconvolution) to predict the colors of the image.",
        links: {
            Source: "https://github.com/rishavb123/GANColorifyMe"
        }
    },
    {
        name: "COVID-19 Data Analysis",
        image_file: "COVID_Graph.png",
        language: "Python",
        description: "Analysis of COVID-19 data collected by John Hopkins using python. Created many different models, including Markov Chains, Recursive LRC Circuits, Recurrent Neural Networks, Logistic Models, etc. Wrote a report based on the finding of the data analysis of growth rates, derivatives, etc.",
        links: {
            Source: "https://github.com/rishavb123/COVID-19-data-analysis",
            Report: "https://github.com/rishavb123/COVID-19-data-analysis/blob/master/readme/main.pdf"
        }

    },
    {
        name: "Deep Q Learning Library",
        image_file: "DeepQLearningLibrary.png",
        language: "Python",
        description: "This is a deep q learning library built to work with a custom environment system I created. To apply it to gym environments I created a wrapper to convert a gym environment into my environment library.",
        links: {
            Source: "https://github.com/rishavb123/DeepQLearningLibrary"
        }
    },
    {
        name: "College Data Analysis",
        image_file: "CollegeData.png",
        language: "Python",
        description: "I applied a neural network that I coded myself (or the option to use a tensorflow model) on a college dataset so that it would predict your chances of making a college from our high school (South Brunswick High School) based on GPA and SAT/ACT. I also used a genetic algorithm to optimize the hyperparameters of the neural network.",
        links: {
            Source: "https://github.com/rishavb123/CollegeData"
        }
    },
    {
        name: "OpenCV Utils",
        image_file: "OpenCV.png",
        language: "Python",
        description: "A package created to optimize the workflow of my future computer vision projects. This package setups up cameras, parses command line arguments, streams video, and even creates virtual webcams from the video input you specify (which could be a camera or a video file).",
        links: {
            Source: "https://github.com/rishavb123/OpenCVPythonUtils"
        }
    },
    {
        name: "Viking Tutors",
        image_file: "VikingTutors.png",
        language: "HTML CSS JS",
        description: "This is a website for students to access online learning material specific to our school. I created this using firebase as the database and authentication so that only students of our school can watch the videos and only teachers can upload. I have also added zoom integration for live streams and used the youtube api to display videos.",
        links: {
            Source: "https://github.com/rishavb123/VikingTutors",
            Firebase: "https://github.com/rishavb123/VikingTutorsFirebase",
            View: "https://vikingtutors.org/"
        }
    },
    {
        name: "Flappy Bird Bot",
        image_file: "FlappyBirdBot.jpg",
        language: "Python",
        description: "I used a genetic algorithm to train a neural network to play my version of the game flappy bird. I trained a variety of different models for many different configurations of the game and stored them into files.",
        links: {
            Source: "https://github.com/rishavb123/FlappyBirdBot"
        }
    },
    {
        name: "Neural Network",
        image_file: "NeuralNetwork.jpg",
        language: "Java",
        description: "This is an artificial neural network that I have created from scratch using my math library in java. I have used it to recognize hand written digits using the mnist dataset and even classify certain flowers. It uses concepts of supervised learning and stochastic gradient dissent.",
        links: {
            Source: "https://github.com/rishavb123/NeuralNetwork/blob/master/src/io/bhagat/ai/supervised/NeuralNetwork.java",
            Docs: "https://neuralnetwork.bhagat.io/io/bhagat/ai/supervised/NeuralNetwork.html"
        }
    },
    {
        name: "Math Library",
        image_file: "MathLibrary.jpg",
        language: "Java",
        description: "This is java library that can do a lot of math including concepts from statistics, linear algebra, and calculus. It is mostly focused on linear algebra for now since that has to most application, but I will add more to it.",
        links: {
            Source: "https://github.com/rishavb123/NeuralNetwork/tree/master/src/io/bhagat/math",
            v2: "https://github.com/rishavb123/JMathLib",
            Docs: "https://neuralnetwork.bhagat.io/"
        }
    },
    {
        name: "Environmental Justice Georgia Tech Website",
        image_file: "EnvironmentalJusticeWebsite.png",
        language: "HTML CSS JS",
        description: "This is a website that I created to raise awareness about the enviornmental injustices occuring around the world and specifically in Atlanta, Georgia. The target audience is Georgia Tech students, but it is available for anyone to view. It uses firebase firestore as the databse to store all the events and programs.",
        links: {
            View: "https://envjustice.bhagat.io",
            Source: "https://github.com/rishavb123/EnvironmentalJusticeGatechWebsite"
        }
    },
    {
        name: "Global Temperature Data Analysis",
        image_file: "GlobalTemperatures.png",
        language: "Python",
        description: "Using the same framework from the COVID-19 data analysis project to display a dashboard of different views of the global climate data. The analysis shows troubling trends that need to be slowed if we want the Earth to continue to continue to be sustainable.",
        links : {
            Source: "https://github.com/rishavb123/GlobalTemperatureDataAnalysis"
        }
    },
    {
        name: "Server Data",
        image_file: "ServerData.png",
        language: "Node JS",
        description: "This is a react app that connects to a python server to visualize, modify, and analyze some old server data. It has a variety of ways to effectively edit, save, and share a copy of modified data. Using machine learning and other data analysis methods, this app can also predict certain values and analyze the performance of some servers.",
        links: {
            View: "https://data.bhagat.io",
            Source: "https://github.com/rishavb123/ServerData"
        }
    },
    {
        name: "Home Server",
        image_file: "HomeServer.png",
        language: "Node JS",
        description: "This is a server running in my home made using nodejs and express that I made to host files, control some of the smart devices in my house, and even send me emails when needed.",
        links: {
            Source: "https://github.com/rishavb123/HomeServer"
        }
    },
    {
        name: "Smart Room",
        image_file: "SmartRoom.jpg",
        language: "Node JS",
        description: "This serves a react app that connects to my Home Server to control some of the smart home devices in my house (mainly in my room). It makes them voice controlled rather than only controlled by my phone.",
        links: {
            Source: "https://github.com/rishavb123/SmartRoom"
        }
    },
    {
        name: "Security Camera",
        image_file: "SecurityCamera.jpg",
        language: "Python",
        description: "This is a project that uses the webcam and opencv to detect motion, email me a video of this motion, detect faces, and more. I made a google form to control this camera to through a phone.",
        links: {
            "Old Project": "https://github.com/rishavb123/Security_camera",
            Source: "https://github.com/rishavb123/SecurityCamera"
        }
    },
    {
        name: "Timer",
        image_file: "Timer.jpg",
        language: "Node JS",
        description: "This is a node app that can be used to have a synced timer between multiple devices.",
        links: {
            View: "https://timer.bhagat.io",
            Source: "https://github.com/rishavb123/Timer"
        }
    },
    {
        name: "JavaFX Framework",
        image_file: "JavaFxFramework.jpg",
        language: "Java",
        description: "This is a graphic framework that I created to made the setup and creation of graphics easier for java. Behind the scenes it uses javafx to create the animations and drawings that it does.",
        links: {
            Source: "https://github.com/rishavb123/JavaFxFramework"
        }
    },
    {
        name: "Derp Ninjas 4",
        image_file: "DerpNinjas.PNG",
        language: "Java",
        description: "This is Java FX game that I created for the final of my AP Computer Science class. I designed the game so that it could be easily modified to create different game modes such as multiplayer.",
        links: {
            Source: "https://github.com/rishavb123/JavaFxFramework"
        }
    },
    {
        name: "Cheese Moon",
        image_file: "CheeseMoon.PNG",
        language: "Unity",
        description: "This is a game that I created to show a fake origin of the moon and why it is a ball of cheese. It is a 3D game made with unity and you go on a quest to win a giant cheese ball contest, but when things don't go your way . . . ",
        links: {
            Source: "https://github.com/rishavb123/CheeseMoon"
        }
    },
    {
        name: "CSC Admin",
        image_file: "CSCAdmin.PNG",
        language: "Node JS",
        description: "I currently run the back end for the Computer Science Club. So I am currently working on the portal by managing it and adding new features to it. I made automated some of the tasks that we need to do and am working on an app for the computer science club.",
        links: {}
    },
    {
        name: "Machine Learning Learning",
        image_file: "MachineLearning.jpg",
        language: "Python",
        description: "These are some machine learning algorithms that I implemented while learning them using a youtube playlist. I first made it by hand, then used a higher level library called sklearn to do it.",
        links: {
            Source: "https://github.com/rishavb123/MachineLearning"
        }
    },
    {
        name: "Reverse Shell",
        image_file: "ReverseShell.jpg",
        language: "Python",
        description: "This is a python program that connects a client to a server and then gives the server access to the clients terminal.",
        links: {
            Source: "https://github.com/rishavb123/ReverseShell"
        }
    },
    {
        name: "PS4 Mouse Controller",
        image_file: "PS4Mouse.jpg",
        language: "Python",
        description: "This is a python program using pygame that allows you to use your ps4 controller as a mouse. It can left and right click and move the mouse all with the controller.",
        links: {
            Source: "https://github.com/rishavb123/PS4MouseMove"
        }
    },
    {
        name: "Water Reminder",
        image_file: "WaterReminder.PNG",
        language: "Python",
        description: "This is a python program that will make sure that someone does not forget to drink water. When the program is run, you have to enter in the email of the person you want to remind.",
        links: {
            Source: "https://github.com/rishavb123/WaterReminder"
        }
    },
    {
        name: "My Website",
        image_file: "Website.PNG",
        language: "HTML, CSS, JS",
        description: "This is site that you are currently viewing.",
        links: {
            View: "#",
            Source: "https://github.com/rishavb123/bhagat.io"
        }
    },
    {
        name: "Omnifood",
        image_file: "Omnifood.jpg",
        language: "HTML, CSS, JS",
        description: "This is a website I build using the guidance of a Udemy course on HTML, CSS, and a little bit of jQuery. It is a website for a fake company that will sell you food with three different plans.",
        links: {
            View: "https://rishavb123.github.io/OmniFood/",
            Source: "https://github.com/rishavb123/rishavb123.github.io/tree/master/OmniFood"
        }
    },
    {
        name: "My Awesome Game",
        image_file: "AwesomeGame.PNG",
        language: "Python",
        description: "This is a fun game that I created using python and pygame in the Computer Science Club during my freshman year of high school.",
        links: {
            Source: "https://github.com/rishavb123/RishavsGame"
        }
    }
]