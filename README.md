# Accolite Date Picker Web Component 

**Details:**
   1. Component Name: **accolite-date-picker**
   2. Component Class Name: **AccoliteDatePicker**
   3. Extended Prototype Class: **HTMLElement**
   4. Configuration Props or attributes that component can accept: value, min, max
      ```javascript
         index.html: 
         // Format : YYYY-MM-DD ( Sets the default value to the value attribute )
         <accolite-date-picker value="2020-04-16">
         </accolite-date-picker>
      ```

# How to use:

* Git clone the repository and just run index.html to chrome.

 **Tips:**
 * Value of **Date Picker** can be changed on updating the attribute as well over Elements Tab ( Developer Tools )
 * Also in console you can change the value and the UI will be updated accordingly ( Model Oriented Approach ):
 ```javascript
  // In Chrome Developer tools (console tab):
  const datePicker = document.querySelector("#accolite-date-picker")
  // getter function will be called and you will get the current value of Date Picker value:
  datePicker.value
  // Setter function will be called, and the UI will be updated accodingly
  datePicker.value = "2020-04-18";
 ```