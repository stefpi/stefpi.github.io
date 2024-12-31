---
title: 'types of neural networks'
date: '2024-12-29'
desc: exploring the popular/important neural network architectures
tags: ['machine-learning']
---

Learning about the different major types of neural networks in order to understand what the transformer architecture built on top of.

I have taken CISC 352, CISC 371 and CISC 271, all courses focused on aritifial intelligence and the linear algebra methods behind all neural networks. With this knowledge, I think it is time to explore the different types of neural networks and what problems they were each created to solve.

The types I explored are based on all the networks described in a [wikipedia article][1] and I picked to write about the ones that I found interesting, so not everything may be included in this post.

## table of contents


1. [neural networks](#neural-networks)
2. [feed forward networks](#feed-forward-networks)
    1. [binary classification]()
    2. [autoencoder](#autoencoders)
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

### binary classification FFN (multi)

A binary classification FFN takes in input data on one side and outputs a label that is either -1 or 1. It classifies data into two categories and no more. It is the simplest implementation of an artificial neural network.

### multi-class classification FFN

A multi-class classification FFN takes in input data on one side and outputs a probability distribution as the output. This distribution shows how likely it is that each of the labels at the output describe the inputted data. For example, the MNIST model which recognizes hand drawn digits could take in an image of a 3 and then return the probability distribution that the image is each of the ouputs (labels 0 to 9). A well trained MNIST model may ouput that there is a 90% chance the image is a 3, but also may give some small probabilities to the other numbers.



### autoencoders
### convolutional

## recurrent neural networks
### boltzmann machine
### long short-term memory
### stochastic
## radial basis function
## modular neural networks
### committee of machines
## physical neural networks
## encoder-decoder networks


## references

[1]: https://en.wikipedia.org/wiki/Types_of_artificial_neural_networks
[2]: https://en.wikipedia.org/wiki/Feedforward_neural_network