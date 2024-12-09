# React Native Dimensions.get('window') returns undefined

This repository demonstrates a common error encountered when using the `Dimensions` API in React Native to access screen dimensions. The error occurs when attempting to access the width and height properties of the `Dimensions.get('window')` object before the component has fully mounted or the dimensions have been calculated.

## Problem

The code uses `Dimensions.get('window')` to get the screen dimensions. However, if accessed before component mount or dimension calculation, it will result in `undefined`.

## Solution

The solution involves using the `useEffect` hook to wait for the component to mount before accessing the dimensions. Additionally, the solution listens to dimension changes using `Dimensions.addEventListener` to ensure the dimensions are updated when the screen orientation changes or the device is rotated.

## How to run

1. Clone the repository
2. `cd` into the repository
3. Run `npm install` to install the dependencies
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app on an emulator or a physical device