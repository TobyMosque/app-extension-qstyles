(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2097e8"],{a8fa:function(e){e.exports={type:"directive",value:{type:"Function",desc:"Function to call after user has hold touch/click for the specified amount of time",params:{details:{type:"Object",desc:"Event details",definition:{evt:{type:"Object",desc:"Original JS event Object"},touch:{type:"Boolean",desc:"Triggered by a touch event"},mouse:{type:"Boolean",desc:"Triggered by a mouse event"},position:{type:"Object",desc:"Event Position Object",definition:{top:{type:"Number",desc:"Vertical offset from top of window",examples:[235]},left:{type:"Number",desc:"Horizontal offset from left of window",examples:[235]}}},duration:{type:"Number",desc:"How long it took to trigger the event (in milliseconds)",examples:[612]}}}},returns:null,examples:['v-touch-hold="fnToCall"']},arg:{type:"Number",desc:"x:y:z, where x is the amount of time to wait (in milliseconds), y is the touch event sensitivity (in pixels) and z is the mouse event sensitivity (in pixels)",default:"600:5:7",examples:['v-touch-hold:400="fnToCall"','v-touch-hold:400:15="fnToCall"','v-touch-hold:400:10:10="fnToCall"']},modifiers:{capture:{type:"Boolean",desc:"Use capture for touchstart event"},mouse:{type:"Boolean",desc:"Listen for mouse events too"},mouseCapture:{type:"Boolean",desc:"Use capture for mousedown event"}}}}}]);