# Carabinear

## Index

* [Introduction](#introduction)

* [Diagrams and justification](#diagrams-and-justification)
  * [E/R](#er)
  * [UML](#uml)
  * [Class Diagram](#class-diagram)
  * [Explanation of the data model](#explanation-of-the-data-model)
    * [Relations](#relations)

* [User requirements](#user-requirements)

* [Use Case](#use-case)

* [System performance](#system-performance)

* [Interfaces](#interfaces)

* [Manuals](#manuals)

* [Technology stack](#technology-stack)
 
* [Technology comparison](#technology-comparison)

* [Planning](#planning)

* [Conclusion](#conclusion)

## Introduction

### Why?

_Personally I feel some interest towards gastronomy and in social networks I observe many professionals (and not so professionals) who are dedicated to try restaurants and give their opinion._

_So I decided to make an application for mainly people dedicated to gastronomy, value and store the restaurants they have tried, and in turn receive inspiration from other users._

### Company

_This project is a personal idea, but elaborated with a view to "The Wise Dreams"._


## Diagrams and justification

### E/R



### UML



### Class Diagram



### Explanation of the data model

* Users:
  * id: identification number
  * email: email address
  * name: user name
  * image: profile picture
  * CP: zip code
  * admin: rol
 
* Valoration: 
  * restaurantId: identification number of valorated restaurant (foreign key)
  * userId: identification number of valuator user (foreign key)
  * puntuation: valoration from user to restaurant
  * likes: if the user clicks on the like icon it is stored, otherwise it is not.
  * dislike: if the user clicks on the dislike icon it is stored, otherwise it is not.

* Restaurants: 
  * id: identification number
  * CP: zip code
  * name: restaurant name
  * direction: restaurant direction without CP
  * category: restaurant category, type of food
  * image: restaurant image
  * likes: total of likes
  * dislikes: total of dislikes

* Dishes
  *  id: identification number
  *  name: dish name
  *  image: dish image
  *  restaurantId : identification number of the restaurant it belongs to (foreign key)

#### Relations

##### User-Restaurant(many-to-many):

    _Several users rate several restaurants_
    
##### Restaurant_Dish(one-to-many):

    _One restaurant has several dishes_



