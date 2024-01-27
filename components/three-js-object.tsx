"use client";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX, Stage } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useFBX("/Poimandres.fbx");

  return <primitive object={fbx} scale={0.005} />;
};
const ThreeJSObject = () => {
  return <></>;
};

export default ThreeJSObject;
