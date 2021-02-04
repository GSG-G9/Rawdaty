# MainInput Component
 - In that component `type` attribute is Required and the rest of the attribute depends on it, as shown below
## Type:text
- ### **Code Exampe**
```jsx
<MainInput type="text" textLabel="أدخل إسم الروضة :" />
````
- ### **Snapshot**
![](https://i.imgur.com/lvuQCs5.png)

- ### **Api**
Property | Description | Type | Default
--- | --- | --- | --- 
width | width value | string | `300px`
height |  height value | string | `40px` 
placeholder | short hint that describes the expected value of an input field  | string | - 
defaultValue | The initial value | string  | - 
borderColor | set the color of an element's four borders | string |  `--main-gray` 
textLabel | label value for input | string | - 
fontColor | label Color font value | string | `#000000` 
onChange | Callback when user input | function(e) | - 

## Type:textArea
- ### **Code Exampe**
```jsx
<MainInput type="textArea" textLabel="وصف عن الروضة  :" />
````
- ### **Snapshot**
![](https://i.imgur.com/cmmDZim.png)


- ### **Api**
Property | Description | Type | Default
--- | --- | --- | --- 
width | width value | string | `300px`
height |  height value | string | `70px` 
placeholder | short hint that describes the expected value of an input field  | string | - 
defaultValue | The initial value | string  | - 
borderColor | set the color of an element's four borders | string |  `--main-gray` 
textLabel | label value for input | string | - 
fontColor | label Color font value | string | `#000000` 
onChange | Callback when user input | function(e) | - 

## Type:date
- ### **Code Exampe**
```jsx=
 import moment from 'moment';
 
 <MainInput
    type="date"
    textLabel="فترات الدوام"
    defaultValue={[
      moment('12:08:23', 'HH:mm:ss'),
      moment('12:08:23', 'HH:mm:ss'),
    ]}
  />
````
- ### **Snapshot**
![](https://i.imgur.com/Q5y05Uj.png)


- ### **Api**
Property | Description | Type | Default
--- | --- | --- | --- 
width | width value | string | `300px`
height |  height value | string | `40px` 
defaultValue | The initial value | [moment,moment]  | - 
borderColor | set the color of an element's four borders | string |  `--main-gray` 
textLabel | label value for input | string | - 
fontColor | label Color font value | string | `#000000` 
onChange | A callback function, can be executed when the selected time is changing | function(time: moment, timeString: string): void | - 

## Type:rangeSlider
- ### **Code Exampe**
```jsx=
 <MainInput type="rangeSlider" textLabel="رسوم الطفل :" />
````
- ### **Snapshot**
![](https://i.imgur.com/2jFW7vt.png)


- ### **Api**
Property | Description | Type | Default
--- | --- | --- | --- 
width | width value | string | `300px`
max | The maximum value the slider can slide to | number | `0`
min | The minimum value the slider can slide to | number | `900`
textLabel | label value for input | string | - 
fontColor | label Color font value | string | `#000000` 
onSliderChange | A callback function, can be executed when the selected time is changing | function(time: moment, timeString: string): void | - 

## Type:search
- ### **Code Exampe**
```jsx=
import { SearchOutlined } from '@ant-design/icons';

<MainInput type="search" textLabel="أدخل إسم الروضة :" />
````

- ### **Snapshot**
![](https://i.imgur.com/roCCdt5.png)

- ### **Api**
Property | Description | Type | Default
--- | --- | --- | --- 
width | width value | string | `300px`
height |  height value | string | `40px` 
placeholder | short hint that describes the expected value of an input field  | string | - 
defaultValue | The initial value | string  | - 
borderColor | set the color of an element's four borders | string |  `--main-gray` 
textLabel | label value for input | string | - 
fontColor | label Color font value | string | `#000000` 
onChange | Callback when user input | function(e) | - 

