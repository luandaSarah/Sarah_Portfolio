"use client";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function LoadingWrapper({ content: content }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      
      // intervalId = setInterval()
    
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simule un délai de chargement
     
      setIsLoading(false);
    };

    loadApp();
  }, []);

  return isLoading ? <Loader /> : content;
}
