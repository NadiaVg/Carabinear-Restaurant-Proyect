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
 
* Valoration:  ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
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
    
## User requirements

__R.1 Platform__

 * R.1.1 The application is designed for mobile devices. 
 
 * R.1.2 It is possible to use it on tables and pc, although it is not recommended.
 
 
__R.2 Access__

 * R.2.1 Can be access without logging in is possible (but with limitations in the future)
 
 * R.2.2 You can also access as a normal user or with administrator role.
 
 
__R.3 Structure__

 * R.3.1 The main screen is the login
 
  * _R.3.1.1 You can choose to register, login as a guest or log in._
  
 * R.3.2 Home
 
   * R.3.2.1 A random restaurant appears_
  
   * R.3.2.2 (Restaurant with rate)_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
  
 * R.3.3 List
 
   * R.3.3.1 Search_
  
   * R.3.3.2 (Restaurant with rate)_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
  
 * R.3.4 Profile
 
   * R.3.4.1 Profile picture and name_
  
   * R.3.4.2 (Voted restaurants)_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
  
   * R.3.4.3 (Rated restaurants)_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
  
   * R.3.4.4 Settings_
  
     * R.3.4.4.1 Update name, email, CP (and image)_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
   
     * R.3.4.4.2 Log out_
   
     * R.3.4.4.3 Dark Mode_
   
 * R.3.5 Contact
   * R.3.5.1 Questions and answers_
   * R.3.5.2 Social media
   
     * R.3.5.1.1 Contact form
   
  * R.4 User interaction
    * R.4.1 Messages_
   
    * R.4.2 Alerts_
   
    * R.4.3 Validation_
   
## Use Case
  
  
## System performance

_Free Storage: 1GB_

_RAM: 4GB_

_S.O: Windows 10_

_CPU: Intel core i3, AMD Ryzen 4_

### Browser Support 

* Mobile Browsers

![image](https://user-images.githubusercontent.com/114822178/208328676-c7b951a2-3c42-4a1a-a476-8529c5c16b0c.png)

* Desktop Browsers

![image](https://user-images.githubusercontent.com/114822178/208328692-ef658c16-bb3f-44de-9568-60c818212adc.png)


### Interfaces 

https://www.figma.com/file/eRHzMXWXHjJNGHKYmk7mWK/ProyectoEmpresa?t=2lL4mlxGv7QGp0RY-1

 #### Usabilidad : 
 
   _Eye-catching and simple design_
   
   _Intuitive actions_
   
   _No abrupt changes from one interface to another_
   
   _Customization_ ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)
   
#### Accesibilidad :

   _Low-profile colors_
   
   _Questions and answers_
   
   _Dark mode_  ![image](https://img.shields.io/badge/STATUS-IN%20DEVELOPMENT-yellow)

### Manuals

 #### Requirements
 
   _Visual Studio Code_
   
   _My SQL Workbench_
   
   _POSTMAN_
   
 #### Instalation and start
 
 
 ![image](https://user-images.githubusercontent.com/114822178/208330294-f0bf7f11-9e01-4e12-a1d5-3a249ced5fe4.png)
 
 ![image](https://user-images.githubusercontent.com/114822178/208330617-3093dc97-d5b0-4c0c-8f49-66f256361e3e.png)

 

``` cd YOURFOLDER ```

``` git clone https://github.com/NadiaVg/Carabinear-Restaurant-Proyect.git ```

 ![image](https://img.shields.io/badge/frontend-ionic%2Fangular-9cf)

``` cd carabinear/frontend ```

``` npm install ```

_to start_

``` ionic serve ```

![image](https://img.shields.io/badge/frontend-express.js-succes)

``` cd carabinear/backend ```

``` npm install ```

_to start_

``` node index.js ```
   
## Technology stack

### Frontend

![image](https://user-images.githubusercontent.com/114822178/208330911-3416cd80-b22b-4f53-a006-5c75ad4d12a4.png)


### Backend
   
![image](https://user-images.githubusercontent.com/114822178/208330936-04e1771e-4f45-4b0d-a740-98d8c25da2f4.png)

## Technology comparison


