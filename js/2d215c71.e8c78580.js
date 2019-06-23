(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d215c71"],{c03a:function(e){e.exports={type:"plugin",injection:"$q.loading",props:{isActive:{type:"Boolean",desc:"Is Loading active?",reactive:!0}},methods:{show:{desc:"Activate and show",params:{opts:{type:"Object",desc:"All props are optional",definition:{delay:{type:"Number",desc:"Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time",examples:[400]},message:{type:"String",desc:"Message to display",examples:["Processing your request"]},sanitize:{type:"Boolean",default:"false",desc:"Force use of textContent instead of innerHTML to render message; Use it when the message might be unsafe (from user input)",category:"behavior"},spinnerSize:{type:"Number",desc:"Spinner size (in pixels)",examples:[60]},spinnerColor:{type:"String",desc:"Color name for spinner from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},messageColor:{type:"String",desc:"Color name for text from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},backgroundColor:{type:"String",desc:"Color name for background from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},spinner:{type:"Component",desc:"One of the QSpinners"},customClass:{type:"String",desc:"Add a CSS class to easily customize the component",examples:["my-class"]}}}}},hide:{desc:"Hide it"},setDefaults:{desc:"Merge options into the default ones",params:{opts:{type:"Object",desc:"Pick the subprop you want to define",required:!0,definition:{delay:{type:"Number",desc:"Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time",examples:[400]},message:{type:"String",desc:"Message to display",examples:["Processing your request"]},spinnerSize:{type:"Number",desc:"Spinner size (in pixels)",examples:[60]},spinnerColor:{type:"String",desc:"Color name for spinner from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},messageColor:{type:"String",desc:"Color name for text from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},backgroundColor:{type:"String",desc:"Color name for background from the Quasar Color Palette",examples:["primary","teal-10"],category:"style"},spinner:{type:"Component",desc:"One of the QSpinners"},customClass:{type:"String",desc:"Add a CSS class to easily customize the component",examples:["my-class"]}}}}}}}}}]);