---
title: 'The miracle of your oven turning on the lights in your house'
date: '2024-10-30'
desc: a very bizzare situation explained by simple electronics
---

Last week I visited a friends house and the most peculiar of things happened. His house lights were out, seemingly because of a faulty breaker box which needed replacing, but would come back to life the instant the dial on his stovetop was turned to on. Half the lights in his house were now controlled by his stove! Must've been a magic trick right?

<br>

This needed to be explained in some way and turns out it is in a very simple way. If this is happening to you, don't worry, the rats inside of your walls have not rewired your electricity as some sick prank.

<br>

### how are houses wired?

In North America, houses connected to the power grid are supplied with split-phase electric power in the form of AC (Alternating Current) at a voltage of 120V (volts) (or 240V for larger appliances including your oven, furnace, dryer, etc.) and a frequency of 60 hz (hertz). What does this mean?

<br>

### voltage and frequency in alternating current circuits
Voltage is the measure of electric pressure in a sense and is electrical potential between two points in a circuit. Electricity behaves in a similar way as air, where air moves rapidly from points of high pressure to points of low pressure to equalize. In the same way, higher differences in electrical potential mean faster movement of electrons from one point to another in an effort to equalize. Voltage is important because according to Ohm's Law, `current = voltage/resistance`, so an increase in voltage is an increase in current.

<br>

To understand why the frequency of a circuit is measured, we must first explore what AC is and why houses are supplied with AC instead of DC (Direct Current). Alternating Current is a type of current where to electrons "switch" directions back and forth an a regular interval or cycle. AC is better suited for long distance current transfer as it loses less power during transit than it would when using DC. This is because of the following two equations related to power.

<br>

<center>P<sub>lost</sub> = I^2 * V</center>

<br>

<center>P<sub>transmitted</sub> = I * V</center>

<br>

We can see that based on these equations, if we maximize voltage but are transferring the same amount of power, then we have a very small current. At the same time, if the current is decreased, then the power lost is minimized since it is based on current squared (a variable squared in an equation has much more effect on the rate of change of an equation, think about the first partial derivative with respect to `I` and then with respect to `V`). So we can conclude that with very high voltage we can have very low power loss across power lines. The reason AC is superior is because it is much easier to increase the voltage of AC than it is to do the same to DC. Since AC is alternating at a fixed interval, we can measure this interval in terms of a frequency, in this case at 60 hertz. So a 60 hertz alternating current will switch its direction 60 times a second. Since your house is wired in AC, this also explains why we have "bricks" for our phone chargers, as they must transform the 120V AC to DC in order to charge your phone battery.

<br>

### split-phase power
A split-phase system includes 3 lines (or legs) being wired to your house. One of them is a neutral (ground) wire, and the other two are both 120V AC lines which are out of phase with each other by 180 degrees. Since AC is a sine wave when plotted based on time against its amplitude (the measure of change in voltage or current of a circuit).

<br>

![figure 1.1](/static/blog/splitphase.png)

<!-- #figure(
  image("image.png", width: 100%),
  caption: "figure 1.1"
) -->

<br>

An AC line being "180 degrees out of phase" means that one wave is half a period out of sync.

<br>

![figure](/static/blog/wave.png)

<br>

Looking back at figure 1.1, we can see what it means for the Lines A and B to be out of sync by half a period. This means that when Line A is at its positive peak, Line B is at its negative peak and vice versa.

<br>

Small appliances in your house connect to one of these live lines since they are designed to use 120V AC to power themselves. Using one line, at every half period, the appliance gets its required 120V (difference between the amplitude peak and 0).

<br>

Larger appliances on the other hand are connected to both of the 120V AC lines. Since they are out of phase by 180 degrees, when one peaks at a voltage of -120V, the other peaks at 120V. So, at peak there is a difference of 240V between the two lines. As a lowly CS student, I initially thought: why do the lines not cancel each other out? Well this is because it is not a line-to-neutral connection, it is a line-to-line (or phase-to-phase) connection and the "phase" voltage is the addition of the magnitudes of the line voltages, which is 240V.

<br>

### so what happened at my friends house?

So now that we know how houses are wired, we can make a very educated assumption of what actually happened. The lights in his house are of course operated with 120V, so they use one of the two hot lines connecting to his house. Since they were not working, we can assume that this line had become defunct, no longer supplying the current necessary for anything relying on 120V to work. Now, since the oven is a 240V appliance, when it is turned on, it uses both hot lines in order to draw its required 240V AC. When this happens, the alive line has the effect of dumping power/connecting the dead phase, which in turn makes all of the previously dead 120V appliances start working! Effectively, you are bringing into function the other 120V line, which helps out its dead counterpart. This was also supported by the fact that when he turned on the dryer (another 240V appliance) the lights, again, turned on.

<br>

Of course, if this happens to you, you probably won't be as interested, but rather would like to get it fixed as soon as possible. Based on my research, such happenings could also signify a broken neutral, but if that is the case you will have much bigger problems and won't really have the chance to play around with turning on the upstairs lights by turning your stovetop dial.
