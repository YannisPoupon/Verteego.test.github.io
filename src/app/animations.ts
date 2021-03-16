import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export let fadeOut = trigger("fadeOut", [
    transition("*  => void", [
      style({opacity : 1}),
      animate("1500ms 0s cubic-bezier(.2,.43,.4,1.01)", style({opacity : 0, transform : "scale(2)"}))
    ])
  ])

  export let fadeIn = trigger("fadeIn", [
    transition("void => *", [
      style({opacity : 0}, ),
      animate("1500ms 0s cubic-bezier(.53,-0.01,.78,.39)", style({opacity : 1}))
    ])
  ])

  export let fadeInOut = trigger("fadeInOut", [
    transition("void => *", [
      style({opacity : 0}, ),
      animate("1500ms 0s cubic-bezier(.53,-0.01,.78,.39)", style({opacity : 1}))
    ]),
    transition("*  => void", [
      style({opacity : 1}),
      animate("1500ms 0s cubic-bezier(.2,.43,.4,1.01)", style({opacity : 0}))
    ])
  ])


