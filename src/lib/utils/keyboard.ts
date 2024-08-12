import React from "react";

export function isEnter<T extends HTMLElement>(
  e: React.KeyboardEvent<T> | KeyboardEvent,
): boolean {
  // e.keyCode is for Safari
  return e.key === "Enter" && e.keyCode != 229;
}

export function withCtrl<T extends HTMLElement>(
  e: React.KeyboardEvent<T> | KeyboardEvent,
): boolean {
  // if platform is Mac, use Command instead of Ctrl
  return e.ctrlKey || e.metaKey;
}

export function withShift<T extends HTMLElement>(
  e: React.KeyboardEvent<T> | KeyboardEvent,
): boolean {
  return e.shiftKey;
}

export function withAlt<T extends HTMLElement>(
  e: React.KeyboardEvent<T> | KeyboardEvent,
): boolean {
  return e.altKey;
}
