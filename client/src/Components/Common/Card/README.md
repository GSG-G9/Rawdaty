Relates #37
### Create Card Component
#### The file client/src/Components/Common/Card/index.js contains the following :
- Import of React
- Import of prop-types for validation purposes
- Import the Card component fron antd
- Import the Rating component which we declared before ,the related issue is #40
- Import the style.css file 
- Make a destructure for the Meta data from Card component which contains the title and description
- The CardComponent function takes a set of required props which are :
#### Props
Property | Description | Type 
--- | --- | --- 
title | card title | string
rating |  rating value | number 
reviewersNo |  reviewers number | number 
location | the location | string
price | range of price from - to | string
cover | cover image url | string

- Pass the props to the card component
- Make prop types validation

#### Create style.css file to make custom style for the card
#### How to use
This code snippet show an example of using card component
```
 <CardComponent
      title="روضة الامل المشرق"
      rating={4}
      reviewersNo={10}
      location="غزة-فلسطين"
      price="200-500 شيكل"
      cover="https://thumbs.dreamstime.com/b/group-preschool-children-engaged-handcrafts-group-preschool-kids-engaged-handcrafts-children-teacher-classroom-148143087.jpg"
      kindergartenId={1}
    />
```
#### This is a screenshot for the result
![](https://i.imgur.com/F9boyUZ.png)

