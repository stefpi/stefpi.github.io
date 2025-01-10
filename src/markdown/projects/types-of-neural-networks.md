---
title: 'types of neural networks'
date: '2024-12-29'
desc: exploring the popular/important neural network architectures
tags: ['machine-learning']
---

Learning a bit about the different major types of neural networks in order to understand what the transformer architecture built on top of.

I have taken CISC 352, CISC 371 and CISC 271, all courses focused on artificial intelligence and the linear algebra methods behind all neural networks. With this knowledge, I think it is time to explore the different types of neural networks and what problems they were each created to solve.

The types I explored are based on all the networks described in a [wikipedia article][1] and I picked to write about the ones that I found interesting, so not everything may be included in this post.

<!-- ## table of contents


1. [neural networks](#neural-networks)
2. [basic feed forward networks](#feed-forward-networks)
    1. [binary classification]()
    3. [convolutional](#convolutional)
3. [recurrent neural networks](#recurrent-neural-networks)
    1. [boltzmann machine](#boltzmann-machine)
    2. [long short-term memory](#long-short-term-memory)
    3. [stochastic](#stochastic)
4. [radial basis function](#radial-basis-function)
5. [modular neural networks](#modular-neural-networks)
    1. [committee of machines](#committee-of-machines)
6. [physical neural networks](#physical-neural-networks)
7. [encoder-decoder networks](#encoder-decoder-networks)
    1. [autoencoder](#autoencoders) -->


## neural networks

Neural networks is an assortment of artificial neurons. These neurons are packed into layers, and then the layers are assorted into networks. Each layer may perform a different transformation with the data it is given. There is also an input layer where data values are fed into the network, but no computation happens on this layer.

Each artificial neuron in a network has an associated input $\vec{x}$ (all outputs of $n$ previous layer neurons), weight vector $\vec{w}$ and bias $b$. This forms the linear equation:

$$ w_1 x_1 + w_2 x_2 + ... + w_n x_n + b $$

The bias term is there so that neurons can still activate even when the weighted sum of all the inputs is too small. This helps offset results, since real world data can be quite unclean and hard to effectively train a neural network with.

Each neuron also has an activation function (ex. sigmoid, ReLU) which takes the output of the linear equation of the neuron and maps it to a different range. For example sigmoid squishes the output of a neuron to a value between -1 and 1. ReLU outputs the number as is if it is positive, but outputs 0 if it is negative.

The training of a neural network means adjusting these weights in the neural network in order to converge towards the minimum amount of loss. The loss is the difference between the intended output of the network (the label or real answer) and the actual output, or what the network predicted the answer to be. There are different functions which calculate this loss in different way (ex. squared loss).

The loss value is used to calculate backpropogation values and calculate the descent vector and adjust the weight vectors towards the local minimum of loss. The back propagation process deserves its own post and I will not discuss it here.

This is the very basic understanding of what a neural network is. There are many resources online that can better explain this and help you implement the basics of neural networks.


## feed forward networks

One of the two broad types of artificial neural networks. The flow of the data is uni-directional, which means that input only moves forward through the hidden layers of the network to the output nodes and there are no cycles or loops between the nodes. This is the network what I described above. There are many subtypes of a FFN network.

### binary classification

A binary classification FFN takes in input data on one side and outputs a label that is either -1 or 1. It classifies data into two categories and no more. It is the simplest implementation of an artificial neural network.

### multi-class classification

A multi-class classification FFN takes in input data on one side and outputs a probability distribution as the output. This distribution shows how likely it is that each of the labels at the output describe the inputted data. For example, the MNIST model which recognizes hand drawn digits could take in an image of a 3 and then return the probability distribution that the image is each of the ouputs (labels 0 to 9). A well trained MNIST model may ouput that there is a 90% chance the image is a 3, but also may give some small probabilities to the other numbers.

There are two main types, namely one-vs-rest (OVR) and one-vs-one (OvO) type multi classifiers. 

OvR is a heuristic method for using binary classification algorithms for multi-class classification. This means that we split up a multiple class decision into series of binary decisions (two options). A binary classifier is then trained on each binary classification problem. For example if you had 3 labels: red, green and blue, then you could split it up into 3 binary decisions: whether the colour you are seeing is red or not red (which can also be stated as: it is blue/green), blue or not blue and green or not green. This requires a model for each class and can get tedious to do. Once each model predicts the class membership of your input, the class index with largest score is then used to predict the final class.

OvO is also a heuristic method which splits up the multi-class problem into binary decisions, but slightly differently. Instead of splitting it into whether it is in a specific class or in all others, it does 1v1s with the classes. For example, if we have 3 labels: red, green and blue, the binary classification decisions would be red vs blue, red vs green, green vs blue. Again you need a model for each binary classification, but this time, the number of models is the number of labels choose 2, ${n}\choose{2}$, has exponential growth and you would need way more models for larger datasets.

### convolutional

A convolutional neural network is a network that learns features by itself using a filter. The filter is convolved across the input data (normally using the convolution operation between two matrices). For example, convolving image data with derivative filters can reveal edges of objects in the image, which can be fed into hidden layers which learn features of these edges and can make better predictions about images.

### problems with forward feed networks

Since all layers are fully connected (every node in one layer is connected to every layer in next layer and previous layer) they are prone to overfitting. A process to prevent both these issues is regularization, which involves trimming connectivity (reducing/skipping connections) or using penalizing parameters during training (weight decay). Regularization uses some sort of bias (calculated differently for different techniques) which is used to reduce the weight of a feature in the optimization. The intuition behind this is to make the model simpler in order to promote generalization when the model is used on data outside of the training data. This goes along with the principle that in order to learn, you must forget to some degree (in order to adapt to the new data).

Also, the calculations used for gradients decay exponentially, leading to the vanishing gradient problem. This is because traditional activation functions return a real value between -1 and 1, and backpropagation computes gradients using chain rule, so as the number of variables between 0 and 1 increase and are multiplied together, the result gets smaller and smaller. As this continues, the steps towards the local minimum of the loss function gets smaller and smaller, and eventually the gradient can vanish (quantized out by the computer due to limit on floating point representation) and training can stop all together before reaching the actual local minimum. To fix this, you can use a ReLU activation function which returns $max(0, u)$ or a number of other modern activation functions. Regularization also helps a bit with this problem as well since less connections means less multiplications of decimal numbers.

## recurrent neural networks

Commonly used for sequential data processing, this type of network processes data across multiple time steps. The building block of an RNN is a recurrent unit which maintains a hidden state and is updated each time step based on the current input and previous hidden state. This creates a feedback loop, allowing the networks to learn from past inputs. They suffered from the vanishing gradient problem as well until the introduction of the long short-term memory (LSTM) network.

### long short-term memory

A LSTM network was built specifically to mitigate the vanishing gradient problem. To do so it provides short-term memory of previous hidden states that can last thousands of time steps. This limits the amount of previous hidden states taken into account, reducing multiplication steps that lead to disappearing gradient values. An LSTM unit is composed of a "cell" and three gates: an input gate, an output gate and a forget gate. A cell remembers values over arbitrary time intervals while the tje gates regulate the flow of data in and out of the of the cell. Each gate uses some sort of algorithm or function to map the previous state to a value between 0 and 1 which is then rounded to 0 or 1. Based on this value, the forget gate either discards the new information (mapping = 1), or retains it (mapping = 0). In the same manner, the input gate either stores new information in the cell (mapping = 1) or does not (mapping = 0). The output gate either outputs cell state information (mapping = 1) or not (mapping = 0). Training such a monstrosity is a completely different challenge, but I believe that this explanation is enough for me for now.

<!-- ### stochastic -->

## encoder-decoder networks

Encoder-decoder networks are a class of neural networks that encode data to a latent space (dimensionally reduced space) for efficient representation and then decode that data into another or the same domain of representation. They are useful in image processing, neural machine translation, text summarization, image captioning and speech recognition. They are heavily associated with Transformer networks which are responsible for the recent explosion in large-language models.

### autoencoders

Autoencoders are a specific encoder-decoder network that is specialized in learning how to encode data efficiently by transforming it into a reduced-dimensional representation, and then decoding it back <u>to the original data</u>. During its training, it does not use labels, but rather its loss function is based on the similarity between its input and its decoded output. As it converges to better representations, it is learning which variables in the reduced dimension space most accurately reconstruct the input data.

<!-- ## radial basis function
## modular neural networks
### committee of machines
## physical neural networks -->

<!-- ## references -->

[1]: https://en.wikipedia.org/wiki/Types_of_artificial_neural_networks
[2]: https://en.wikipedia.org/wiki/Feedforward_neural_network